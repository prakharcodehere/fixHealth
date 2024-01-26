import React, { useState } from 'react';
import testimonials from '../../Data/TestImonialData';
import styles from "./Testimonials.module.css";
import Pin from "../../Assets/pin.png"

const Testimonials = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
    <h3 className={styles.mainHeading} id='testimonial'>TESTIMONIAL</h3>
    <div className={styles.testimonialContainer} >


      
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className={`${styles.testimonial} ${hoveredIndex === index ? styles.hovered : ''}`}
          
        >
          <img src={Pin} alt="Pin" className={styles.pinImgs} loading="eager"/>
          <p className={styles.content}>{testimonial.content}</p>
          <div className={styles.authorDescription}>
          <img src={testimonial.image} alt="authorImg" className={styles.testimonialImg}/>
          <p className={styles.author}>{testimonial.author}</p>
          
          </div>
          
        </div>
      ))}
    </div>
    </>
  );
};

export default Testimonials;