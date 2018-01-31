import React from "react"

export default (props) => {

    const style = {
        border: "1px solid #ccc",
        width: "50%",
        margin: "10px auto",
    }

    return(
    <div style={style}>
        <p>User: {props.name}</p>
        <p>Any text 2</p>
    </div>
)}
