import * as React from 'react'
import PermissionsTopbar from '../../components/PermissionsManagement/PermissionsTopbar'
import NewRoleInput from '../../components/PermissionsManagement/NewRoleInput'
import { KeyRound, Shield, ShieldCheck, ShieldX, UserRoundCheck, UserRoundX, UsersRound } from 'lucide-react'

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
