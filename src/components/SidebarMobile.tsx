"use client";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from "@/components/ui/drawer";
import ProfilePicture from '@public/assets/ProfilePicture.png';
import { AppWindow, House, LogOut, Menu } from "lucide-react";
import Image from "next/image";

export const SidebarMobile = () => {
  return (
    <Drawer direction="left">
      <DrawerTrigger><Menu /></DrawerTrigger>
      <DrawerContent className="flex flex-col  h-full w-[300px]">
        <DrawerHeader>
          <div className="flex items-center gap-x-4 border-b-[1px] pb-8">
            <Image
              src={ProfilePicture}
              className="rounded-full size-14 object-cover"
              alt='Profile Picture'
            />
            <div className="flex flex-col items-start">
              <DrawerTitle>Matheus Alisauska</DrawerTitle>
              <DrawerDescription>Software Engineer</DrawerDescription>
            </div>
          </div>
        </DrawerHeader>
        <div className="flex flex-col gap-y-7 px-4 py-4">
          <div className="flex items-center gap-x-4">
            <House color="#2B2E48" />
            <p className="text-[#0F0F0F]">Home</p>
          </div>
          <div className="flex items-center gap-x-4">
            <AppWindow color="#2B2E48" />
            <p className="text-[#0F0F0F]">Projects</p>
          </div>
        </div>
        <DrawerFooter>
          <div className="flex gap-x-2">
            <LogOut color="#ef4444" />
            <p className="text-red-500">Sair</p>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
