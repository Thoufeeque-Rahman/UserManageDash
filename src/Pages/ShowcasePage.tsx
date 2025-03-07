import ButtonComponent from "@/components/common/ButtonCompnent";
import { ContentPreviewCard } from "@/components/common/cards/ContentPreviewCard";
import CountCard from "@/components/common/cards/CountCard";
import { DataCard } from "@/components/common/cards/DataCard";
import { DataTable } from "@/components/common/data/DataTable";
import { StatusBadge } from "@/components/common/data/StatusBadge";
import { Badge } from "@/components/ui/badge";
import { User } from "lucide-react";

export default function ShowcasePage() {
    return (
        <div className="p-6 space-y-4">
            <h1 className="text-2xl font-semibold">Showcase Page</h1>
            <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
                This page is a showcase of the components and utilities that are available in the app.
            </p>
            <DataCard className="w-fit" hoverable={false} glass={false}>
                <h2 className="text-lg font-semibold text-thelicham">DataCard</h2>
                <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
                    A card component that can be used to display data.
                </p>
                <ButtonComponent className="mt-4"><h1>Click me</h1></ButtonComponent>
            </DataCard>
            <div className="grid grid-cols-4 gap-4">
                <CountCard title="Total Users" count={100} icon={User} color="bg-muted/50" />
                <CountCard title="Total Users" count={100} icon={User} color="bg-muted/50" />
                <CountCard title="Total Users" count={100} icon={User} color="bg-muted/50" />
            </div>
            <ContentPreviewCard
                title="Content Preview"
                description="This is a preview of the content card component."
                image="http://unsplash.it/200/150?random&gravity=center"
                imageAlt="Content preview"
                footer={
                    <div className="flex justify-between items-center">
                        <div className="text-xs text-muted-foreground">2023-05-15</div>
                        <StatusBadge status="Published" />
                        {/* <Badge className="rounded-full bg-green-600/25 border-green-600/30 text-green-700" variant='outline'>Published</Badge> */}
                    </div>
                }
                className="w-fit"
            />
            <div className="mt-8">
                <h3 className="text-lg font-medium mb-3">Data Tables</h3>
                <DataTable
                    columns={[
                        { header: "Name", accessor: "name" },
                        { header: "Email", accessor: "email" },
                        { header: "Status", accessor: "status", cell: (info) => <StatusBadge status={info.getValue()} /> },
                        { header: "Role", accessor: "role" },
                        { header: "Last Login", accessor: "lastLogin" },
                    ]}
                    data={[
                        { id: 1, name: "John Doe", email: "john@example.com", status: "Active", role: "Admin", lastLogin: "2 hours ago" },
                        { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Inactive", role: "Editor", lastLogin: "1 day ago" },
                        { id: 3, name: "Bob Johnson", email: "bob@example.com", status: "Active", role: "Viewer", lastLogin: "1 week ago" },
                        { id: 4, name: "Alice Brown", email: "alice@example.com", status: "Pending", role: "Editor", lastLogin: "3 days ago" },
                        { id: 5, name: "Charlie Wilson", email: "charlie@example.com", status: "Active", role: "Admin", lastLogin: "Just now" },
                    ]}
                    pagination={true}
                    searchable={true}
                />
            </div>
        </div>
    );
}