import React from "react";
import { Button } from "./ui/button";
import { ShoppingBag } from "lucide-react";

export default function NavbarActions() {
  return (
    <div className="align-center ml-auto">
      <Button className="flex-center gap-2 cursor-pointer rounded-full !px-4 !py-2 h-auto">
        <ShoppingBag />0
      </Button>
    </div>
  );
}
