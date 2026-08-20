import { ReactNode } from "react";

export default function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 3xl:max-w-[1640px] 4xl:max-w-[1960px] 5xl:max-w-[2240px] ${className}`}
    >
      {children}
    </div>
  );
}
