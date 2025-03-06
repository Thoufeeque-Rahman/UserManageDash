import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// import { toast } from "../ui/sonner"
import { Button } from "../ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form"
import { Input } from "../ui/input"

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})

const PermissionsFormSection = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(data: z.infer<typeof formSchema>) {
        // toast("Event has been created", {
        //     description: "Sunday, December 03, 2023 at 9:00 AM",
        //     action: {
        //         label: "Undo",
        //         onClick: () => console.log("Undo"),
        //     },
        // })
        console.log("Form Submitted successfully", data)
    }

    return (
        <div className='h-full bg-muted/50 rounded-xl p-4'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6 p-10">
                    {/* <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar> */}
                    <img src="https://github.com/shadcn.png" className="rounded-full" width={50} alt="" />
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="shadcn" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your public display name.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>

        </div>
    )
}

export default PermissionsFormSection
