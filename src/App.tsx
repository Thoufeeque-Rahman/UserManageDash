import { AppSidebar } from './components/app-sidebar'
import { SidebarInset, SidebarProvider, SidebarTrigger } from './components/ui/sidebar'
import UsersManagement from './Pages/UsersManagement'

function App() {


  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <SidebarTrigger />
          <UsersManagement />
        </SidebarInset>
      </SidebarProvider>
    </>
  )
}

export default App
