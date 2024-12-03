import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { navLinks } from "@/constants/nav-links";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className="size-8 md:hidden cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="py-32">
        <nav className="flex flex-col items-center gap-4">
          {navLinks.map((navlink, index) => (
            <SheetClose key={index} asChild>
              <Link
                href={navlink.href}
                className={cn(
                  buttonVariants({ variant: "ghost", size: "lg" }),
                  "w-full justify-start"
                )}
              >
                <navlink.icon className="size-5" />
                <span>{navlink.label}</span>
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
