'use client'

import { CardPreview } from '../editor/card-preview'
import { SaveIcon, Trash2Icon, SquarePlusIcon, UsersIcon, DownloadIcon, GripHorizontalIcon, GripVerticalIcon } from 'lucide-react'
import { Button } from '../button'
import Flashcard from '../flashcard'
import { clsx } from 'clsx'
import { useState } from 'react'


export function StudyDeck() {
    const [isHidden, setIsHidden] = useState(false);
    function handleHide(e) {
        e.stopPropagation();
        if (!isHidden) {
            setIsHidden(true);
        } else {setIsHidden(false)};
    }

    return (

            <div className="flex flex-row rounded-xl border-2 h-full w-full flex-none overflow-hidden">
                <div className={clsx('flex basis-[40%]', {'hidden': isHidden === true})}>
                    <div className="flex flex-col basis-60 shrink-0">
                        <div className="flex flex-col h-10 shrink-0 items-center justify-center p-2">
                            <div className='flex rounded-xl w-full items-center justify-center gap-2'>
                                <Button>Editor</Button>
                                <Button>Studio</Button>
                                <Button>Analytics</Button>
                            </div>
                        </div>
                        <div className="bg-border h-[1px]"></div>
                        <div className="flex flex-col basis-1/2 p-4">
                        </div>
                        <div className="flex justify-center items-center bg-border h-[1px]"><div className='flex z-10 rounded-lg opacity-50 p-4 hover:opacity-100 cursor-row-resize'><GripHorizontalIcon className='w-4 h-4' /></div></div>
                        <div className="flex flex-col basis-1/2 px-2 py-4">
                            <Button variant={'nav'} className='gap-4'><Trash2Icon className='w-4 h-4 mb-[2px]'/>Trash</Button>
                            <Button variant={'nav'} className='gap-4'><DownloadIcon className='w-4 h-4 mb-[2px]'/>Export</Button>
                            <Button variant={'nav'} className='gap-4'><Trash2Icon className='w-4 h-4 mb-[2px]'/>Trash</Button>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-border w-[1px]"><div className='flex z-10 rounded-lg opacity-50 p-4 hover:opacity-100 cursor-col-resize'><GripVerticalIcon className='w-4 h-4' /></div></div>
                    <div className="flex flex-col basis-72 grow overflow-hidden">
                        <div className="flex flex-col h-10 shrink-0 items-center justify-center p-2">
                        </div>
                        <div className="bg-border h-[1px]"></div>
                        <div className='flex flex-col items-center justify-center p-2'>
                            <div className='flex flex-nowrap gap-2 p-1 w-full items-center justify-between'><p className='flex flex-nowrap border-[1px] border-accent w-full py-1 px-2 rounded-sm'>Search</p><SquarePlusIcon/></div>
                        </div>
                        <div className="flex flex-col items-center p-2 mr-2 gap-2 scrollbar-width-none overflow-auto scrollbar-thin scrollbar-thumb-accent scrollbar-track-transparent">
                            <CardPreview />
                            <CardPreview />
                            <CardPreview />
                            <CardPreview />
                            <CardPreview />
                            <CardPreview />
                            <CardPreview />
                            <CardPreview />
                            <CardPreview />
                            <CardPreview />
                            <CardPreview />
                        </div>
                    </div>
                <div className="flex flex-col justify-center items-center bg-border w-[1px]"><div className='flex z-10 rounded-lg opacity-50 p-4 hover:opacity-100 cursor-col-resize'><GripVerticalIcon className='w-4 h-4'/></div></div>
                </div>
                <div className="flex flex-col basis-1/2 grow p-2">
                    <Flashcard handleHide={handleHide} isHidden={isHidden}/>
                </div>
            </div>
    )
}

