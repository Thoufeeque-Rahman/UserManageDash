import * as React from 'react'
import PermissionsTopbar from '../../components/PermissionsManagement/PermissionsTopbar'
import NewRoleInput from '../../components/PermissionsManagement/NewRoleInput'
import { KeyRound, Shield, ShieldCheck, ShieldX, UserRoundCheck, UserRoundX, UsersRound } from 'lucide-react'
import DataTable from '../../components/common/DataTable2'

const items = [
  {
    title: "Total Roles",
    count: 12,
    icon: Shield,
  },
  {
    title: "Active Roles",
    count: 3,
    icon: ShieldCheck,
  },
  {
    title: "Old Roles",
    count: 20,
    icon: ShieldX,
  },
  {
    title: "Total Permissions",
    count: 3,
    icon: KeyRound,
  }
]

// enum Role {
//   READER = 'READER',
//   AUTHOR = 'AUTHOR',
//   EDITOR = 'EDITOR',
//   ADMIN = 'ADMIN'
// }
 
// export type User = {
//   id: number
//   name: string,
//   email: string,
//   profile_image_url: any,
//   user_details: {
//     mobile: string,
//     address: string,
//     dob: Date,
//     gender: string,
//   },
//   status: 'Active' | 'Inactive',
//   bio: string,
//   language: string,
//   role: Role,
//   is_active: boolean,
//   email_verified: boolean,
//   verification_status: 'verified' | 'pending' | 'rejected',
//   created_at: Date,
//   updated_at: Date,
//   last_login: Date,
// }

// const data: User[] = [
//   {
//     id: 1,
//     name: 'Thoufeeque Rahman',
//     email: 'rahman@gmail.com',
//     profile_image_url: 'https://avatars.githubusercontent.com/u/123951774?v=4',
//     user_details: {
//       mobile: '9876543210',
//       address: 'Kerala, India',
//       dob: new Date('1996-01-01'),
//       gender: 'Male',
//     },
//     status: 'Active',
//     bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     language: "ml",
//     role: Role.READER,
//     is_active: true,
//     email_verified: true,
//     verification_status: 'verified',
//     created_at: new Date(),
//     updated_at: new Date(),
//     last_login: new Date(),
//   },
//   {
//     id: 2,
//     name: 'Jaseel Km',
//     email: 'jhondoe1@gmail.com',
//     profile_image_url: 'https://avatars.githubusercontent.com/u/123951774?v=4',
//     user_details: {
//       mobile: '9876543210',
//       address: 'Kerala, India',
//       dob: new Date('1996-01-01'),
//       gender: 'Male',
//     },
//     status: 'Active',
//     bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     language: "ml",
//     role: Role.READER,
//     is_active: true,
//     email_verified: true,
//     verification_status: 'verified',
//     created_at: new Date(),
//     updated_at: new Date(),
//     last_login: new Date(),
//   },
// ]

const data = [
  {
      id: "m5gr84i9",
      role: 'chief',
      name: "ajnan",
      email: "ajnan@example.com",
  },
  {
      id: "3u1reuv4",
      role: 'gm',
      name: "hd",
      email: "hd@example.com",
  },
  {
      id: "derv1ws0",
      role: 'head',
      name: "tropu",
      email: "tropu@example.com",
  },
]

const header = [
  {
    accessorKey: 'name',
    title: 'Name',
  },
  {
    accessorKey: 'email',
    title: 'Email',
  },
  {
    accessorKey: 'role',
    title: 'Role',
  },
]

const RolesManagement = () => {
  return (
    <div className='grid p-4 gap-4'>
      <div>
        <PermissionsTopbar items={items} />
      </div>
      <div className='gap-4'>
        <NewRoleInput />
      </div>
    </div>
  )
}

export default RolesManagement
