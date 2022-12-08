import React, { Fragment } from 'react';
import paypal from'../Media/paypal.png';
import audi from'../Media/audi.png';
import nasa from'../Media/nasa.png';
import ofppt from'../Media/ofppt.png';
function Support(params) {
    return(
        <Fragment>
            <div id='support'>
              <div><img src={paypal} alt="" /></div>
              <div><img src={audi} alt="" /></div>
              <div><img src={nasa} alt="" /></div>
              <div><img src={ofppt} alt="" /></div>
            </div>
        </Fragment>
    );
}export default Support;