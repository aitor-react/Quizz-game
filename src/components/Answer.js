import React from "react"

export default function Answer(props) {
    let statusClass = props.selected ? "answer--checked" : ""
    
    if (props.validate) {
        if (props.selected) {
            if (props.correct) {
                statusClass = "answer--correct"
            } else {
                statusClass = "answer--wrong"
            }
        } else {
            if (props.correct) {
                statusClass = "answer--correct"
            } else {                
                statusClass = "answer--after-check"
            }
        }
    }
    
    return (
        <span 
            className={`answer ${statusClass}`} 
            onClick={props.selectAnswer}           
        >
            {props.answer}
        </span>
    )
}