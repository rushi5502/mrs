import React from 'react'
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
import { Button } from '../ui/button'
import { ModeToggle } from '../ModeToggle'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { CgMenuRight } from 'react-icons/cg'

const Header = () => {
  return (
   
     <Menubar className='h-14 flex shadow-none bg-transparent  w-full items-center justify-center gap-10  z-50  fixed top-0 left-0 '>
    <MenubarMenu  >
      <div  className=' flex justify-between items-center gap-20 container   mx-5'>
      <MenubarTrigger className='bg-none'>LOGO</MenubarTrigger>

<div className='md:flex items-center   justify-center hidden '>

<MenubarTrigger className='bg-none cursor-pointer'>Work</MenubarTrigger>
<MenubarTrigger className='bg-none cursor-pointer'>Services</MenubarTrigger>  
<MenubarTrigger className='bg-none cursor-pointer'>Pricing</MenubarTrigger>  
<MenubarTrigger className='bg-none cursor-pointer'>Customer</MenubarTrigger>
<MenubarTrigger className='bg-none cursor-pointer text-nowrap'>Contact Us</MenubarTrigger>
</div>

<div className='   flex items-center gap-5  '>
 
<ModeToggle />
 
 

<div className='  md:hidden flex'>
<Sheet>
  <SheetTrigger><CgMenuRight   size={28}/></SheetTrigger>
  <SheetContent>
    <SheetHeader>
       <SheetTitle>MRS Solutions.</SheetTitle>
      <SheetDescription>
        Work with us to grow your bussiness
      </SheetDescription>
    </SheetHeader>

    <div className='md:hidden items-center  mt-10 flex flex-col  gap-5'>

<MenubarTrigger className='bg-none cursor-pointer hover:text-orange-500'>Work</MenubarTrigger>
<MenubarTrigger className='bg-none cursor-pointer hover:text-orange-500'>Services</MenubarTrigger>  
<MenubarTrigger className='bg-none cursor-pointer hover:text-orange-500'>Pricing</MenubarTrigger>  
<MenubarTrigger className='bg-none cursor-pointer hover:text-orange-500'>Customer</MenubarTrigger>
<MenubarTrigger className='bg-none cursor-pointer text-nowrap hover:text-orange-500'>Contact Us</MenubarTrigger>
</div>
  </SheetContent>
</Sheet>

 
</div>
 </div>
      </div>


    </MenubarMenu>
  </Menubar>
 
  
  )
}

export default Header