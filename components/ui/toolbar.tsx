import { Button } from "./button"
import { Trash2Icon, SquarePlusIcon, UsersIcon, DownloadIcon, GripHorizontalIcon, GripVerticalIcon } from 'lucide-react'
import { DeckList } from "./deck-list"


export function Toolbar({ decks }: {decks: Array<object>}) {
    return (
            <div className="flex flex-col basis-80 overflow-hidden">
                <div className="flex flex-col h-10 shrink-0 items-center justify-center p-2">
                    <div className='flex rounded-xl w-full items-center justify-center gap-2'>
                        <Button>Editor</Button>
                        <Button>View</Button>
                        <Button>Analytics</Button>
                    </div>
                </div>
                <div className="bg-border h-[1px]"></div>
                <div className='flex flex-col basis-1/2 py-4 px-2 gap-1'>
                    <DeckList decks={decks} workspace={'study'}/>
                </div>
                <div className="flex justify-center items-center bg-border h-[1px]"><div className='flex z-10 rounded-lg opacity-50 p-4 hover:opacity-100 cursor-row-resize'><GripHorizontalIcon className='w-4 h-4' /></div></div>
                <div className="flex flex-col basis-1/2 px-2 py-4">
                    <Button variant={'nav'} className='gap-4'><Trash2Icon className='w-4 h-4 mb-[2px]'/>Trash</Button>
                    <Button variant={'nav'} className='gap-4'><DownloadIcon className='w-4 h-4 mb-[2px]'/>Export</Button>
                    <Button variant={'nav'} className='gap-4'><Trash2Icon className='w-4 h-4 mb-[2px]'/>Trash</Button>
                </div>
            </div>
    )
}