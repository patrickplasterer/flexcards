import Link from "next/link"

export function NavBar() {
    return (
        <div className="flex flex-row justify-start items-center w-full py-1.5 px-2.5">
            <Link href='./' className="flex items-center justify-center mr-6 font-bold text-lg">
                flexcards
            </Link>
            <div className="flex justify-between w-full">
                <div className="flex justify-start gap-4 font-extralight">
                    <div>Editor</div>
                    <div>Discover</div>
                    <div>Analytics</div>
                </div>
                <div className="flex gap-4">
                    <div className="flex">Help</div>
                    <div className="flex">Sign In</div>
                </div>
            </div>
        </div>
    )
}