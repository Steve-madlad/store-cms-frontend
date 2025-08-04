import Link from "next/link";
import React from "react";
import MainNav from "./mainNav";
import { getCategories } from "@/actions/categoryActions";
import NavbarActions from "./navbarActions";

export default async function Navbar() {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <div className="container mx-auto">
        <div className="relative flex h-16 items-center px-4 sm:px-6 lg:px-8">
          <Link href="/">
            <p className="text-xl font-bold">STORE</p>
          </Link>

          <MainNav data={categories} />

          <NavbarActions />
        </div>
      </div>
    </div>
  );
}
