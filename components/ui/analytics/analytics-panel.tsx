'use client'

import { SaveIcon, Trash2Icon, SquarePlusIcon, UsersIcon, DownloadIcon, GripHorizontalIcon, GripVerticalIcon } from 'lucide-react'
import { Button } from '../button'
import { GenericChart, GenericLineChart } from '../generic-chart'


export function AnalyticsPanel() {

    return (

            <div className="flex flex-row rounded-xl border-2 h-full w-full overflow-hidden">
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
                <div className='flex flex-col gap-4 w-full p-4'>
                        <div className='flex w-full gap-4 items-center justify-center'>
                            <GenericChart />
                            <GenericChart />
                            <GenericChart />
                        </div>
                        <div className='flex flex-col w-full'>
                            <div className='flex flex-wrap gap-4'>
                                <GenericChart />
                                <GenericChart />
                                <GenericChart />
                                <GenericLineChart />
                            </div>
                        </div>
                </div>
            </div>
    )
}

