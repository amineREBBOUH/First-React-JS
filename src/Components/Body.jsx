import { toBeRequired } from '@testing-library/jest-dom/dist/matchers';
import React, { Fragment } from 'react';
import { useState } from "react";
import Team from "../Media/team.png"
import Video from '../Video/Video';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import Item1 from "../Item/Item1";
import Item2 from "../Item/Item2";
import Item3 from "../Item/Item3";
import { motion,AnimatePresence } from "framer-motion";

function Body(params) {

  const [trac, settrac] = useState(false);
  const open=()=>{
    settrac(true);
  }
  const close=()=>{
      settrac(false);
    
  }
  var ch=false;
    const remove_class=(e)=>{
          var elements=document.getElementsByClassName('A');
          for (let index = 0; index < elements.length; index++) {
              elements[index].classList.remove("Active");
            
          }
          e.target.classList.add("Active");
    }
    const show=(e)=>{
      if (ch) {
        document.getElementById("show").style.opacity="0";
        document.getElementById("show").style.display="none";
        ch=false;
      } else {
        document.getElementById("show").style.opacity="1";
        document.getElementById("show").style.display="block";
        ch=true;
      }
     
}
const change=(e)=>{
var text=e.target.innerText;
document.getElementById("span").innerText=text;
document.getElementById("show").style.opacity="0";
document.getElementById("show").style.display="none";
}
    return(
        <Fragment>
            <div className='Body'>
                <div className='B1'>
                    <p>It’s possible <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;with teamwork</p>
                </div>
                <div className='B2'>
                    <img src={Team} alt="" />
                </div>

            </div>
            <h1 className='h1'>TEAM solutions are designed for all types of work</h1>
            <Router>
           
            <ul className='ITEAM' >
            <Link to="/Item1">
              <li className='Active A ' onClick={remove_class}>
                Item1
              </li>
            </Link>
            <Link to="/Item2">
              <li className='A'onClick={remove_class}>
                Item2
              </li>
            </Link>
            <Link to="/Item3">
              <li className='A'onClick={remove_class}>
                Item3
              </li>
            </Link>
            </ul>
              <div className='ITEAM2'>
            <ul  >
            
              <li className='Active A ' onClick={remove_class}>
               <span id="span">item1</span> <i className="fa-sharp fa-solid fa-caret-down" onClick={show}></i>

              </li>
              <div id ="show">
                <p><Link to="/Item1" onClick={change}>item1</Link></p>
                <p><Link to="/Item2" onClick={change}>item2</Link></p>
                <p><Link to="/Item3" onClick={change}>item3</Link></p>
              </div>
            
           
            </ul>
            </div>
            
                     <Routes>
                 <Route exact path='/' element={< Item1/>}></Route>
                 <Route exact path='/Item1' element={< Item1/>}></Route>
                 <Route exact path='/Item2' element={< Item2 />}></Route>
                 <Route exact path='/Item3' element={< Item3 />}></Route>
          </Routes>
          
       </Router>
       <h1 className='h1 t1'>Join the teams that achieve the impossible every day</h1>
       <h1 className='h1 t2' onClick={trac ?close:open}><i className="fa-solid fa-circle-play"></i>Watch a customer story</h1>
       {trac && <Video Close={close}/> }

        </Fragment>
    )
    
}export default Body;