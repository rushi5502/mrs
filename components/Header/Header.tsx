'use client'
import React, { useState, useEffect } from "react";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { ModeToggle } from "../ModeToggle";
import { CgMenuRight } from "react-icons/cg";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Menubar
      className={`h-14 flex shadow-none w-full items-center justify-center gap-10 z-50 fixed top-0 left-0 transition-colors duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <MenubarMenu>
        <div className="flex justify-between items-center gap-20 container mx-5">
          <MenubarTrigger className="bg-none">LOGO</MenubarTrigger>

          <div className="md:flex items-center justify-center hidden">
            <MenubarTrigger className="bg-none cursor-pointer">Work</MenubarTrigger>
            <MenubarTrigger className="bg-none cursor-pointer">Services</MenubarTrigger>
            <MenubarTrigger className="bg-none cursor-pointer">About Us</MenubarTrigger>
            <MenubarTrigger className="bg-none cursor-pointer">Customer</MenubarTrigger>
            <MenubarTrigger className="bg-none cursor-pointer text-nowrap">Contact Us</MenubarTrigger>
          </div>

          <div className="flex items-center gap-5">
            <ModeToggle />

            <div className="md:hidden flex">
              <Sheet>
                <SheetTrigger>
                  <CgMenuRight size={28} />
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>MRS Solutions.</SheetTitle>
                    <SheetDescription>
                      Work with us to grow your business
                    </SheetDescription>
                  </SheetHeader>

                  <div className="md:hidden items-center mt-10 flex flex-col gap-5">
                    <MenubarTrigger className="bg-none cursor-pointer hover:text-orange-500">Work</MenubarTrigger>
                    <MenubarTrigger className="bg-none cursor-pointer hover:text-orange-500">Services</MenubarTrigger>
                    <MenubarTrigger className="bg-none cursor-pointer hover:text-orange-500">About Us</MenubarTrigger>
                    <MenubarTrigger className="bg-none cursor-pointer hover:text-orange-500">Customer</MenubarTrigger>
                    <MenubarTrigger className="bg-none cursor-pointer text-nowrap hover:text-orange-500">Contact Us</MenubarTrigger>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </MenubarMenu>
    </Menubar>
  );
};

export default Header;
