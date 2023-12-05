import "./desk57.css";
import { NavHead } from "../assets/navHead/navHead";
import { AbtUs } from "./desk57Comps/abtUsGrp/abtUsGrp";
import { Para } from "./desk57Comps/abtUsPara/abtUsPara";
import { Footer57 } from "./desk57Comps/footer57/footer57";

export const Desk57 = () => {
    return(
        <div className="desk57-body">
            <div><NavHead/></div>
            <div><AbtUs/> </div>
            <div><Para/></div>
            <div className="footer57"><Footer57/></div>
        </div>
    )
}