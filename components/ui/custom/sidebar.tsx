"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import type { Category } from "@/model/types";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../button";

export default function Sidebar({ data }: { data: Category[] }) {
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!isMobile) setSidebarOpen(false);
  }, [isMobile]);

  return (
    <Sheet open={sidebarOpen} onOpenChange={(value) => setSidebarOpen(value)}>
      <SheetTrigger
        onClick={() => setSidebarOpen(true)}
        asChild
        className={`${isMobile ? "block" : "hidden"}`}
      >
        <Button>
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-xl font-semibold">STORE</SheetTitle>
        </SheetHeader>

        <div className="col gap-3 px-4">
          <Button variant={"link"} className="block text-start" asChild>
            <Link onClick={() => setSidebarOpen(false)} href={"/"}>
              Home
            </Link>
          </Button>

          {data.map((category) => (
            <Button
              variant={"link"}
              key={category.id}
              className="block text-start"
              asChild
            >
              <Link
                onClick={() => setSidebarOpen(false)}
                href={`/category/${category.id}`}
              >
                {category.name}
              </Link>
            </Button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
