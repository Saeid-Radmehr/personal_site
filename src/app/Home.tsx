"use client";
import {motion} from 'framer-motion'
export default function Introduction() {
    return(
        <div className="center">
            <motion.div initial={{y:400}} animate={{y:0, transition:{duration:0.9, type:"spring", mass:2, stiffness:60, velocity:100}}}
              className='flex flex-col text-white text-align-left'>
                  <p justify-self-start>I am</p>
                  <div className='banner font-extrabold text-white'>SAEID</div>
                  <p className='text-end text-white'>a software developer</p>
            </motion.div>
        </div>
        )
}