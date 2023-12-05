import "./abtUsGrp.css";
import abtUsPic from "./abtUs-pic.png";

export const AbtUs = () => {
    return(
        <div className="abtus-body">        
            <div class="group-box" id="147:160">
               <div class="abtUs-heading" id="147:161">About us</div>
               <div class="rectangle-blackbox" id="147:162"></div>
               <div class="rectangle-radialbox" id="147:164">
                  <div class="rec-rad1" id="147:165"></div>
                  <div class="rec-raad2" id="147:166"></div>
               </div>
               <img class="abtUs-pic" src={abtUsPic} id="147:167"/>
            </div>

        </div>
    )
}