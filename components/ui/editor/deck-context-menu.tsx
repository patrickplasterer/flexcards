import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuTrigger,
  } from "@/components/ui/context-menu";
  import * as React from 'react';


export function DeckContextMenu({ children }: {children: React.ReactNode}) {
    return (
        <ContextMenu>
            <ContextMenuTrigger>{children}</ContextMenuTrigger>
            <ContextMenuContent className="bg-background text-foreground border-[2px] rounded-xl">
                <ContextMenuItem>Edit Deck</ContextMenuItem>
                <ContextMenuItem>Delete Deck</ContextMenuItem>
            </ContextMenuContent>
        </ContextMenu>
    )
}