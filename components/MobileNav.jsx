"use client"
import React from 'react'
import { Sheet,SheetContent,SheetTrigger } from './ui/sheet'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { CiMenuFries } from "react-icons/ci" 

const links=[
    {name:"home",href:"/"},
    {name:"services",href:"/services"},
    {name:"resume",href:"/resume"},
    {name:"work",href:"/work"},
    {name:"contact",href:"/contact"},

]
function MobileNav() {
    const pathname = usePathname()
  return (
    <Sheet>
        <SheetTrigger className='flex justify-center items-center'>
            <CiMenuFries className="text-{32px} text-accent" />
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            <div className='mt-32 mb-40 text-center text-2xl'>
                <Link href="/">
                <h1 className='text-4xl font-semibold'>Dennis<span className='text-accent'>.</span></h1>
                </Link>
            </div>
            <nav className='flex flex-col justify-center items-center gap-8'>
                {links.map((link,index)=>{
                    return(
                        <Link key={index} href={link.href} className={`${link.href === pathname && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`}> {link.name}</Link>
                    )
                })}
            </nav>
        </SheetContent>
      
    </Sheet>
  )
}

export default MobileNav
