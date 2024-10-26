

export function MenuBar() {
    return(
        <div className="flex flex-col items-center justify-center p-1">
            <div className='flex rounded-xl w-full items-center justify-center gap-2'>
                <div className="flex items-center justify-center px-2 py-1 hover:bg-accent hover: text-accent-foreground rounded-[0.5rem]">Edit</div>
                <div className="flex items-center justify-center px-2 py-1 hover:bg-accent hover: text-accent-foreground rounded-[0.5rem]">View</div>
                <div className="flex items-center justify-center px-2 py-1 hover:bg-accent hover: text-accent-foreground rounded-[0.5rem]">Analytics</div>
            </div>
        </div>
    )
}