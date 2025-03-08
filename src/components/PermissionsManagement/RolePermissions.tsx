import { Card, CardContent } from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { useState } from "react";

type Permissions = {
    [key: string]: boolean;
};

type Category = {
    selectAll: boolean;
    permissions: Permissions;
};

type Categories = {
    [key: string]: Category;
};

export default function RolePermissions() {
    const [selectAll, setSelectAll] = useState(false);
    const [categories, setCategories] = useState<Categories>({
        Finance: { selectAll: false, permissions: { permission1: false, permission2: false } },
        Voucher: { selectAll: false, permissions: { permission3: false, permission4: false } },
        Broucher: { selectAll: false, permissions: { permission3: false, permission4: false } },
    });

    const handleSelectAll = () => {
        const newState = !selectAll;
        setSelectAll(newState);
        setCategories((prev) => {
            const updatedCategories: typeof categories = {} as typeof categories;
            Object.keys(prev).forEach((category) => {
                updatedCategories[category] = {
                    selectAll: newState,
                    permissions: Object.keys(prev[category].permissions).reduce((acc, key) => {
                        acc[key] = newState;
                        return acc;
                    }, {} as Permissions),
                };
            });
            return updatedCategories;
        });
    };

    const handleCategorySelectAll = (category: string) => {
        setCategories((prev: Categories) => {
            const newState = !prev[category].selectAll;
            return {
                ...prev,
                [category]: {
                    selectAll: newState,
                    permissions: Object.keys(prev[category].permissions).reduce((acc: Permissions, key: string) => {
                        acc[key] = newState;
                        return acc;
                    }, {} as Permissions),
                },
            };
        });
    };


    return (
        <>
            <div className="p-4 bg-muted/50 rounded-xl">
                <h1 className="text-xl font-bold text-[#e40404]">Create Role</h1>
                <Input placeholder="Role Name" className="text-3xl font-bold bg-white mt-4" />
                <Input placeholder="Role Description" className="text-gray-600 mt-2 bg-white" />
            </div>
            <div className="p-4 bg-muted/50 rounded-xl">

                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold text-[#e40404]">Role Permissions</h2>
                    <label className="ml-2 flex items-center">
                        <Checkbox checked={selectAll} onCheckedChange={handleSelectAll} />
                        <span className="ml-2 text-[#e40404] font-medium">Select All</span>
                    </label>
                </div>

                {Object.entries(categories).map(([category, data]) => (
                    <Card key={category} className="bg-white p-4 mt-4 border shadow-none delay-300 transition-all">
                        <div className="flex justify-between items-center">
                            <h3 className="text-md font-semibold">{category.charAt(0).toUpperCase() + category.slice(1)} Management</h3>
                            <label className="ml-2 flex items-center">
                                <Checkbox checked={data.selectAll} onCheckedChange={() => handleCategorySelectAll(category)} />
                                <span className="ml-2 sr-only">Select All</span>
                            </label>
                        </div>
                        <CardContent className="flex gap-4 mt-4">
                            {Object.entries(data.permissions).map(([key, value]) => (
                                <div key={key} className="flex items-center gap-2">
                                    <Checkbox id={key} checked={value} onCheckedChange={() => ((category, key) => {
                                        setCategories((prev) => {
                                            const newPermissions = {
                                                ...prev[category].permissions,
                                                [key]: !prev[category].permissions[key],
                                            };
                                            const allSelected = Object.values(newPermissions).every(Boolean);
                                            return {
                                                ...prev,
                                                [category]: { selectAll: allSelected, permissions: newPermissions },
                                            };
                                        });
                                    })(category, key)} />
                                    <label htmlFor={key} className="text-gray-700">{key.replace("permission", "Permission ")}</label>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </>
    );
}
