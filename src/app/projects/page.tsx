"use client"
import ctw from '../assets/projects/ctw-demo.png.webp'
import ctc from '../assets/projects/ctc-demo.png.webp'
import {motion} from 'framer-motion'
import Image from 'next/image'
export default function Projects(){
    return(
        <>
        <div className=" content-center text-center">
           <div className='shadow-2xl shadow-gray-950 p-5 m-5 pb-10  h-fit relative'> 
            <Image src={ctw} width={8024} height={8024} alt="" />
           <motion.a  target="_blank" href='https://compotechwood.ca'
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9 }}
             className="py-2 px-4 bg-gray-300 shadow-2xl text-gray-700 w-fit font-semibold"
           >
              Link
           </motion.a>
            </div>

           <div className='shadow-2xl shadow-gray-950 p-5 pb-10 m-5 mt-10 relative'> 
            <Image src={ctc} width={8024} height={8024} alt="" />
           <motion.a  target="_blank" href='https://compotechcabinet.ca'
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9 }}
             className="py-2 px-4 bg-gray-300 shadow-2xl text-gray-700 w-fit font-semibold"
           >
              Link
           </motion.a>
            </div>
        </div>
        </>
    )
}
