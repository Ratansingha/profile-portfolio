import React from 'react'
import "./testimonials.scss";


const Testimonials = () => {
  const data = [
    {
      id: 1,
      name: "Riva valerie",
      Title: "Senior Developer",
      img: "https://img.freepik.com/free-photo/woman-home_144627-46559.jpg",
      icon: "assets/twitter.png",
      desc:"lorem is a bad man who found a dolar system all over the world but we can't earn dolar now "
    },
    {
      id: 2,
      name: "Alex Kalinski",
      Title: "Co founder of this company",
      img: "https://media.istockphoto.com/id/93988608/photo/beautiful-girl.jpg?s=612x612&w=0&k=20&c=KL6_XNtYS6PSLGK5UpRV--NejObrRRDZuyHKFYYtsA4=",
      icon: "assets/youtube.png",
      desc: "lorem is a bad man who found a dolar system all over the world but we can't earn dolar now ",
      featured:true,
    },
    {
      id: 3,
      name: "Martin marmaid",
      Title: "Ceo of the RSH",
      img: "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      icon: "assets/linkedin.png",
      desc:"lorem is a bad man who found a dolar system all over the world but we can't earn dolar now "
    },
  ]
  return (
    <div className='testimonials' id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
           <div className={d.featured ? "card featured" : "card"}>
          <div className="top">
            <img src="assets/right arrow.png" className='left' alt="" />
            <img className='user' src={d.img} alt="" />
            <img className='right' src={d.icon} alt="" />
          </div>
          <div className="center">
           {d.desc} 
          </div>
          <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.Title }</h4>
          </div>
        </div>
        ))}
       
      </div>
    </div>
  )
}

export default Testimonials
