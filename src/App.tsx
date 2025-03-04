import { MonitorCheck, Plus, ShieldCheck, UserCheck, Users } from 'lucide-react'
import { AppSidebar } from './components/app-sidebar'
import { SidebarInset, SidebarProvider, SidebarTrigger } from './components/ui/sidebar'
import CountCard from './components/CountCard'
import userProfile from './assets/images/userProfilePhotos/001.jpg'
import UserProfileCard from './components/UserProfileCard'
import UsersManagement from './Pages/UsersManagement'

function App() {

  
  return (
    <>
      <SidebarProvider>
        <AppSidebar children={undefined} />
        <SidebarInset>
          <SidebarTrigger />
          {/* <UserProfileCard /> */}
          <UsersManagement />
        </SidebarInset>
      </SidebarProvider>
    </>
  )
}

export default App
