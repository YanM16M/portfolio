import React from "react";

export function GridBackground({
    children,
    className,
}: {
    children: React.ReactNode,
    className?: string,
}) {
  return (
    <div className="h-[50rem] w-full dark:bg-background bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-background bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className={className}>
        {children}
      </div>
    </div>
  );
}
