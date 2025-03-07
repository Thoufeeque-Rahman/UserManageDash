import { Loader2 } from "lucide-react";
import { UserTable } from "../../components/UserManagement/UserTable";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import ErrorDisplay from "../../components/common/ErrorDisplay";
import { Pagination } from "../../components/common/Pagination";
import { useState } from "react";
import ButtonComponent from "../../components/common/ButtonCompnent";

export default function UsersManageList() {

    

    return (
        <div className="max-h-max flex-1 p-4 rounded-xl bg-muted/50">
            <UserTable />
            <ButtonComponent onClick={() => {}} variant="default">Add User</ButtonComponent>
        </div>
    )
}