"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <MenuItem href={"/"}>Home</MenuItem>
        <MenuItem href={"/blog"}>Blog</MenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export function MenuItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const path = usePathname();

  return (
    <NavigationMenuItem>
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink
          active={href === "/" ? path === href : path.startsWith(href)}
          className={navigationMenuTriggerStyle()}
        >
          {children}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
}
