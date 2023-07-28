"use client"
import { useForm, SubmitHandler } from "react-hook-form"
import { motion } from 'framer-motion'
import { useState } from 'react'
import  Modal  from "../component/modal"
interface IFormInput {
  name: string,
  phoneNumber: string,
  email: string,
  message: string,
}

export default function Form() {
  const { register, handleSubmit,  formState:{isValid, errors}, reset} = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
      if( isValid ) {
         fetch("/save-contact", {
           method: 'POST',
           body: JSON.stringify(data),})
           reset() 
          setIsOpen(true)
      }
    };
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
		<Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    <div className='center flex flex-col text-white text-align-left ' >
    <motion.div  className="shadow-2xl shadow-gray-950 p-5" initial={{x:400}} animate={{x:0,transition:{duration:0.9, type:"spring", mass:2, stiffness:90, velocity:100}}}>

       <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <input {...register("name", {required:"required"}) } placeholder="Name" className="py-2 px-4 m-3 border-b bg-transparent focus:outline-none"/>
         {errors.name && errors.name.message}
        <input {...register("phoneNumber") } placeholder="Phone number" className="p-2 py-2 px-4 m-3 border-b bg-transparent focus:outline-none"/>
        <input placeholder="Email" className="p-2 py-2 px-4 m-3 border-b bg-transparent focus:outline-none"  
           type="email"
           {...register("email", {
             required: "Required",
             pattern: {
               value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
               message: "invalid email address"
            }
           })}
         />
         {errors.email && errors.email.message}
        <textarea {...register("message")}  placeholder="Message" className="m-3 py-2 px-4 border-b bg-transparent focus:outline-none"/>
        <div className="m-5 flex flex-col ">
           <motion.button type='submit'
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9 }}
             className="p-2 bg-gray-300 shadow-2xl text-gray-700"
           >
              Submit
           </motion.button>
        </div> 
        </form>           

    </motion.div>
    </div>
    </>
  )
}