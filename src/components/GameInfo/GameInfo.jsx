//Modules
import React from "react";
import { PropTypes } from "prop-types";
import date from 'date-and-time'
//CSS
import "./gameInfo.css";

function GameInfo({imageDifficulty, time}) {
    let formatedTime = date.format(new Date(time*1000), 'mm:ss');
    return (
        <div className="card m-2 sticky-bottom border-primary border-3 shadow">
            <div className="card-body p-2 text-end">
                <p className="fs-2 m-0 text-capitalize lh-1">{imageDifficulty}</p>
                <div className="time text-start">
                    <i className="bi bi-clock me-2 clock" style={{fontSize: "1.6rem"}}></i>
                    <span className="fs-3">{formatedTime}</span>
                </div>
            </div>
        </div>
    )
}

GameInfo.propTypes = {
    imageDifficulty: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
};

export default GameInfo;
