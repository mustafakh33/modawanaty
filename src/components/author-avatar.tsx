import { FC } from "react";
import { Image } from "sanity";
// import { Avatar, AvatarImage } from "./ui/avatar";
import { urlFor } from "../sanity/lib/image";
import { Calendar } from "lucide-react";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

interface AuthorAvatarProps {
  authorImage: Image;
  authorName: string;
  publishDate: Date;
}

const AuthorAvatar: FC<AuthorAvatarProps> = ({
  authorImage,
  authorName,
  publishDate,
}) => {
  return (
    <div className="flex items-center justify-between gap-2">
      {/* avatar */}
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src={urlFor(authorImage).url()} className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"/>
        </Avatar>
        <p className="font-semibold">{authorName}</p>
      </div>
      {/* publish date */}
      <div className="flex items-center gap-2">
        <Calendar className="size-4 text-primary" />
        <small className="text-muted-foreground">
          {new Date(publishDate).toLocaleDateString("ar-MA", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </small>
      </div>
    </div>
  );
};

export default AuthorAvatar;