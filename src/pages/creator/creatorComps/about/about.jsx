import React from 'react';
import "./about.css";
import { AbtTemp } from "../../../assets/templates/abtTemp/abtTemp";
import img1 from "./cr-abt.png";


export const About = () => {
    return (
        <div className="about-body">
            <div className="abt-upr">
                <AbtTemp
                    ahead1="Solo"
                    asubhead1="The best place to start through Influencer marketing."
                    ahead2="Find influencers"
                    asubhead2="Easily find perfect influencer for your brand by by searching over thousands influencers with various different filters (categories, engagement ratio, price, number of followers...)"
                />
            </div>
            <div className="abt-lower-br">
                <div><img className='img' src={img1} alt='' /></div>              
            </div>
        </div>
    );
}

