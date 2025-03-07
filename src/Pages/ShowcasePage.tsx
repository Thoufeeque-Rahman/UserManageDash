import ButtonComponent from "@/components/common/ButtonCompnent";
import { ContentPreviewCard } from "@/components/common/cards/ContentPreviewCard";
import CountCard from "@/components/common/cards/CountCard";
import { DataCard } from "@/components/common/cards/DataCard";
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
                <CountCard title="Total Users" count={100} icon={User} color="bg-blue-500/50" />
                <CountCard title="Total Users" count={100} icon={User} color="bg-blue-500/50" />
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
                        {/* <Badge className="rounded-full" color="blue">Published</Badge> */}
                    </div>
                }
                className="w-fit"
            />
        </div>
    );
}