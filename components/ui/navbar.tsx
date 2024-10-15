import { ChevronDownIcon } from "lucide-react";


export function NavBar() {
    return (
        <div className="flex flex-row justify-start p-2 gap-2">
            <NavBarItem title='Your Decks'/>
        </div>
    )
}

interface NavBarItemProps {
    title: string;
}

export function NavBarItem({ title }: NavBarItemProps) {
    return (
        <div className="flex items-center justify-center">
            {title}<ChevronDownIcon className="h-3 mt-1 ml-1 w-3"/>
        </div>
    )
}