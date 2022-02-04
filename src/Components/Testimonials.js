import React from 'react';
import {useSelector} from "react-redux";
import {getTestimonials} from "../store/userData/selectors";

const Testimonials = () => {
  
    const testimonials = useSelector(getTestimonials)

    return (
      <section id="testimonials">
      <div className="text-container">
         <div className="row">

            <div className="two columns header-col">
               <h1><span>Client Testimonials</span></h1>
            </div>

            <div className="ten columns flex-container">
                  <ul className="slides">
                      {
                          testimonials.map(function(testimonials){
                              return  <li key={testimonials.user}>
                                  <blockquote>
                                      <p style={{fontFamily: 'Roboto', fontSize: '18px'}}>{testimonials.text}</p>
                                      <cite>{testimonials.user}</cite>
                                  </blockquote>
                              </li>
                          })
                      }
                  </ul>
               </div>
            </div>
         </div>
   </section>
    );
}

export default Testimonials;
