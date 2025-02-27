import React, { useEffect, useRef } from 'react';
import "./intro.scss";
import { init } from "ityped";


const Intro = () => {
const textRef= useRef()
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
        backDelay:2000,
      strings: ['WebDeveloper...', 'WebDesigner...', "Learner..."]
    })
    
  }, [])
  
  return (
    <div className='intro' id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/Ratan.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2> Hi There, I'm...</h2>
          <h1>Ratan Singha...</h1>
          <h3>Freelance <span ref={textRef}> WebDesigner</span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}

export default Intro
