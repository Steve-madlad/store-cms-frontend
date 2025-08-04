import React from "react";

export default function Footer() {
  return (
    <footer className="capitalize border-t ">
      <div className="py-10 mx-auto">
        <p className="text-xs text-center">©{new Date().getFullYear()} ma boi is a footer</p>
      </div>
    </footer>
  );
}
