import { useState } from "react";
import "./home.css";
import { Nav } from "./homeComps/navbar/nav";
import { About } from "./homeComps/about/about";
import { Work } from "./homeComps/work/works";
import { Help } from "../assets/help/help";
import { Footer } from "../assets/footer/footer";

export const Home = ({ onButtonClick }) => {
    const [selectedComponent, setSelectedComponent] = useState('home');
  
    const handleButtonClick = (component) => {
      setSelectedComponent(component);
      onButtonClick(component);
    };

    return(
        <div className="home-body">
            <div><Nav onButtonClick={handleButtonClick} /> </div> 
            <div className="About"><About/></div> 
            <div><Work/></div>  
            <div className="Help"><Help/> </div>  
            <div className="footer"><Footer/></div>      
        </div>
    )
}