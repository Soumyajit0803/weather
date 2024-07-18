import React from "react";
import "./DateTime.css";

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = [
    "January",
    "Februrary",
    "March",
    "April",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const DateTime = ({version}) => {
    const date = new Date();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    const timeString = hours + ":" + (minutes < 10 ? "0" + minutes : minutes);

    const dayName = dayNames[date.getDay()];
    const exactDate = date.getDate();
    const month = monthNames[date.getMonth()];

    const daySuffix = (day) => {
        if (day > 3 && day < 21) return "th";
        let e = day % 10;
        return e == 1 ? "st" : e == 2 ? "nd" : e == 3 ? "rd" : "th";
    };

    const formattedDate = `${dayName}, ${exactDate}${daySuffix(exactDate)} ${month}`;

    return (
        <div className={"datetime " + version}>
            <div className="time">
                <span>{timeString}</span>
                <span style={{'font-size': "0.9rem", marginLeft : "0.5ch"}}>{ampm}</span>
            </div>
            <div className="dateText">{formattedDate}</div>
        </div>
    );
};

export default DateTime;
