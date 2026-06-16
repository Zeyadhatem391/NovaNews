import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

interface BadgeIconProps {
  children: ReactNode;
  className?: string;
}

interface BadgeTextProps {
  children: ReactNode;
  className?: string;
}

export default function Badge({
  children,
  className = "",
}: BadgeProps) {
  return (
    <div
      className={`
        inline-flex items-center gap-1.5
        px-2 py-2.5
        text-white font-semibold
        ${className}
      `}
    >
      {children}
    </div>
  );
}

function Icon({
  children,
  className = "drop-shadow-[0_0_10px_red]",
}: BadgeIconProps) {
  return (
    <span className={`flex items-center ${className}`}>
      {children}
    </span>
  );
}

function Text({
  children,
  className = "",
}: BadgeTextProps) {
  return (
    <span className={className}>
      {children}
    </span>
  );
}

Badge.Icon = Icon;
Badge.Text = Text;