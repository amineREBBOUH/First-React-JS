import React from 'react';
import img1 from '../Media/Solutions_1_WorkManagement_928x728@1-5x.webp';
import { motion,AnimatePresence } from "framer-motion";
import A1 from "../Media/A1.png";
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
        <motion.div className='itemCNT'
        variants={dropIn}
         initial="hidden"
         animate="visible"
         exit="exit" 
        >
            
            <div className='img'>
             <img src={img1} alt="" />
            </div>
            <div className='info'>
              <h2>
              Make work flow across teams <br /> while connecting back to company goals
              </h2>
              <a href="">Work differently, together</a>
              <div className='po99'>
                 <div className='po88'>
                    <div className='po00'>
                        <img src={A1} alt="" />
                    </div>
                    <div>
                        <p>Confluence</p>
                        <p>Content collaboration</p>
                    </div>
                 </div>
                 <div className='po88'>
                    <div className='po00'>
                    <img src={A2} alt="" />
                    </div>
                    <div>
                        <p>Work Management</p>
                        <p>Business team collaboration</p>
                    </div>
                 </div>
              </div>
            </div>

        </motion.div>
    );
}export default Item1;