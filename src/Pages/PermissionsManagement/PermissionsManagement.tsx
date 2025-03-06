import { Route, Routes } from 'react-router'
import RoleHome from './RoleHome'
import RolesManagement from './RolesManagement'
import Permissions from './Permissions'

const PermissionsManagement = () => {
  return ( 
    <Routes>
      <Route path='/' element={<RoleHome />} />
      <Route path='/roles' element={<RolesManagement />} />
      <Route path='/permissions' element={<Permissions />} />
    </Routes>
  )
}

export default PermissionsManagement
