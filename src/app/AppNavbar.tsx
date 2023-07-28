"use client";
import logo from '/logo.svg'
import React, { Component } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react';
function ListItem(props: {children:React.ReactNode, to:string }) {
  return(
    <Link href={props.to} className='z-50 py-2 px-2 flex items-center hover:text-white transition-colors bg-gray-800'>
      <motion.li className='text-white' whileHover={{ scale: 1.1, }}>
        {props.children}
      </motion.li>
    </Link>
  )
}
const NavList= (props:{class:string,style:any,animate:any,initial:any})=> {
    return(
      <motion.ul initial={props.initial} animate={props.animate} style={props.style} className={` ${props.class} mx-3 text-small my-2 flex gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 bg-gray-800`}>
          <ListItem to='/skills'> 
              My Skills
          </ListItem>
          <ListItem to='/projects'> 
              Projects
          </ListItem> 
          <ListItem to='/about'> 
              About Me
          </ListItem> 
          <ListItem to='/contact'> 
              Contact Me
          </ListItem> 
      </motion.ul> )
}
function Hamburger(props:{toggle:()=>void, opened:boolean, breakpoint:number}){
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const nav = ()=>{setIsSmallScreen(window.innerWidth < props.breakpoint);}
    nav()
    window.addEventListener('resize',nav)
    return ()=>window.removeEventListener('resize',nav)
  });
  if( isSmallScreen ) {
     if(props.opened) {
       return(
        <>
         <button onClick={props.toggle} className='text-white mx-5'>
           <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
             <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
           </svg>
         </button>
          <NavList class='flex-col absolute right-0 py-1' style={{top:'64px'}} initial={{opacity:0}} animate={{ opacity:1, transition:{duration:1.3, type:'spring'}}} />
        </>
       )
     }else {
        return(
          <>
          <button onClick={props.toggle} className='text-white mx-5'>
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
          </button>
          </>
        )
      }
  }else {
    return(
      <NavList  class='' style={{}} initial={{opacity:0}} animate={{ opacity:1, transition:{duration:1.3 ,delay:0.8 ,type:'spring'}}}/>
    )
  }
}
export default function AppNavbar() {
  const [opened, set_open]=React.useState(false)
  const breakpoint = 540;
  function toggle(){
    set_open(!opened)
  }
  return (
      <div  className="flex items-center justify-between text-blue-gray-900">
        <Link href='/' className=' flex items-center hover:text-white transition-colors'>
          <motion.div initial={{rotate:-90}} whileHover={{scale:1.15}} animate={{rotate:0, transition:{duration:1.5,delay:0.9,type:"spring"}}}>
            <Image src='/logo.svg' height={30} width={30} className="m-5 transform rotate-2 h-14" alt="Logo" />
          </motion.div>
        </Link>
        <Hamburger toggle={toggle} breakpoint={breakpoint} opened={opened}/>
      </div>
  );
}
