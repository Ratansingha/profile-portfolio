import React, { useState } from 'react'
import "./work.scss"


const Work = () => {
const [currentSlide,setCurrentSlide] = useState(0)
  const data = [ 
    {
      id: "1",
      title:"Mobile Applications",
      icon: "./assets/mobile.png",
      desc: "lorem ipsam ki korse akta bal falana kam kore gase sala khali american der borolok kore gase dolar innovent kore",
      img:"https://img.freepik.com/free-vector/advanced-computer-skills-abstract-concept-illustration_335657-2255.jpg?size=338&ext=jpg&ga=GA1.1.1222169770.1701734400&semt=ais"
  },
    {
      id: "2",
      title:"Web Applications",
      icon: "./assets/globe.png",
      desc: "lorem ipsam ki korse akta bal falana kam kore gase sala khali american der borolok kore gase dolar innovent kore",
      img:"https://img.freepik.com/free-vector/advanced-computer-skills-abstract-concept-illustration_335657-2255.jpg?size=338&ext=jpg&ga=GA1.1.1222169770.1701734400&semt=ais"
  },
    {
      id: "3",
      title:"Branding",
      icon: "./assets/writting.png",
      desc: "lorem ipsam ki korse akta bal falana kam kore gase sala khali american der borolok kore gase dolar innovent kore",
      img:"https://img.freepik.com/free-vector/advanced-computer-skills-abstract-concept-illustration_335657-2255.jpg?size=338&ext=jpg&ga=GA1.1.1222169770.1701734400&semt=ais"
  },
  ]
  const handleClick = (way) => {
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) : setCurrentSlide(currentSlide < data.length -1 ? currentSlide + 1 :0)
  }
  return (
    <div className='work' id="work">
      <div className="slider" style={{transform:`translateX(-${currentSlide *100}vw)`}}>
        {data.map((d) => (
              <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={d.icon} alt="" />
                </div>
                  <h2>{d.title}</h2>
                <p>{d.desc} </p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img src="https://img.freepik.com/free-vector/advanced-computer-skills-abstract-concept-illustration_335657-2255.jpg?size=338&ext=jpg&ga=GA1.1.1222169770.1701734400&semt=ais" alt="" />
            </div>
          </div>
        </div>
        ))}
    
      </div>
      <img  src="assets/rightArrow.png" className='arrow left' alt="" onClick={()=>handleClick("left")} />
      <img  src="assets/rightArrow.png" className='arrow right' alt="" onClick={()=>handleClick()} />
    </div>
  )
}

export default Work
