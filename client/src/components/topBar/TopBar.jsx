import "./topBar.scss"
import { Mail, Person }from "@mui/icons-material"

const TopBar = ({openMenu,setOpenMenu}) => {
  return (
    <div className={'topBar ' +(openMenu && "active")}>
      <div className="wrapper">
            <div className="left">
          <a className='logo' href="#intro">Ratan.</a>
          <div className="itemContainer">
            <Person className='icon'/>
            <span>+88 017 23763990</span>
          </div>
          <div className="itemContainer">
            <Mail className='icon'/>
            <span> ratansingha@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setOpenMenu(!openMenu)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
            
          </div>
             </div>
  </div>
    </div>
  )
}

export default TopBar
