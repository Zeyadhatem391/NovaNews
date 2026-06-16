import { StaticImageData } from "next/image";
import Images from "../atoms/Images";
import { Clock3 } from "@/assets/icons/icons";

interface Props {
  image: string | StaticImageData;
  text: string;
  type?: string;
  isType?: boolean;
  time?: string;
  isTime?: boolean;
  color?: string;
}

export default function CardNews({
  image,
  text,
  type,
  time,
  isTime = true,
  isType = true,
  color = "bg-white",
}: Props) {
  return (
    <article className={`w-full  ${color} `}>
      {/* Image */}
      <div className="relative w-full h-52 overflow-hidden rounded-lg">
        <Images src={image} alt={text} className="object-cover" priority />
      </div>

      {/* Content */}
      <div className="p-3">
        {isType && (
          <span className="text-sm font-semibold text-red-600 uppercase">
            {type}
          </span>
        )}

        <h3 className="mt-2 text-lg font-semibold line-clamp-2">{text}</h3>

        {isTime && (
          <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
            <Clock3 size={16} />
            <span>{time} hours ago</span>
          </div>
        )}
      </div>
    </article>
  );
}
