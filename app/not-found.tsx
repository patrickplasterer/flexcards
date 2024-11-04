import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Page() {
    return (
        <div className="flex flex-col gap-4 items-center justify-center h-screen w-full">
            <h1>Items not found.</h1>
            <Button asChild variant='default' className="p-6">
                <Link href='/dashboard'>Return to the dashboard.</Link>
            </Button>
        </div>
    )
}