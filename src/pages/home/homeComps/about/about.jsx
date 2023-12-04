import React from 'react';
import "./about.css";
import { AbtTemp } from "../../../assets/templates/abtTemp/abtTemp";
import abt1 from "./abt1.png";
import abt2 from "./abt2.png";
import abt3 from "./abt3.png";
import abt4 from "./abt4.png";
import abt5 from "./abt5.png";

const imagePaths = [abt1, abt2, abt3, abt4, abt5];

export const About = () => {
    return (
        <div className="about-body">
            <div className="abt-upr">
                <AbtTemp
                    ahead1="Solo"
                    asubhead1=" The best place to learn about your audience, connect with brands and monetize your influence."
                    ahead2="End-to-End influencer marketing solution"
                    asubhead2="Solo provides plenty of features to help brands and creators, such as creator search, chat, job contracts, live tracking of statistics, job validation..."
                />
            </div>
            <div className="abt-lower">
                {imagePaths.map((path, index) => (
                    <div className="abt-img" key={index}>
                        <img className={`abt${index + 1}`} id={`abt${index + 1}`} src={path} alt={`abt${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}



// import "./about.css";
// import { AbtTemp } from "../templates/abtTemp/abtTemp";
// import abt1 from "./abt1.png";
// import abt2 from "./abt2.png";
// import abt3 from "./abt3.png";
// import abt4 from "./abt4.png";
// import abt5 from "./abt5.png";

// export const About = () => {
//     return(
//         <div className="about-body">
//             <div className="abt-upr"><AbtTemp
//                ahead1 = "Solo"
//                asubhead1 = " The best place to learn about your audience, connect with brands and monetize your influence."
//                ahead2 = "End-to-End influencer marketing solution"
//                asubhead2 = "Solo provides plenty of features to to help brands and creators, such as creator search, chat, job contracts, live tracking of statistics, job validation..."
//             /></div>
//             <div className="abt-lower">
//                 <div className="abt-img"><img className="abt1" id="abt1" src={abt1} /></div>
//                 <div className="abt-img"><img className="abt2" id="abt2" src={abt2} /></div>
//                 <div className="abt-img"><img className="abt3" id="abt3" src={abt3} /></div>
//                 <div className="abt-img"><img className="abt4" id="abt4" src={abt4} /></div>
//                 <div className="abt-img"><img className="abt5" id="abt5" src={abt5} /></div>
//             </div>
//         </div>
//     )
// }