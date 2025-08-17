import Link from "next/link";
import React from "react";
import MainNav from "./mainNav";
import { getCategories } from "@/actions/categoryActions";
import NavbarActions from "./navbarActions";
import Sidebar from "./ui/custom/sidebar";

export default async function Navbar() {
  const categories = await getCategories();

  return (
    <div className="shadow-sm">
      <div className="container mx-auto">
        <div className="flex-between relative h-16 px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2">
            <Link href="/">
              <p className="text-xl font-bold">STORE</p>
            </Link>
            <MainNav data={categories} />
          </div>

          <div className="flex gap-4">
            <NavbarActions />
            <Sidebar data={categories} />
          </div>
        </div>
      </div>
    </div>
  );
}
