'use client'

import { CardPreview } from './card-preview'


export function Editor() {
    return (

            <div className="flex flex-row rounded-xl border-2 h-[80vh] w-[80vw] flex-none overflow-hidden">
                <div className="flex flex-col w-64">
                    <div className="flex flex-col h-10 shrink-0">
                        top panel
                    </div>
                    <div className="bg-border h-[1px]"></div>
                    <div className="flex flex-col basis-1/2">
                        upper panel
                    </div>
                    <div className="bg-border h-[1px]"></div>
                    <div className="flex flex-col basis-1/2">
                        lower panel
                    </div>
                </div>
                <div className="bg-border w-[1px]"></div>
                <div className="flex flex-col w-1/3 overflow-hidden">
                    <div className="flex flex-col h-10 shrink-0">
                        top panel
                    </div>
                    <div className="bg-border h-[1px]"></div>
                    <div className="flex flex-col items-center p-2 gap-2 overflow-auto scrollbar scrollbar-thumb-accent scrollbar-track-transparent">
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
                <div className="bg-border w-[1px]"></div>
                <div className="flex flex-col grow">
                    <div className="flex flex-col h-10 shrink-0">
                        top panel
                    </div>
                    <div className="bg-border h-[1px]"></div>
                    <div className="flex flex-col basis-1/2">
                        upper panel
                    </div>
                    <div className="bg-border h-[1px]"></div>
                    <div className="flex flex-col basis-1/2">
                        lower panel
                    </div>
                </div>
            </div>
    )
}