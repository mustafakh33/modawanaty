import { buttonVariants } from "@/components/ui/button";
import { ArrowLeftCircle, FileX2 } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-12 px-2 md:px-6">
      <div className="w-full border border-dashed rounded-xl min-h-[40rem] grid place-content-center">
        <div className="flex flex-col items-center gap-6">
          {/* icon */}
          <div className="size-20 grid place-content-center bg-secondary rounded-full">
            <FileX2 className="size-12 text-muted-foreground" />
          </div>
          {/* message */}
          <div className="space-y-3 text-center">
            <h4 className="font-semibold text-lg">لم يتم العثور على المقال</h4>
            <p className="text-muted-foreground">
              يبدو أن المقال الذي تبحث عنه غير متوفر...
            </p>
          </div>
          {/* CTA */}
          <Link
            href="/"
            className={buttonVariants({ size: "lg", variant: "outline" })}
          >
            <span>العودة الى الرئيسية</span>
            <ArrowLeftCircle className="size-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}