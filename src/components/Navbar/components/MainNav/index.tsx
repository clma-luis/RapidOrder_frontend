import Link from "next/link"

import { cn } from "@/lib/utils"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/orders"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Ordenes
      </Link>
      <Link
        href="/menu"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Menu
      </Link>
 
      <Link
        href="/sales"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Ventas
      </Link>
      <Link
        href="/inventory"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Inventario
      </Link>
    </nav>
  )
}
