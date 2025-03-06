import { Route, Routes } from 'react-router'
import { AppSidebar } from './components/app-sidebar'
import { SidebarInset, SidebarProvider, SidebarTrigger } from './components/ui/sidebar'
import UsersManagement from './Pages/UserManagement/UsersManagement'
import PermissionsManagement from './Pages/PermissionsManagement/PermissionsManagement'

function App() {


  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <SidebarTrigger />
          <Routes> 
            <Route path='/user-management/*' element={<UsersManagement />} />
            <Route path='/permissions-management/*' element={<PermissionsManagement />} />
          </Routes>
        </SidebarInset>
      </SidebarProvider>
    </>
  )
}

export default App
