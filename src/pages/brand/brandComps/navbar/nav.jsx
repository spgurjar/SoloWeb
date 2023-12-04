import "./nav.css";
import logo from './logo.png';
import navBrimg from './navBr-img.png'
 
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

          <div className="nav-br-child">

            <div className="child-br-l">
                <div className="l-br-upr">
                    <span className="msg">Reach the Right Audience <span className="clr-msg"> Grow Your Business</span> Quickly.</span> 
                </div>
                <div className="l-br-lower">
                    <div><button className="join" id="join">Join Now !</button></div>
                </div>
            </div>

            <div className="child-br-r">
                <div><img className="nav-br-img" src={navBrimg} alt="" /> </div>
            </div>
          </div>
        </div>
    )
}