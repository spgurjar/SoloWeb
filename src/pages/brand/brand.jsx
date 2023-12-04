import "./brand.css";
import { Nav } from "./brandComps/navbar/nav";
import { About } from "./brandComps/about/about";
import { Work } from "./brandComps/work/works";
import { Help } from "../assets/help/help";
import { Footer } from "../assets/footer/footer";

export const Brand = () => {
    return(
        <div className="home-body">
            <div><Nav/> </div> 
            <div className="About"><About/></div> 
            <div><Work/></div>  
            <div className="Help"><Help/> </div>  
            <div className="footer"><Footer/></div>      
        </div>
    )
}