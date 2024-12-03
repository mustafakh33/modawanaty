import React from "react";
import { LoaderIcon } from "lucide-react";

const Loader = () => {
  return (
    <section className="w-full h-[80vh] grid place-content-center text-muted-foreground">
      <div className="flex flex-col items-center gap-6">
        <LoaderIcon className="size-12 animate-spin" />
        <span className="text-lg font-semibold tracking-wider">
          يتم التحميل...
        </span>
      </div>
    </section>
  );
};

export default Loader;