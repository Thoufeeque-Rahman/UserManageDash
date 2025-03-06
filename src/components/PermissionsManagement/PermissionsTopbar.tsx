import * as React from 'react'
import { ShieldCheck, UserRoundCheck, UserRoundX, UsersRound } from "lucide-react"
import CountCard from '../CountCard'

// Menu items.
// const items = [
//   {
//     title: "Total Staffs",
//     count: 23,
//     icon: UsersRound,
//   },
//   {
//     title: "Ex-Staffs",
//     count: 3,
//     icon: UserRoundX,
//   },
//   {
//     title: "Active Staffs",
//     count: 20,
//     icon: UserRoundCheck,
//   },
//   {
//     title: "Total Admin roles",
//     count: 3,
//     icon: ShieldCheck,
//   }
// ]

const PermissionsTopbar = ({ items }: { items: any }) => {
    return (
        <div className='flex flex-1 flex-col'>
            <div className="grid gap-4 grid-cols-4">
                {items.map((item:any) => (
                    <CountCard key={item.title} title={item.title} count={item.count} icon={item.icon} color='bg-muted' />
                ))}
            </div>
        </div>
    )
}

export default PermissionsTopbar
