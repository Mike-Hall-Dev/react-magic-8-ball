import React, { useState } from "react";
import "./EightBall.css";

const EightBall = ({ answers }) => {
    const genRandom = (arr) => Math.floor(Math.random() * arr.length);
    const updateState = () => {
        const index = genRandom(answers);
        const { msg, color } = answers[index];
        setMsg(msg);
        setColor(color);
    }
    const [msg, setMsg] = useState("Think of a Question");
    const [color, setColor] = useState("black")
    return (
        <div className="EightBall" onClick={updateState} style={{ backgroundColor: color }}>
            <b>{msg}</b>
        </div>
    )
}

export default EightBall