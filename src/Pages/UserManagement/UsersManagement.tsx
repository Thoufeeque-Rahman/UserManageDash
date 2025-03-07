import { MonitorCheck, ShieldCheck, UserCheck, Users } from 'lucide-react'
import CountCard from '../../components/common/cards/CountCard';
import UserProfileCard from './UserProfileCard';
import { Route, Routes } from 'react-router';
import UsersGraph from './UsersGraph';
import UsersManageList from './UsersManageList';

const items = [
    {
        title: 'Total Users',
        count: 546,
        icon: UserCheck,
        percentage: '+23%',
        color: 'bg-muted',
    },
    {
        title: 'Active Users',
        count: 461,
        icon: MonitorCheck,
        percentage: '+33%',
        color: 'bg-muted',
    },
    {
        title: 'Total Subscribers',
        count: 147,
        icon: Users,
        percentage: '+3%',
        color: 'bg-muted',
    },
    {
        title: 'Active Subscribers',
        count: 57,
        icon: ShieldCheck,
        percentage: '+0%',
        color: 'bg-muted',
    },
]

export default function UsersManagement() {

    return (
        <div className="flex flex-1 flex-col gap-4 p-4">
            <div className="grid auto-rows-min gap-4 md:grid-cols-4">
                {
                    items.map((item, index) => (
                        <CountCard key={index} title={item.title} count={item.count} icon={item.icon} percentage={item.percentage} color={item.color} />
                    ))
                }
            </div>
            <Routes>
                <Route path="/" element={<UsersGraph />} />
                <Route path="/users" element={<UsersManageList />} />
                <Route path="/user" element={<UserProfileCard />} />
                <Route path="/user/:id" element={<UserProfileCard />} />
            </Routes>
        </div>
    )
}