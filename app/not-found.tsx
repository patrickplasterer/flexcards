import Link from "next/link"

export default function Page() {
    return (
        <div className="flex flex-col gap-4 items-center justify-center h-screen w-full">
            <h1>Items not found.</h1>
            <Link href='/dashboard'>Return to the dashboard.</Link>
        </div>
    )
}