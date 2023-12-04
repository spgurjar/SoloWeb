import "./abtTemp.css";

export const AbtTemp = (props) => {
    return(
        <div className="atemp-body">
            <div className="a-head1"><span>{props.ahead1}</span> </div>
            <div className="a-subhead"><span>{props.asubhead1} </span> </div>
            <div className="a-head2"><span>{props.ahead2}</span></div>
            <div className="a-subhead"><span>{props.asubhead2} </span> </div>
        </div>
    )
}