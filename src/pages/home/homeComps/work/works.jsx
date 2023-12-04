import "./work.css";
import { Hsh } from "../../../assets/templates/HsubHtemp/hsh";
import wImg1 from "./w1.png";
import wImg2 from "./w2.png";
import wImg3 from "./w3.png";
import wImg4 from "./w4.png";

export const Work = () => {
    return(
        <div className="work-body">
            <div className="section">
                <div>
                    <Hsh hshHead = "We help brands" hshSubHead=" Solo help brands to find ideal creator for their brand, makes sure the job gets done and provided plenty of business." />
                </div>
                <div className="work-img">
                    <div><img className="wImg" src= {wImg1} alt="" /></div>
                    <div><img className="wImg" src= {wImg2} alt="" /></div>
                </div>
            </div>

            <div className="section">
                <div>
                    <Hsh hshHead = "We help creators" hshSubHead=" Solo help ensures that work is paid on time, brings the clients to creators and helps creators to run a business.." />
                </div>
                <div className="work-img">
                    <div><img className="wImg" src= {wImg3} alt="" /></div>
                    <div><img className="wImg" src= {wImg4} alt="" /></div>
                </div>
            </div>
        </div>
    )
}