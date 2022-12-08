import React from 'react';
import img2 from '../Media/Solutions_2_ITSM_928x728@1-5x.webp';
import { motion,AnimatePresence } from "framer-motion";
import A2 from "../Media/A2.png";

function Item1(params) {
    const dropIn={
        hidden:{
         x:"-100vh",
         opacity:0,
        },
        visible:{
            x:"0vh",
            opacity:1,
            transition:{
                duration:0.6,
                type:"spring",
                damping:25,
                stiffness:500,
            }
        },
       exit:{
        x:"100vh",
        opacity:0,
        },
    }
    return(
        <motion.div
         className='itemCNT' 
         variants={dropIn}
         initial="hidden"
         animate="visible"
         exit="exit"
         >
          
            <div className='img'>
             <img src={img2} alt="" />
            </div>
            <div className='info'>
              <h2>Enable your dev, IT ops, and <br /> business teams to deliver great <br /> service experiences</h2>
              <a href="">Deliver at high velocity </a>
              <div className='po99'>
                 <div className='po88'>
                    <div className='po00'>
                    <img src={A2} alt="" />
                    </div>
                    <div>
                        <p>Jira Service</p>
                        <p>High-Velocity ISTM</p>
                    </div>
                 </div>
                
              </div>
            </div>

        </motion.div>
    );
}export default Item1;