import React, { useEffect, useState } from 'react'
import "./portfolio.scss"
import PortfolioList from '../portfolioList/PortfolioList';
import { featuredPortfolio,webPortfolio,mobileApp,design,branding,contact } from '../../data';

const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured"
    },
    {
      id: "web",
      title: "Web App"
    },
    {
      id: "mobile",
      title: "Mobile App"
    },
    {
      id: "design",
      title: "Design"
    },
    {
      id: "brand",
      title: "Branding"
    },
    {
      id: "content",
      title: "Content"
    },
  ];
  
useEffect(() => {
  switch (selected) {
    case "featured":
      setData(featuredPortfolio)
      break;
    
    case "web":
      setData(webPortfolio)
      break;
    
    case "mobile":
      setData(mobileApp)
      break;
    
    case "design":
      setData(design)
      break;
    
    case "brand":
      setData(branding)
      break;
    
    case "content":
      setData(contact)
      break;
    default:setData(featuredPortfolio)
}
}, [selected])


  return (
    <div className='portfolio'id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList title={item.title} id={item.id} active={selected === item.id} setSelected={setSelected} />
      ))}
      </ul>
      <div className="container">
        {data.map((d) => (
             <div className="item">
          <img src={d.img} alt="" />
            <h3>{d.title }</h3>
        </div>
        ))}
     
       
      </div>
    </div>
  )
}

export default Portfolio
