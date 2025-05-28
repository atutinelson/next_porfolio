import React from 'react'
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
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
interface NavBarMenuItemProp{
  triggerText:string,
}

const NavBarMenuItem = ({triggerText}:NavBarMenuItemProp) => {
  return (
    <NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      
      <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>{triggerText}</NavigationMenuTrigger>
      <NavigationMenuContent>
        <p>hello world</p>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
  )
}

export default NavBarMenuItem