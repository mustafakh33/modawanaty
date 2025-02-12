"use client";

import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpCircle } from "lucide-react";

const ScrollToTop = () => {
  const [isOverScreen, setIsOverScreen] = React.useState<boolean>(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsOverScreen(window.scrollY > 120);
    });
  }, []);

  return (
    <Button
      size="icon"
      className={cn(
        "fixed bottom-12 md:bottom-8 end-6 md:end-12 transition-all rounded-full text-white",
        !isOverScreen && "opacity-0 translate-y-6 pointer-events-none"
      )}
      onClick={() => window.scrollTo(0, 0)}
    >
      <ArrowUpCircle className="size-6" />
    </Button>
  );
};

export default ScrollToTop;