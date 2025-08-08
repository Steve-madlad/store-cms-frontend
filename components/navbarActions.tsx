"use client";

import React from "react";
import { Button } from "./ui/button";
import { ShoppingBag } from "lucide-react";
import useCart from "@/hooks/useCart";
import { useRouter } from "next/navigation";

export default function NavbarActions() {
  const { items } = useCart();
  const router = useRouter();

  return (
    <div className="align-center ml-auto">
      <Button
        onClick={() => router.push("/cart")}
        className="flex-center h-auto cursor-pointer gap-2 rounded-full !px-4 !py-2"
      >
        <ShoppingBag />
        {items.length}
      </Button>
    </div>
  );
}
