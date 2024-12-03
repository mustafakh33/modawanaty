import { NavLink } from "@/types/interfaces";
import { Files, Home } from "lucide-react";

export const navLinks: NavLink[] = [
    { label: "الرئيسية", href: "/", icon: Home },
    { label: "المقالات", href: "/posts", icon: Files },
];
