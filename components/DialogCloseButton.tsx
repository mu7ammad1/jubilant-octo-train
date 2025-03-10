import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { SubmitButton } from "./submit-button"
import { signInAction } from "@/app/actions/actions"
import { X } from "lucide-react"



const AuthData = [
    {
        "DialogTrigger": "Sign in",
        "DialogTitle": `Sign in`,

    },

]



export function DialogAuth() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size="default" variant={"secondary"} className="rounded-full">Sign in</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md border-none">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-medium">Sign in</DialogTitle>
                    <DialogDescription>
                        Don't have an account? {" "}
                        <Link className="text-foreground font-medium underline" href="/sign-up">
                            Sign up for Free
                        </Link>
                    </DialogDescription>
                </DialogHeader>
                <ElementSignIn />
                <DialogFooter className="sm:justify-start absolute top-5 right-5">
                    <DialogClose asChild>
                        <Button type="button" size={"icon"} variant="secondary" className="rounded-full">
                            <X className="h-4 w-4" />
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}



const ElementSignIn = (props: any) => {
    return (
        <form className="flex-1 flex flex-col min-w-96">
            <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
                <Label htmlFor="email">Email</Label>
                <Input name="email" placeholder="you@example.com" required />
                <div className="flex justify-between items-center">
                    <Label htmlFor="password">Password</Label>
                    <Link
                        className="text-xs text-foreground underline"
                        href="/forgot-password"
                    >
                        Forgot Password?
                    </Link>
                </div>
                <Input
                    type="password"
                    name="password"
                    placeholder="Your password"
                    required
                />
                <SubmitButton pendingText="Signing In..." formAction={signInAction}>
                    Sign in
                </SubmitButton>
                {/* <FormMessage message={searchParams} /> */}
            </div>
        </form>
    )
}

