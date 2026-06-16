import { StaticImageData } from "next/image";
import Images from "../atoms/Images";

interface Props {
  image: string | StaticImageData;
}

export default function SquarePoster({ image }: Props) {
  return (
    <div className="mt-8 mx-auto h-68 w-full hidden lg:block">
      <Images src={image} alt="Poster" className="object-cover" priority />
    </div>
  );
}
