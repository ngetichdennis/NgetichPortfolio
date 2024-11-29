"use client";
import React from 'react'
import { AnimatePresence,motion } from 'framer-motion'
import { usePathname } from 'next/navigation';

function PageTransition({children}) {
    const pathname = usePathname();
  return (
    <AnimatePresence>
        <div key={pathname}>
        <motion.div
        initial={{opacity:1}}
        animate={{opacity:0}}
        exit={{opacity:0}}
        transition={{duration:0.5,delay:1,ease:"easeInOut"}}
        className='
        h-screen w-screen fixed bg-primary top-0 pointer-events-none'

        />
        {children}
            </div>
       

      
    </AnimatePresence>
  )
}

export default PageTransition
