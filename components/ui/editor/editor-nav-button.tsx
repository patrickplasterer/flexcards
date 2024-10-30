import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
import { MenuIcon } from "lucide-react"
  
  export function EditorNavButton() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                <NavigationMenuTrigger><MenuIcon /></NavigationMenuTrigger>
                <NavigationMenuContent>
                    <NavigationMenuLink>Add Deck</NavigationMenuLink>
                    <NavigationMenuLink>Update Deck</NavigationMenuLink>
                    <NavigationMenuLink>Delete Deck</NavigationMenuLink>
                </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
  }