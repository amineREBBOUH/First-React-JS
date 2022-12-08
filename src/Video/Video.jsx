import React, { Fragment } from 'react';
function Video({Close}) {
    

    return(
        <Fragment>
            <div id='video'>
                <i className='fa fa-times'onClick={Close}></i>
                <iframe width="1024" height="576" src="https://www.youtube.com/embed/6oj8tNjwR68" title="Atlassian + Kiva: The Teams Behind Global Impact | Atlassian" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen controls autoPlay muted></iframe>
            </div>
        </Fragment>
    ) ;
    
}export default Video;