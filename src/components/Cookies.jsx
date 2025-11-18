import React from 'react'
import './Cookies.css'
import { Container } from '@mui/material'

const Cookies = () => {
  return (
   
         
    <div className='cookie-body'>
    <div>
        <h1><span>Coo</span>kies </h1>
        <p>In order for car.info to work in the best way, we use cookies. All cookies on car.info are first-party cookies that are set by us and can only be read by us.</p>
        <p>By using our websites and services, you consent to the use of these cookies.</p>
    </div>

    <div>
        <h2>Car.info complies with EU regulations</h2>
        <p>The use of cookies and online tracking from the domain car.info complies with the General Data Protection Regulation (GDPR) and the ePrivacy Directive (ePR).</p>
        <p>The following requirements have been tested:</p>
        <ul>
            <li>Prior consent on other than strictly necessary cookies (ePR)</li>
            <li>Prior consent on personal data (GDPR)</li>
            <li>Personal data is transmitted to "adequate countries" only (GDPR)</li>

        </ul>
        <div className="source">Source: Cookiebot.com</div>
    </div>

    <button>View detailed information about cookies at car.info</button>

    <hr />


    <div className='what-are-cookies'>
    <h2>What are cookies</h2>
    <p>Cookies are small text files that are saved on your computer, phone or tablet when you visit a website.</p>
    <p><span>First-party cakes</span>  is set by the website you are on and only that website can read these cookies. If the website uses external services, these may have their own cookies, so-called <span> third-party cookies.</span></p>
    <p><span>Persistent Cookies</span> are cookies that are stored on your computer until its expiration date has passed - as opposed to <span>session-based cookies</span> which is automatically deleted when you close the browser.</p>
    <p>Cookies can be used to remember your settings and make the website more useful to you. The cookies can also be used to collect anonymous visitor statistics.</p>
    <h1>Your choices when it comes to cookies</h1>
    <p>You can delete or block cookies in your browser yourself. Read more p <a href="#">aboutcookies.org.</a></p>
    <p>you may not be able to store your preferences, and some of our pages might not display properly.</p>

    </div>

    </div>
    
    
  )
}

export default Cookies