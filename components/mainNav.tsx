"use client";

import type { Category } from "@/model/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MainNavProps {
  data: Category[];
}
export default function MainNav({ data }: MainNavProps) {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <nav className="mx-6 align-center space-x-4 lg:space-x-6">
      {routes.map((route: any) => (
        <Link
          key={route.href}
          href={route.href}
          className={`text-sm font-medium transition ${
            route.active ? "font-semibold" : "text-muted-foreground"
          } hover:text-foreground`}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}
