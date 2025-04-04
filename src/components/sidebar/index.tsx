"use client";

import { Icon } from "@iconify/react";

import { SidebarButton } from "@/components/sidebar/sidebar-button";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { useState } from "react";

const navItems = [
  {
    title: "HOME",
    url: "/",
  },
  {
    title: "INTRODUCTION",
    url: "/introduction",
  },
  {
    title: "TICKET",
    url: "/ticket",
  },
  {
    title: "STORY BEHIND OUR PROJECT",
    url: "/our-story",
  },
  {
    title: "CONTACT US",
    url: "/contact-us",
  },
  {
    title: "SPECIAL THANKS",
    url: "/sponsorship",
  },
];

export default function NavSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeSideBar = () => setIsOpen(false);

  return (
    <div className="lg:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" className="p-2">
            <Icon icon="mingcute:menu-fill" className="size-4 text-white" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetTitle></SheetTitle>
          <div className="flex size-full flex-col justify-between">
            <ul className="grid w-full place-items-start gap-2 py-8">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="w-full place-items-start rounded-sm hover:bg-neutral-200"
                  onClick={closeSideBar}
                >
                  <SidebarButton title={item.title} link={item.url} />
                </li>
              ))}
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
