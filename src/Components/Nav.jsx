import React, { Fragment } from 'react';
import logo from '../Media/logo.png'
import Search from './Search';
import { useState } from "react";
import { motion,AnimatePresence } from "framer-motion";

import NMOBILE from '../Mobile/NMOBILE';
function Nav(params) {
    const [trac, settrac] = useState(false);
    const [trac2, settrac2] = useState(false);
    const open=()=>{
      settrac(true);
    }
    const close=()=>{
        settrac(false);
      
    }
    const open2=()=>{
        settrac2(true);
      }
      const close2=()=>{
          settrac2(false);
        
      }
    return(
        <Fragment>
        <nav>
            <div>
               <div> <img src={logo} alt="" /></div>
               <div className='ul'>
                <ul>
                    <li>Products</li>
                    <li>For Teams</li>
                    <li>Support</li>
                </ul>
                </div>
            </div>
            <div className='div2'>
                <button onClick={trac ?close:open} className="btnsearch"><i className='fa fa-search'></i></button>
                <button className='login'>LogIn</button>
                <button className='signup'>SignUp</button>
                <button onClick={trac2 ?close2:open2}><i className='fa fa-bars'></i></button>
              
            </div>
        </nav>
        {trac && <Search handleClose={close}/> }
       <AnimatePresence 
       initial={false}
       exitBeforeEnter={true}
       onExitComplete={()=>null}
       >
        {trac2 && <NMOBILE handleClose={close2}/> }
       </AnimatePresence>
        
        </Fragment>
    );
    
};export default Nav;