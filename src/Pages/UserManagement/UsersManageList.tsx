import { DataTable } from "@/components/common/data/DataTable";
import { UserTable } from "../../components/UserManagement/UserTable";
import ButtonComponent from "../../components/common/ButtonCompnent";
import { StatusBadge } from "@/components/common/data/StatusBadge";
import { Checkbox } from "@/components/ui/checkbox";


enum Role {
    READER = 'READER',
    AUTHOR = 'AUTHOR',
    EDITOR = 'EDITOR',
    ADMIN = 'ADMIN'
}

const data: User[] = [
    {
        id: 1,
        name: 'Thoufeeque Rahman',
        email: 'rahman@gmail.com',
        profile_image_url: 'https://avatars.githubusercontent.com/u/78486724?v=4',
        user_details: {
            mobile: '9876543210',
            address: 'Kerala, India',
            dob: new Date('1996-01-01'),
            gender: 'Male',
        },
        status: 'Active',
        bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        language: "ml",
        role: Role.READER,
        is_active: true,
        email_verified: true,
        verification_status: 'verified',
        created_at: new Date(),
        updated_at: new Date(),
        last_login: new Date(),
    },
    {
        id: 2,
        name: 'Jaseel Km',
        email: 'jhondoe1@gmail.com',
        profile_image_url: 'https://avatars.githubusercontent.com/u/123951774?v=4',
        user_details: {
            mobile: '9876543210',
            address: 'Kerala, India',
            dob: new Date('1996-01-01'),
            gender: 'Male',
        },
        status: 'Active',
        bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        language: "ml",
        role: Role.READER,
        is_active: true,
        email_verified: true,
        verification_status: 'verified',
        created_at: new Date(),
        updated_at: new Date(),
        last_login: new Date(),
    },
]

export type User = {
    id: number
    name: string,
    email: string,
    profile_image_url: any,
    user_details: {
        mobile: string,
        address: string,
        dob: Date,
        gender: string,
    },
    status: 'Active' | 'Inactive',
    bio: string,
    language: string,
    role: Role,
    is_active: boolean,
    email_verified: boolean,
    verification_status: 'verified' | 'pending' | 'rejected',
    created_at: Date,
    updated_at: Date,
    last_login: Date,
}

export default function UsersManageList() {



    return (
        <div className="max-h-max flex-1 rounded-xl">
            <UserTable />
            {/* <DataTable columns={ } /> */}
            <DataTable
                columns={[
                    { header: () => <Checkbox />, accessor: (row) => row.id, cell: () => <Checkbox /> },
                    { header: "Name", accessor: "name" },
                    { header: "Email", accessor: "email", sortable: true },
                    { header: "Status", accessor: "status", cell: (info) => <StatusBadge status={info.getValue()} /> },
                    { header: "Role", accessor: "role" },
                ]}
                data={data}
                pagination={true} 
                searchable={true}
            />
            <ButtonComponent onClick={() => { }} variant="default" className="mt-4">Add User</ButtonComponent>
        </div>
    )
}