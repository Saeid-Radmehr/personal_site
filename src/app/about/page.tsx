"use client";
import { motion } from 'framer-motion'
export default function About() {
        return (
        <div className='mx-auto w-4/5 '>
            <motion.div initial={{x:-400}} animate={{x:0, transition:{duration:0.9, type:"spring", mass:2, stiffness:60, velocity:100}}}
              className=' text-white text-align-left text-justify shadow-2xl shadow-gray-950 px-10 pt-10 pb-10 mb-10'>
                  <div className='text-justify  text-white '>
<p>
I am a software engineer with a strong focus 
on web development. Crafting innovative and user-centric web applications is not just 
my profession; it&quot;s my passion. I take pride in building intuitive and visually engaging 
websites that provide seamless experiences to users across various devices and browsers.

</p>
<p>
My journey in web development has equipped me with a diverse skill set. On the front end, I excel in HTML, 
CSS, and JavaScript, creating captivating user interfaces that not only look impressive but also prioritize
 usability and accessibility. I pay meticulous attention to detail, ensuring that every element aligns 
 perfectly and that the user journey flows naturally.
</p>
<p>
Being well-versed in front-end libraries and frameworks, such as React, Angular, or Vue.js,
 empowers me to develop dynamic and responsive applications that adapt to changing user needs. 
 I understand the significance of cross-browser compatibility and ensure that my creations work 
 flawlessly on different platforms.
</p>
<p>
Collaboration with designers and back-end developers is an integral part of my work.
 I seamlessly integrate front-end components with the back end, ensuring that data exchange
  happens efficiently through well-defined APIs. My effective communication skills and team-oriented 
  approach contribute to the overall success of every project I am a part of.
</p>
<p>
When it comes to the back end, I have a solid understanding of server-side technologies.
 Whether it&quot;s working with Node.js, Ruby on Rails, Django, or other frameworks, 
 I strive to build robust, scalable, and secure web applications. 
 I leverage databases like MySQL, PostgreSQL, or MongoDB to store and manage data effectively,
  adhering to best practices for data integrity and security.
</p>
<p>
As a web developer, I value the importance of continuous learning and staying updated with the 
latest trends in the industry. I am always eager to explore new tools, frameworks, 
and methodologies to enhance my skills and provide cutting-edge solutions to my clients.
</p>
<p>
Testing is a vital part of my development process. I am diligent in writing comprehensive unit tests 
and conducting integration tests to ensure the reliability and stability of my code. 
This approach helps me catch potential issues early on and deliver high-quality products.
</p>
<p>
In addition to my technical expertise, I prioritize user feedback and incorporate it into my work.
 Continuously seeking ways to improve the user experience and make websites more intuitive 
 and efficient drives me to create exceptional web applications.
</p>
<p>
Outside of work, I actively contribute to the web development community, 
sharing my knowledge and engaging in discussions about best practices and emerging trends.
 This collaborative spirit enables me to grow both personally and professionally,
  and it motivates me to keep pushing the boundaries of what is possible in web development.
</p>
<p>
Being a web developer is a journey of constant learning and growth, 
and I am excited to continue honing my skills and contributing to the ever-evolving
 world of web development.
</p>
            </div>
            </motion.div>
        </div>
        )
}
