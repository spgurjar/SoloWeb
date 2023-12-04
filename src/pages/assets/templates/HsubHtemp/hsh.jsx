import "./hsh.css";

export const Hsh = (props) => {
    return(
        <div className="hsh-body">
            <div className="hsh-head">{props.hshHead} </div>
            <div className="hsh-subhead">{props.hshSubHead} </div>
        </div>
    )
}