import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export default function LatestNewsSection({ children }: Props) {
  return (
    <div className="mx-4 mt-8 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4">
      {children}
    </div>
  );
}
