import React from "react";

export default function Footer() {
  return (
    <footer className="border-t capitalize">
      <div className="mx-auto py-10">
        <p className="text-center text-xs">
          ©{new Date().getFullYear()} ma boi is a footer
        </p>
      </div>
    </footer>
  );
}
