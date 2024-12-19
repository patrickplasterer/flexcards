import { openCloseDataState } from "@/lib/utils"
import { XIcon } from "lucide-react"
import React, { ReactNode } from "react"

export function Dialog({ title, children, id }: {title?: string, children: ReactNode, id: string}) {


    return (
        <div id={id} data-state='closed' className="fixed z-50 inset-0 bg-black/80 data-[state='closed']:hidden" onClick={(e) => {e.currentTarget.dataset.state = 'closed'}}>
            <div onClick={(e) => e.stopPropagation()}className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 p-6 border-zinc-800 bg-zinc-950">
                <div onClick={() => {openCloseDataState(id)}} className="absolute top-2 right-2 opacity-60 hover:opacity-100"><XIcon className="w-6 h-6"/></div>
                <div className="flex flex-col space-y-1.5 text-center">
                    {title && <div className="text-lg font-semibold leading-none tracking-tight">{title}</div>}
                </div>
                <div className="flex flex-col">
                    {children}
                </div>
            </div>
        </div>
    )
}