import "./navHead.css";
import logo from './logo.png';
 
export const NavHead = () => {
    return (
        <div className="nav-body">
          <div className="header-body">
             <img className="logoImg" src = {logo} alt ="" />
             <div className="nav-items">
                <span className="nav-item">Search</span>
                <span className="nav-item">About Us</span>
                <span className="nav-item">Sign up</span>
                <span className="nav-item">Log in</span>
             </div>  
          </div>
        </div>
    )
}