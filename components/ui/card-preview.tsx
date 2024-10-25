

export function CardPreview({ front, back, cardId, handleClick }: {front: string, back: string, cardId: number, handleClick: React.MouseEventHandler<HTMLButtonElement>}) {
    return (
        <div className="flex flex-col h-20 rounded-xl border-2 w-full py-2 px-3 hover:bg-accent hover:text-accent-foreground" onClick={(e) => handleClick(e, cardId)}>
            <h1 className="font-bold text-sm">{front}</h1>
            <p className="mt-1 text-xs overflow-hidden line-clamp-2">{back}</p>
        </div>
    )
}