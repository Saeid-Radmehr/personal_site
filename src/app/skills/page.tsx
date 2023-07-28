"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'

import react from "../logos/react.svg.webp"           
import git from "../logos/git-icon.svg.webp"        
import vitejs from "../logos/vitejs.svg.webp"          
import webpack from "../logos/webpack.svg.webp"         
import apache from "../logos/apache.svg.webp"          
import ts from "../logos/typescript-icon.svg.webp" 
import js from "../logos/javascript.svg.webp"      
import cpp from "../logos/c-plusplus.svg.webp"      
import java from "../logos/java.svg.webp"            
import postgres from "../logos/postgresql.svg.webp"      
import mysql from "../logos/mysql-icon.svg.webp"      
import nodejs from "../logos/nodejs.svg.webp"          
import sass from "../logos/sass.svg.webp"            
import tailwindcss from "../logos/tailwindcss-icon.svg.webp"
import booststrap from "../logos/bootstrap.svg.webp"       
import html5 from "../logos/html-5.svg.webp"          
import aws from "../logos/aws.svg.webp"             
import digitalocean from "../logos/digital-ocean.svg.webp"   
import googlecloud from "../logos/google-cloud.svg.webp"    
import django from "../logos/django-icon.svg.webp"     
import python from "../logos/python.svg.webp"          
import websocket from "../logos/websocket.svg.webp"       
import gitlab from "../logos/gitlab.svg.webp"          
import docker from "../logos/docker-icon.svg.webp"     

function Skill(props:{icon: string, text?:string|null|undefined}){
    return(
        <>
        <div className='w-fit p-1 m-3'>
            <img src={props.icon} className='m-3 w-20 h-20' alt='' width='60' height='60'/>
            <p className="text-white text-center mx-3 mt-5 font-bold">{props.text}</p>
        </div>
        </>
        )    
}
export default function Skills(){
    return(
        <>
        <motion.div className='flex flex-wrap content-center mx-20 my-5 gap-5 justify-center'
        initial={{scale:0.01}} animate={{scale:1,transition:{duration:1.1,delay:0.1}}}
        >
            <Skill icon={react.src} text="React"/>
            <Skill icon={git.src} text="Git"/>
            <Skill icon={vitejs.src} text="Vite"/>
            <Skill icon={webpack.src} text="Webpack"/>
            <Skill icon={apache.src} text="Apache"/>
            <Skill icon={ts.src} text="Typescript"/>
            <Skill icon={js.src} text="Javascript"/>
            <Skill icon={cpp.src} text="C++"/>
            <Skill icon={java.src} text="Java"/>
            <Skill icon={postgres.src} text='PostgreSQL'/>
            <Skill icon={mysql.src} text="MySQL"/>
            <Skill icon={nodejs.src} text="nodejs"/>
            <Skill icon={sass.src} text="Sass"/>
            <Skill icon={tailwindcss.src} text="Tailwind"/>
            <Skill icon={booststrap.src} text="Bootstrap"/>
            <Skill icon={html5.src} text="HTML5"/>
            <Skill icon={aws.src} text="AWS"/>
            <Skill icon={digitalocean.src} text="Digital Ocean"/>
            <Skill icon={googlecloud.src} text="Google Cloud"/>
            <Skill icon={django.src} text="Django"/>
            <Skill icon={python.src} text="Python"/>
            <Skill icon={webpack.src} text="Websocket"/>
            <Skill icon={gitlab.src} text="Gitlab"/>
            <Skill icon={docker.src} text="Docker"/>
        </motion.div>
        </>
    )
}