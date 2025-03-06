import * as React from 'react'

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../ui/table"


const PermissionsTableSection = () => {
    return (
        <div className='flex flex-1 flex-col p-4 max-width-50 h-full bg-muted/50 rounded-xl'>
            <div className="bg-white rounded-lg border">
                <Table className='rounded-xl bg-white shadow-xs'>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px] text-[#e40404]/75">Admins</TableHead>
                            <TableHead className='text-[#e40404]/75'>Roles</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">Ajnan</TableCell>
                            <TableCell>Project Manager</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Hashim</TableCell>
                            <TableCell>Manager</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Jaseel</TableCell>
                            <TableCell>Designer</TableCell>
                        </TableRow>
                        
                    </TableBody>
                </Table>
            </div>
            <TableCaption>A list of admins and their roles in Thelicham.</TableCaption>

        </div>
    )
}

export default PermissionsTableSection
