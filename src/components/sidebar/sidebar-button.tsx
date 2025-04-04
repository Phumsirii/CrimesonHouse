import React, { MouseEventHandler } from "react";

import Link from "next/link";

interface MenuProps {
  title: string;
  link: string;
  handleOnClick?: MouseEventHandler<HTMLButtonElement>;
}

export function SidebarButton({ title, link, handleOnClick }: MenuProps) {
  return (
    <button onClick={handleOnClick} className="w-full">
      <Link
        href={link}
        className="flex w-full cursor-pointer items-center justify-start space-x-3 p-2 text-white"
      >
        <span>{title}</span>
      </Link>
    </button>
  );
}
