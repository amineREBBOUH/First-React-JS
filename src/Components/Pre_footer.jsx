import React, { Fragment } from 'react';
import c1 from '../Media/c1.webp';
import c2 from "../Media/c2.jpg";

function Pre_footer(params) {
    return(
        <Fragment>
            <div className='pre_div'>
              <div className='pre1'>
                <img src={c1} alt="" />
              </div>
              <div className='pre3'>
                <h2>We can’t do it alone</h2>
                <p>We have an ambitious road ahead, and we’re looking for people to join our global team to help shape the future of Atlassian.</p>
                <button>Join Team</button>
              </div>
              <div className='pre2'>
              <img src={c2} alt="" />
              </div>
            </div>
        </Fragment>
    );
    
} export default Pre_footer;