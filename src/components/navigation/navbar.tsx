import { navLinks } from "@/constants/nav-links";
import Link from "next/link";
import React from "react";
import Logo from "./logo";
import { ModeToggle } from "./mode-toggle";
import MobileNav from "./mobile-nav";

const Navbar = () => {
  return (
    <header className="fixed top-0 start-0 py-4 w-full bg-background/60 backdrop-blue-md z-50">
      <div className="container flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((navlink, index) => (
            <Link key={index} href={navlink.href}>
              {navlink.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-6">
          <ModeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
