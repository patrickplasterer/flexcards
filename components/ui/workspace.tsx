
export function Workspace({ children }) {
    return (
        <div className="flex flex-row rounded-xl border-2 h-full w-full flex-none overflow-hidden p-2">
            {children}
        </div>
    )
}