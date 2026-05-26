import React from "react";
import ReactQueryProvider from "./ReactQueryProvider";
interface Props {
  children: React.ReactNode;
}
export default function AppProviders({ children }: Props) {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
}
