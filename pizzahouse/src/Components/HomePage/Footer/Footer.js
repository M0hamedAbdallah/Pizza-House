import React from 'react'
import './footer.css'
import '../../general.css'
import foot from '../../imgs/Logo/logo-inverse-198x66.png'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import {faMessage} from '@fortawesome/free-solid-svg-icons'
function Footer() {
  return (
    <footer>
      <div className="container">
 <div className=" inf one">
 <div className="box">
          <h3>What We Offer</h3>
          <ul>
            <li><a href="#">Pizzas</a></li>
            <li><a href="#">Burgers</a></li>
            <li><a href="#">Salads</a></li>
            <li><a href="#">Drinks</a></li>
            <li><a href="#">Seafood</a></li>
          </ul>
        </div>
        <div className="box">
          <h3>Information</h3>
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Our Menu</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
 </div>
 <div className=" inf two">
  <img src={foot} alt="" />
<div className="phone">
<FontAwesomeIcon icon={faPhone} className="icon"></FontAwesomeIcon>
  <span>+1 718-999-3939</span>
  </div>  
<div className="message">
<FontAwesomeIcon icon={faMessage} className="icon"></FontAwesomeIcon>
  <span>info@demolink.org</span>
</div>
<div className="socail">
<FontAwesomeIcon icon="fa-brands fa-facebook" />
</div>
 </div>
      
      <div className=" inf three">
     
      <span> 514 S. Magnolia St. Orlando, FL 32806</span>
      <span>© 2022. All Rights Reserved. Design by Yahia Salah</span>
      </div>
      </div>
    </footer>
  )
}

export default Footer