

export function CardPreview() {
    return (
        <div className="flex flex-col h-20 rounded-xl border-2 w-full py-2 px-3 hover:bg-accent hover:text-accent-foreground">
            <h1 className="font-bold text-sm">Card</h1>
            <p className="mt-1 text-xs overflow-hidden line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, facere. Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, facere.</p>
        </div>
    )
}