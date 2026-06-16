import { StaticImageData } from "next/image";
import Images from "../atoms/Images";

interface Props {
  image: string | StaticImageData;
}

export default function Poster({ image }: Props) {
  return (
    <div className="mt-8 mx-auto h-24 w-[80%] md:w-[80%] lg:w-[60%]">
      <Images src={image} alt="Poster" className="object-cover" priority />
    </div>
  );
}
