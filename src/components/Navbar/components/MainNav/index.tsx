"use client";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export const paths = [
  {
    name: "Ordenes",
    href: "/orders"
  },
  {
    name: "Menu",
    href: "/menu"
  },
  {
    name: "Ventas",
    href: "/sales"
  },
  {
    name: "Inventario",
    href: "/inventory"
  }
]

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname()

  console.log({pathname})

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {paths.map((item)=> (
         <Link
         key={item.name}
         href={item.href}
         className={`text-sm font-medium transition-colors ${pathname === item.href ? "text-primary" : "text-muted-foreground"} hover:text-primary`}
       >
         {item.name}
       </Link>
      ))}

    </nav>
  )
}
