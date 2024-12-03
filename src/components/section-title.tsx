import { FC } from "react";

interface SectionTitleProps {
  title: string;
}

const SectionTitle: FC<SectionTitleProps> = ({ title }) => {
  return (
    <h2 className="font-bold text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-tr from-primary/30 to-primary/90 whitespace-nowrap">
      {title}
    </h2>
  );
};

export default SectionTitle;