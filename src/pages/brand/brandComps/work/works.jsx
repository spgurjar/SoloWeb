import "./work.css";
import { Hsh } from "../../../assets/templates/HsubHtemp/hsh";
import BrWpic1 from "./BrWpic1.png";
import BrWpic2 from "./BrWpic2.png";

export const Work = () => {
    return(
        <div className="work-body">
            <div className="section">
                <div>
                    <Hsh hshHead = "Too many fake influencers?" hshSubHead=" Solo regularly checks each profile's engagement ratio, detects fake followers, ..., and blocks all fake influencers, also each influencer has list of previous clients and reviews." />
                </div>
                <div className="work-img">
                    <div><img className="wBrImg" src= {BrWpic1} alt="" /></div>
                </div>
            </div>

            <div className="section">
                <div>
                    <Hsh hshHead = "See real data!" hshSubHead=" Solo lets you see posts statistics, so no more screenshots and trust based business, make your ROI calculations based on true data." />
                </div>
                <div className="work-br-img">
                    <div><img className="wBrImg" src= {BrWpic2} alt="" /></div>
                </div>
            </div>
        </div>
    )
}