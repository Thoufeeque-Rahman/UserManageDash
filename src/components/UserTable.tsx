"use client"

import * as React from "react"
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, CircleCheck, CircleX } from "lucide-react"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Checkbox } from "./ui/checkbox"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { Input } from "./ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "./ui/table"
import userProfile from '../assets/images/userProfilePhotos/001.jpg';
import { Link, useNavigate } from "react-router"

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
        profile_image_url: userProfile,
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


export function UserTable() {
    const navigate = useNavigate();

    const handleUserProfile = (id: number) => {
        const user = data.find(user => user.id === id);
        if (user) {

            navigate(`/user/${id}`, { state: { userData: user } });
        }
        navigate(`/user/${id}`);
        console.log('User Profile Clicked', id);
    }

    const columns: ColumnDef<User>[] = [
        {
            id: "select",
            header: ({ table }) => (
                <Checkbox
                    checked={
                        table.getIsAllPageRowsSelected() ||
                        (table.getIsSomePageRowsSelected() && "indeterminate")
                    }
                    onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                    aria-label="Select all"
                />
            ), 
            cell: ({ row }) => (
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value) => row.toggleSelected(!!value)}
                    aria-label="Select row"
                />
            ),
            enableSorting: false,
            enableHiding: false,
        },
        {

            accessorKey: "name",
            header: "Name",
            cell: ({ row }) => (
                <div className="capitalize cursor-pointer" onClick={() => handleUserProfile(row.original.id)}>
                    {row.getValue("name")}
                </div>
            ),
        },
        {
            accessorKey: "email",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Email
                        <ArrowUpDown />
                    </Button>
                )
            },
            cell: ({ row }) => <Link to='/user'><div className="lowercase" onClick={() => handleUserProfile(row.original.id)}>{row.getValue("email")}</div></Link>,
        },
        {
            accessorKey: "status",
            header: () => <div className="text-left">Status</div>,
            cell: ({ row }) => {
                return row.getValue("status") === 'Active'
                    ?
                    <Badge className='bg-green-600 text-white rounded-full justify-end'><CircleCheck /> Active</Badge>
                    :
                    <Badge className='bg-red-600 text-white rounded-full'><CircleX /> Inactive</Badge>
            }
            ,
        },
    ]

    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    })

    return (
        <div className="w-full">
            <div className="flex items-center py-4">
                <Input
                    placeholder="Filter emails..."
                    value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("email")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="ml-auto">
                            Columns <ChevronDown />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {table
                            .getAllColumns()
                            .filter((column) => column.getCanHide())
                            .map((column) => {
                                return (
                                    <DropdownMenuCheckboxItem
                                        key={column.id}
                                        className="capitalize"
                                        checked={column.getIsVisible()}
                                        onCheckedChange={(value) =>
                                            column.toggleVisibility(!!value)
                                        }
                                    >
                                        {column.id}
                                    </DropdownMenuCheckboxItem>
                                )
                            })}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <div className="flex-1 text-sm text-muted-foreground">
                    {table.getFilteredSelectedRowModel().rows.length} of{" "}
                    {table.getFilteredRowModel().rows.length} row(s) selected.
                </div>
                <div className="space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    )
}
