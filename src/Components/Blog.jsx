import React, { Fragment } from 'react';
import img1 from "../Media/Blog_360x265@2x.webp";
import img2 from "../Media/Team Playbook_360x265@2x.webp";
import img3 from "../Media/Agile Coach_360x265@2x.webp";
function Blog(params) {
   
      setTimeout(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.className="show";
                } else {
                    entry.target.className="hidden";
                }
              })
          })
          
          const blogs = document.querySelectorAll('.hidden');
          blogs.forEach(blog => observer.observe(blog));
      }, 100);
      
    return(
        <Fragment>
            <div id='blog'>
                <div className='hidden'>
                    <div className='img'>
                        <img src={img1} alt="" />
                    </div>
                    <div className='titre z1'>
                        <h3>Work Life</h3>
                        <p>Real-life advice, inspiration, and stories from the working world today.</p>
                        <a>Read More</a>
                    </div>
                </div>
                <div className='hidden'>
                    <div className='img'>
                    <img src={img2} alt="" />
                    </div>
                    <div className='titre z2'>
                        <h3>Atlassian Team Playbook</h3>
                        <p>Solve common team challenges with these group exercises.</p>
                        <a>Read More</a>
                    </div>
                </div>
                <div className='hidden'>
                   <div className='img'>
                   <img src={img3} alt="" />
                   </div>
                   <div className='titre z3'>
                      <h3>The Agile Coach</h3>
                      <p>Atlassian's no-nonsense guide to agile development.</p>
                      <a>Read More</a>
                   </div>
                </div>
            </div>
        </Fragment>
    );
}export default Blog;