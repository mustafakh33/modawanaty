"use client";

import { Button } from "@/components/ui/button";
import { ArrowRightCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const BackButton = () => {
  const router = useRouter();

  return (
    <Button variant="link" onClick={() => router.back()}>
      <ArrowRightCircle className="size-4" />
      <span>العودة</span>
    </Button>
  );
};

export default BackButton;