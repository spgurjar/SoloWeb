import "./connect.css";
import { IoMailUnreadOutline } from "react-icons/io5";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
import connectPic from './cnct-pic.png';

export const Connect = () => {
    return(
        <div className="connect-body">

            <div className="connect-l">
                <div className="connect-l-upr">
                    <div className="l-u-head">Connect with us</div>
                    <div className="l-u-subhead">Connecting stories and sparking conversations. Reach out, let's create together! 🌐✉️ #GetInTouch</div>
                </div>
                <div className="connect-l-lower">
                    <div className="c-box">
                        <div className="connect-logo"><IoMailUnreadOutline/></div>
                        <div className="connect-text">info@solo.com</div>
                    </div>
                    <div className="c-box">
                        <div className="connect-logo"><IoIosPhonePortrait/></div>
                        <div className="connect-text">+91 90xxxxxxxx</div>
                    </div>
                    <div className="c-box">
                        <div className="connect-logo"><MdOutlineLocationOn/></div>
                        <div className="connect-text">No.7, WLDD Office , Basavanagudi, Bangalore - 60453</div>
                    </div>
                </div>
            </div>

            <div className="connect-r">
                <div className="rect-box"></div>
                <div className="circle-box">
                    <div className="circle1"></div>
                    <div className="circle2"></div>
                    <div className="circle3"></div>
                </div>
                <img className="connect-pic" src={connectPic} alt="" />
            </div>
        </div>
    )
}