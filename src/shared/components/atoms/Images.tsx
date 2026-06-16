import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/cn";

interface Props {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export default function Images({
  src,
  alt,
  className,
  priority = false,
}: Props) {
  return (
    <div className="relative w-full h-full">
      <Image
        src={src}
        alt={alt}
        fill
         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        priority={priority}
        className={cn(className)}
      />
    </div>
  );
}
