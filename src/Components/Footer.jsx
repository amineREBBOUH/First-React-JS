import React, { Fragment } from 'react';
import logo from "../Media/logo.png";
import me from "../Media/me.JPG";
function Footer(params) {
    return(
        <Fragment>
        <footer>
            <div className='div0'>
                <img src={logo} alt="" />
                <h5>Name Of Company</h5>
            </div>
            <div >
            <div className='ULL'>
            <div>
                 <h4>LEARN</h4>
                    <ul>
                    <li>Courses</li>
                     <li>Documentation</li>
                    <li>Services</li>
                    <li>Devloper</li>
                    </ul>
                </div>            
                        </div>
            </div>
            <div >
                <div className='ULL'>
                    <div>
                    <h4>About Us</h4>
                    <ul>
                    <li>Events</li>
                    <li>Blogs</li>
                    <li> Security</li>
                    <li>Company</li>
                    </ul>
                    </div>
                </div>
            </div>
            <div className='div0'>
                <div id='me'>
                <img src={me} alt="" />
                </div>
                <h5>Deveopment By: <span>Amine Rebbouh</span></h5>
            </div>
        </footer>
        <div className='post_footer'>
            <div className='div08'>
            <ul>
                    <li><i className="fa fa-circle v" aria-hidden="true"></i>Privacy Policy</li>
                    <li><i className="fa fa-circle v" aria-hidden="true"></i>Terms</li>
                    <li><i className="fa fa-circle v" aria-hidden="true"></i>Impresum</li>
                    <li><i className="fa fa-circle v" aria-hidden="true"></i>Copy Right:@22023 REBBOUH</li>
                    </ul>
            </div>
            <div className='div09'>
                 <ul className='media'>
                    <li><i className="fa-brands fa-instagram"></i></li>
                    <li><i className="fa-brands fa-twitter"></i></li>
                    <li><i className="fa-brands fa-github"></i></li>
                    </ul>
            </div>
        </div>
        </Fragment>
    );
}export default Footer;