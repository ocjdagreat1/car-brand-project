
import React, { useState, useEffect } from "react";
import './AboutUs.css'; 
import img from '../assets/Winner.jpg'
import img1 from '../assets/franz.jpg'
import img2 from '../assets/jonatan.jpg'
import img3 from '../assets/jonas.jpg'
import img4 from '../assets/team_picture.jpg'
const AboutUs = () => {

  return (
    <div className="about-page">
      {/* Header Section: About Car.info */}
      <section className="about-section">
        <h1 className="title-1">About Car.info</h1>
       <p> We have created a car database and our goal is for it to contain all kinds of
         data regarding cars. The purpose of the database is to make the car market more
          transparent and less complicated.

         <p>Examples of data are car specifications, classifieds, mileages and reviews.
         By structuring the data, we want to make it easier to find the right car,
         make correct car valuations, compare statistics, 
          confirm a car's history and find the right accessories.</p>

         <p> The target group is everyone that has anything to do with cars, such as owners,
           buyers and sellers  both consumers and those that in any way work in the industry.</p>

            We realise that it is a large and extensive task to build a car information website
             and we greatly appreciate suggestions on how we can improve. </p>
      </section>

      {/* Section: Is Car.info free of charge? */}
      <section className="pricing-section">
        <h2 className="title-1">Is Car.info free of charge?</h2>
        <p>
          YES! For you who only use Car.info as a private person for non-commercial purposes,
           we offer our service free of charge. </p>

         <p> NO! If you use Car.info in your profession or in your business,
          you are considered a commercial user and according to our terms of use a commercial 
          license is required. </p>

        <p> For example in car sales, purchasing, valuation, vehicle repair, financing, 
           insurance or fraud investigations. </p>

         <p>As a professional user you will be able to use Car.info unlimited without so-called coffee breaks. 
           You also get access to our valuation service and extra data that isn't available to the public. 
           Valuations and comments can be saved and displayed to colleagues.
        </p>

        <div className="pricing-grid">

          <div className="pricing-item">
            <h3>Personal use: Free</h3>
            <p>YES! For you who only use Car.info as a private person for non-commercial purposes, we offer our service free of charge.</p>
          </div>
          <div className="pricing-item">
            <h3>Business users: 600K/person/month</h3>
            <p>NO! If you use Car.info in your profession or in your business, you are considered a commercial user.</p>
            <p>Accounts are personal and non-shareable.</p>
            <p>Commercial users (e.g., in car sales, valuation, repair, financing, insurance, or fraud investigations) require a commercial license.</p>
            <p>Benefits for professionals: Unlimited access, valuation service, extra data, saved valuations and comments, and display to colleagues.</p>
          </div>
        </div>
        <div className="links">
          <a href="https://www.car.info/en-se/user-agreement" target="/" rel="noopener noreferrer">Terms of use</a>
          <a href="https://www.car.info/en-se/b2b" target="/" rel="noopener noreferrer">Our products and services</a>
          <a href="https://www.car.info/en-se/b2b/order?type=professional" target="/" rel="noopener noreferrer">Order</a>
        </div>
      </section>

      {/* Section: Founders */}
      <section className="founders-section">

        <div class="column">
    <div class="card">
      <img src={img} alt="" />
      <div class="container">
        <h2>John Doe</h2>
        <p class="title">co-developer</p>
        
      </div>
    </div>
  </div>


        <div class="column">
    <div class="card">
      <img src={img1} alt="" />
      <div class="container">
        <h2>John Doe</h2>
        <p class="title">co-developer</p>
        
      </div>
    </div>
  </div>
        <div class="column">
    <div class="card">
      <img src={img2} alt="" />
      <div class="container">
        <h2>Mr justine</h2>
        <p class="title">co-developer</p>
        
      </div>
    </div>
  </div>

  
        <div class="column">
    <div class="card">
    <img src={img3} alt="" />
      <div class="container">
        
        <h2>Mr Winner</h2>
        <p class="title">co-developer</p>
        
        
      </div>
    </div>
  </div>

        <div class="column">
    <div class="card">
    <img src={img} alt="" />
      <div class="container">
        
        <h2>Mr Winner</h2>
        <p class="title">co-developer</p>
        
        
      </div>
    </div>
  </div>

  
        <div class="column">
    <div class="card">
    <img src={img} alt="" />
      <div class="container">
        
        <h2>Mr Winner</h2>
        <p class="title">co-developer</p>
        
        
      </div>
    </div>
  </div>
        
      </section>

     
      {/* Section: Statistics */}
      <section className="statistics-section">
        <h2>Statistics</h2>
        <ul>
          <li>1,500,000 visitors per week (May 2023)</li>
          <li>700,000 verified members (August 2024)</li>
          <li>40 coworkers at Car.info (January 2024)</li>
        </ul>
      </section>

      
      <section className="cert-section">
        
        <div>
          
        <h2>Team Car.info</h2>
        <p>
          Car.info has a certificate of publication for its database.
        </p>
        <p>
          Protected by Yttrandefrihetsgrundlagen (1991:1469) (YGL), meaning GDPR does not apply if it contravenes YGL.
        </p>
        <p>
          Responsible publisher: Jonas Bonde, appointed by Car Info Nordic AB.
        </p>
        </div>
       
      </section>
      <div className="team-picture"><img src={img4} alt="" /></div>
    </div>
    
  );
};

export default AboutUs;