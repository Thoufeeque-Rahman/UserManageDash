import clsx from "clsx"
import { Loader2 } from "lucide-react"

export default function LoadingSpinner({ size }: { size?: string}) {
    return (
        < div className={clsx(size === 'full' ? 'h-full' : size === 'screen' ? 'h-screen' : 'h-max', 'flex justify-center items-center')} >
            <Loader2 size={40} strokeWidth={2} opacity={0.5} className='m-auto animate-spin' />
        </div >
    )
}