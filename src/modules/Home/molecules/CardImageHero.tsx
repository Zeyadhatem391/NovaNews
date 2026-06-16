import Images from "@/shared/components/atoms/Images";
import { StaticImageData } from "next/image";

interface Props {
  image: string | StaticImageData;
  alt?: string;
  className: string;
  text: string;
}

export default function CardImageHero({
  image,
  alt = "image",
  className = "",
  text,
}: Props) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Images src={image} className="object-cover" priority alt={alt} />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />

      {/* Title */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h2 className="text-white text-lg font-semibold ">{text}</h2>
      </div>
    </div>
  );
}
