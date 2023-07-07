import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="aboutW">
      <div className="aboutLeft">
        <h1>
          About <span>Us</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium,
          aut magnam! Cumque, dignissimos aperiam reprehenderit tempora nobis in
          alias debitis possimus distinctio error omnis recusandae molestias
          quia, fugit autem quos!
        </p>
      </div>
      <div className="aboutImg">
        <img src="/media/product3.jpg" alt="" />
      </div>
    </div>
  );
};

export default About;
