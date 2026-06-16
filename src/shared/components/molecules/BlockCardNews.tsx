import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color: string;
}

export default function BlockCardNews({ children, color }: Props) {
  return (
    <div className={` ${color} w-full mt-8 px-10 py-18`}>
      {children}
    </div>
  );
}
