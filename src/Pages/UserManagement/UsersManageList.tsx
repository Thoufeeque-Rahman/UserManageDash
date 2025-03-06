import { Loader2 } from "lucide-react";
import { UserTable } from "../../components/UserManagement/UserTable";

export default function UsersManageList() {
    return (
        <div className="max-h-max flex-1 p-4 rounded-xl bg-muted/50" >
            <UserTable />
            {/* <Loader2 size={40} strokeWidth={2} opacity={0.5} className='m-auto animate-spin' /> */}
        </div>
    )
} 