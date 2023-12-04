import "./nav.css";
import logo from './logo.png';
import navCrimg from './navCr-img.png'
 
export const Nav = () => {
    return (
        <div className="nav-body">

          <div className="header-body">
             <div><img className="logoImg" src = {logo} alt ="" /></div>
             <div className="nav-items">
                <span className="nav-item">Search</span>
                <span className="nav-item">About Us</span>
                <span className="nav-item">Sign up</span>
                <span className="nav-item">Log in</span>
             </div>  
          </div>

          <div className="nav-cr-child">

            <div className="child-cr-l">
                <div className="l-cr-upr">
                    <span className="msg"><span className="clr-msg">Monetize your influence</span> Connect with brands and monetize your influence.</span> 
                </div>
                <div className="l-cr-lower">
                    <div><button className="app-btn" id="app-btn">App Coming soon</button></div>
                </div>
            </div>

            <div className="child-cr-r">
                <div><img className="nav-cr-img" src={navCrimg} alt="" /> </div>
            </div>
          </div>
        </div>
    )
}