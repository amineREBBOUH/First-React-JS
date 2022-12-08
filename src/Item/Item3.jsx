import React from 'react';
import img2 from '../Media/Solutions_3_ADO_928x728@1-5x.webp';
import { motion,AnimatePresence } from "framer-motion";
import A2 from "../Media/A2.png";
import A1 from "../Media/A1.png";

function Item3(params) {
    const dropIn={
        hidden:{
         x:"100vh",
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
        x:"-100vh",
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
             <img src={img2} alt="" />
            </div>
            <div className='info'>
              <h2>Run a world-class agile software <br /> company—from discovery to br delivery and operations</h2>
              <a href="">Explore Open DevOps</a>
              <div className='po99'>
                 <div className='po88'>
                    <div className='po00'>
                    <img src={A2} alt="" />
                    </div>
                    <div>
                        <p>Jira Align</p>
                        <p>Entrprise Agile Planning</p>
                    </div>
                 </div>
                 <div className='po88'>
                    <div className='po00'>
                    <img src={A1} alt="" />
                    </div>
                    <div>
                        <p>Compass</p>
                        <p>Developer  Experience Platform</p>
                    </div>
                 </div>
                 
              </div>
            </div>

        </motion.div> 
        );
}export default Item3;