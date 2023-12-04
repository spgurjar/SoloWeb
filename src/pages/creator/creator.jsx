import "./creator.css";
import { Nav } from "./creatorComps/navbar/nav";
import { About } from "./creatorComps/about/about";
import { Work } from "./creatorComps/work/works";
import { Help } from "../assets/help/help";
import { Footer } from "../assets/footer/footer";

export const Creator = () => {
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