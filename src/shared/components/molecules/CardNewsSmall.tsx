import { StaticImageData } from "next/image";
import Images from "../atoms/Images";

interface Props {
  image: string | StaticImageData;
  text: string;
}

export default function CardNewsSmall({ image, text }: Props) {
  return (
    <article className="flex gap-4 w-full bg-white p-3 ">
      {/* Image */}
      <div className="relative w-32 h-24 shrink-0 overflow-hidden rounded-lg">
        <Images src={image} alt={text} className="object-cover" priority />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-base font-semibold leading-relaxed">
          {text}
        </h3>
      </div>
    </article>
  );
}