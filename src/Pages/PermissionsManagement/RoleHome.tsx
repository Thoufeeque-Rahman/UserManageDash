import { ShieldCheck, UserRoundCheck, UserRoundX, UsersRound } from "lucide-react";
import PermissionsFormSection from "../../components/PermissionsManagement/PermissionsFormSection";
import PermissionsTableSection from "../../components/PermissionsManagement/PermissionsTableSection";
import PermissionsTopbar from "../../components/PermissionsManagement/PermissionsTopbar";
import CountCard from "../../components/CountCard";

const items = [
    {
        title: "Total Staffs",
        count: 23,
        icon: UsersRound,
    },
    {
        title: "Ex-Staffs",
        count: 3,
        icon: UserRoundX,
    },
    {
        title: "Active Staffs",
        count: 20,
        icon: UserRoundCheck,
    },
    {
        title: "Total Admin roles",
        count: 3,
        icon: ShieldCheck,
    }
]

export default function RoleHome() {

    return (
        <div className='grid grid-cols-2 p-4 gap-4'>
            <div className='col-span-2'>
                <PermissionsTopbar items={items} />
            </div>
            <div className="h-full">
                <PermissionsTableSection />
            </div>
            <div>
                <PermissionsFormSection />
            </div>
        </div>
    )
}