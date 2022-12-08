import React, { Fragment } from 'react';
import idea from "../Media/idea.png";
function Line(params) {

    setTimeout(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    var height = entry.target.offsetHeight;
                    var newHeight = height + 500;
                    entry.target.style.height = newHeight+"px";
                } else {
                    entry.target.style.height = "0px";
                }
              })
          })
          
          const blogs = document.querySelectorAll('.hline');
          console.log(blogs);
          
          blogs.forEach(blog => observer.observe(blog));
      }, 100);

      setTimeout(() => {
        const observers = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("holla")
                } else {
                    entry.target.classList.remove("holla")
                }
              })
          })
          
          const i = document.querySelectorAll('.F');
          i.forEach(ui => observers.observe(ui));
      }, 100);
    return(
        <Fragment>
            <div id='line'>
                <div className='hline'>
                  <i className="fa-solid fa-circle c1"></i>
                  <div className='F D1'>
                  <div className='co1 '>
                  <i class="fas fa-headset"></i>
                  </div>
                  </div>
                  <div className='F D2'>
                  <div className='co2 '>
                  <i class="fas fa-shield"></i>
                  </div>
                  </div>
                  <i className="fa-solid fa-circle c2"></i>
                </div>
                <div className='flex2'>
                    <h1 className='F'>Accelerate high-quality software</h1>
                    <h1 className='F'>Embed security into the developer workflow.</h1>

                </div>
                <img src={idea} alt="" />
            </div>
        </Fragment>
    );
}export default Line;