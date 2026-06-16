import { ChevronRight } from "@/assets/icons/icons";

interface Props {
  text: string;
  color?: string;
}

export default function HeadingLink({ text, color }: Props) {
  return (
    <div className={`flex items-center gap-3  group cursor-pointer ${color}`}>
      <div className="w-1.5 h-8 bg-red-900 " />

      <h2 className="text-2xl font-bold">{text}</h2>

      <ChevronRight className="w-7 h-7 transition-transform group-hover:translate-x-1" />
    </div>
  );
}
