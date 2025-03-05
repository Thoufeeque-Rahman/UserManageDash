import { ArrowLeft, CircleCheck, CircleX, SquarePen, Trash2 } from 'lucide-react'
import userProfile from '../assets/images/userProfilePhotos/001.jpg';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function UserProfileCard() {

    const [usersData, setUsersData] = useState<any[]>([]);
    const { id } = useParams<{ id: string }>();
    const location = useLocation();

    enum Role {
        READER = 'READER',
        AUTHOR = 'AUTHOR',
        EDITOR = 'EDITOR',
        ADMIN = 'ADMIN'
    }

    const data: User[] = [
        {
            id: 1,
            name: 'Thoufeeque Rahman',
            email: 'rahman@gmail.com',
            profile_image_url: userProfile,
            user_details: {
                mobile: '9876543210',
                address: 'Kerala, India',
                dob: new Date('1996-01-01'),
                gender: 'Male',
            },
            status: 'Active',
            bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            language: "ml",
            role: Role.READER,
            is_active: true,
            email_verified: true,
            verification_status: 'verified',
            created_at: new Date(),
            updated_at: new Date(),
            last_login: new Date(),
        },
        {
            id: 2,
            name: 'Jaseel Km',
            email: 'jhondoe1@gmail.com',
            profile_image_url: 'https://avatars.githubusercontent.com/u/123951774?v=4',
            user_details: {
                mobile: '9876543210',
                address: 'Kerala, India',
                dob: new Date('1996-01-01'),
                gender: 'Male',
            },
            status: 'Active',
            bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            language: "ml",
            role: Role.READER,
            is_active: true,
            email_verified: true,
            verification_status: 'verified',
            created_at: new Date(),
            updated_at: new Date(),
            last_login: new Date(),
        },
    ]

    type User = {
        id: number
        name: string,
        email: string,
        profile_image_url: any,
        user_details: {
            mobile: string,
            address: string,
            dob: Date,
            gender: string,
        },
        status: 'Active' | 'Inactive',
        bio: string,
        language: string,
        role: Role,
        is_active: boolean,
        email_verified: boolean,
        verification_status: 'verified' | 'pending' | 'rejected',
        created_at: Date,
        updated_at: Date,
        last_login: Date,
    }

    useEffect(() => {
        async function fetchUserData() {
            try {
                const user = data.filter((user) => user.id.toString() === id);
                setUsersData(user);
                console.log('User:', user);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        }

        const user = location.state?.userData;
        if (user) {
            setUsersData([user]);
        } else {
            fetchUserData();
        }

        console.log('User ID:', id);

    }, [id, location.state]);

    if (usersData.length === 0) {
        return (
            <div>
                <h1 className='font-medium mb-3'>Select a User...</h1>
                {
                    data.map((user)=>(
                        <Link to={`/user/${user.id}`} className='me-4' key={user.id} state={{userData:user}}>
                            <Button variant='outline' className='py-5'><img src={user.profile_image_url}  width={30} className='rounded-full border-1 border-[#e40404] p-[1px]' alt="" /> {user.name}</Button>
                        </Link>
                    ))
                }
            </div>
        );
    }



    return (
        <div className="max-h-max flex-1 rounded-xl bg-muted/50" >
            <div className="flex flex-1 flex-col gap-4 p-4">
                <div className="grid grid-flow-col grid-rows-3 gap-4">
                    <div className="row-span-3 col-end-1 justify-items-center p-4 border-r">
                        <img src={usersData[0].profile_image_url} className='rounded-full border-[3px] mb-4 border-[#e40404] p-[3px]' width={150} height={150} />
                        <h1 className='text-xl font-semibold' >{usersData[0].name}</h1>
                        <p className='text-wrap text-center w-60 text-sm text-black/50'>{usersData[0].bio}</p>
                    </div>
                    <div className="col-span-5 p-4 border-b">
                        <p className='text-sm font-medium mb-3'>User details</p>
                        <div className="gap-4 grid grid-cols-4">
                            <div className="flex gap-1">
                                <p className='text-sm text-black/50'>Gender:</p>
                                <p className='text-sm font-medium'>{usersData[0].user_details.gender}</p>
                            </div>
                            <div className="flex gap-1">
                                <p className='text-sm text-black/50'>Mobile:</p>
                                <p className='text-sm font-medium'>{usersData[0].user_details.mobile}</p>
                            </div>
                            <div className="flex gap-1">
                                <p className='text-sm text-black/50'>Dob:</p>
                                <p className='text-sm font-medium'>{usersData[0].user_details.dob.toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' })}</p>
                            </div>
                            <div className="flex gap-1">
                                <p className='text-sm text-black/50'>Address:</p>
                                <p className='text-sm font-medium'>{usersData[0].user_details.address}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-5 p-4 pt-2 border-b">
                        <p className='text-sm font-medium mb-3'>Verification Status</p>
                        <div className="gap-4 grid grid-cols-4">
                            <div className="flex gap-1">
                                <p className='text-sm text-black/50'>Email:</p>
                                {
                                    usersData[0].email_verified
                                        ?
                                        <Badge className='bg-green-600 text-white rounded-full'><CircleCheck /> Verified</Badge>
                                        :
                                        <Badge className='bg-red-600 text-white rounded-full'><CircleX /> Not Verified</Badge>
                                }
                            </div>
                            <div className="flex gap-1">
                                <p className='text-sm text-black/50'>Mobile:</p>
                                {
                                    usersData[0].email_verified
                                        ?
                                        <Badge className='bg-green-600 text-white rounded-full'><CircleCheck /> Verified</Badge>
                                        :
                                        <Badge className='bg-red-600 text-white rounded-full'><CircleX /> Not Verified</Badge>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-span-5 p-4">
                        <div className="gap-4 grid grid-cols-4">
                            <Button variant='outline' className='col-span-2'><SquarePen /> Edit Profile</Button>
                            <Button variant='destructive' className='col-span-2'><Trash2 /> Delete Profile</Button>
                        </div>
                    </div>
                </div>
            </div>
            <Link to='/users' className='flex gap-2 p-4 border-t justify-center'>
                <Button className='py-5'><ArrowLeft /> Back to Users</Button>
            </Link> 
        </div>
    )
}