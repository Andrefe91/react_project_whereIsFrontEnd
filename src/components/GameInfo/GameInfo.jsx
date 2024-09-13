//Modules
import React from "react";
import { PropTypes } from "prop-types";
//CSS
import "./gameInfo.css";

function GameInfo({imageDifficulty, time}) {
    return (
        <div className="card m-2 sticky-bottom border-primary border-3 shadow">
            <div className="card-body p-2 text-end">
                <p className="fs-2 m-0 text-capitalize lh-1">{imageDifficulty}</p>
                <div className="time">
                    <i className="bi bi-clock me-2" style={{fontSize: "1.6rem"}}></i>
                    <span className="fs-3">{time}</span>
                </div>
            </div>
        </div>
    )
}

GameInfo.propTypes = {
    imageDifficulty: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
}

export default GameInfo;
