import { Routes } from 'react-router'
import { AppSidebar } from './components/app-sidebar'
import { SidebarInset, SidebarProvider, SidebarTrigger } from './components/ui/sidebar'
import UsersManagement from './Pages/UsersManagement'
import { Route } from 'react-router-dom'

function App() {


  return (
    <>
      <SidebarProvider>
        <AppSidebar children={undefined} />
        <SidebarInset>
          <SidebarTrigger />
          <UsersManagement />
        </SidebarInset>
      </SidebarProvider>
    </>
  )
}

export default App
