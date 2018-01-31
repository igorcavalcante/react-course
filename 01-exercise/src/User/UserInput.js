import React from "react"
import "./UserInput.css"

export default (props) => (
    <input className="UserInput" type="text" onChange={props.change} value={props.name}/>
)