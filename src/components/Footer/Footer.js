import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
import './Footer.css';

function Footer() {
    return (
        <div className="Footer-container">
           <div className="Footer-logo">
             <p className="text-logo">E-potion</p>
             <img src='./logo.png' alt='logo-potion' />
           </div>
           <div className="Footer-lien">
             <a href="@">Qui nous sommes?</a><br/>
             <a href="@">Partenaires</a>
             </div>
           <div className="social-container">
             <a href="@" className="youtube social">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
             </a>
             <a href="@" className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
             </a>
             <a href="@" className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
             </a>
             <a href="@" className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
             </a>
           </div>
           <div className="Footer-info">
             <form>
                 <label>
                     
                 </label>
             </form>
           </div>

        </div>
    )
}

export default Footer
