import React from 'react'
import '../general.css'
import Card from '../pruducts/Card'
import img1 from '../imgs/Burgers/Single Hamburger with cheese.png'
import img2 from '../imgs/Burgers/crispy chicken burger.png'
import img3 from '../imgs/Burgers/Double Cheeseburger.png'
import img4 from '../imgs/Burgers/Fried chicken Hamburg.png'
import img5 from '../imgs/Burgers/Hamburger ,pepsei and fries.png'
import img6 from '../imgs/Burgers/Tampa Hamburger.png'
import img7 from '../imgs/Burgers/TenderCrisp Hamburger.png'
import img8 from '../imgs/Burgers/Triple Cheeseburger.png'
import '../pruducts/card.css'
function Burgers() {
  return (
    <div className='cardpage'>
      <div className="container">
        <Card img={img1} name="Single Hamburger with cheese" price="18$"/>
        <Card img={img2} name="crispy chicken burger" price="18$"/>
        <Card img={img3} name="Double Cheeseburger" price="18$"/>
        <Card img={img4} name="Fried chicken Hamburg" price="18$"/>
        <Card img={img5} name="Hamburger ,pepsei and fries" price="18$"/>
        <Card img={img6} name="Tampa Hamburger" price="18$"/>
        <Card img={img7} name="TenderCrisp Hamburger" price="18$"/>
        <Card img={img8} name="Triple Cheeseburger" price="18$"/>
      </div>
    </div>
  )
}

export default Burgers