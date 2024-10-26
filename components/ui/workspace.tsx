
export function Workspace({ children }) {
    return (
        <div className="flex rounded-xl border-2 h-full w-full flex-none overflow-hidden">
            {children}
        </div>
    )
}