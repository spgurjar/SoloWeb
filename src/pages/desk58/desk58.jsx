import "./desk58.css";
import { NavHead } from "../assets/navHead/navHead";
import { Connect } from "./desk58Comps/connect/connect";
import { Footer57 } from "../desk57/desk57Comps/footer57/footer57";

export const Desk58 = () => {
    return(
        <div className="desk58-body">
            <div><NavHead/></div>
            <div><Connect/></div>
            <div className="footer57"><Footer57/></div>
        </div>
    )
}