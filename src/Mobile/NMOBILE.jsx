import React, { Fragment } from 'react';
import "./Mobile.css";
import { motion,AnimatePresence } from "framer-motion";
import logo from "../Media/logo.png";
function NMOBILE({handleClose}) {
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
                damping:35,
                stiffness:500,
            }
        },
       exit:{
        x:"-100vh",
        opacity:0,
        },
    }
    return(
        <Fragment>
            <motion.div id='MOBILE'
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            >
             <button onClick={handleClose}id="bb"><i className='fa fa-times'></i></button>
            <div id='logo0'>
                <img src={logo} alt="" />
            </div>
            <div id='nn09'>
            <ul>
                    <li>Products</li>
                    <li>For Teams</li>
                    <li>Support</li>
                </ul>
            </div>
            <div id='log09'>
               <button className="btn08">LogIn</button><br />
               <button className="btn09" >SignUp</button>
            </div>
            </motion.div>
        </Fragment>
    );
}export default NMOBILE;