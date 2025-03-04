export default function UsersList() {
    return (
        <div className={`p-4 rounded-xl ${color}/50`}>
            <div className="flex">
                <h1 className='font-medium'>{title}</h1>
                {React.createElement(icon, { size: 20, strokeWidth: 2, opacity: 0.5, className: 'ms-auto' })}
            </div>
            <h1 className='flex text-4xl font-bold text-[#e40404]'>+{count}</h1>
            <p className='opacity-75 text-sm'>{percentage} from last month</p>
        </div>
    )
}