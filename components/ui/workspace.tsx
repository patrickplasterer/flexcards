import * as React from 'react';


export function Workspace({ children }: {children: React.ReactNode}) {
    return (
        <div className="flex rounded-xl border-2 h-full w-full flex-none overflow-hidden">
            {children}
        </div>
    )
}