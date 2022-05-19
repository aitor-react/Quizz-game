import React from "react"
import Answer from "./Answer"

export default function Question(props) {
             
    const answerElements = props.answers.map((answer, index) => {
        return (
            <Answer 
                key={index}
                validate={props.validate}
                answer={answer.answer}
                selected={!!answer.selected}
                correct={answer.correct}
                selectAnswer={() => props.selectAnswer(index)}
            />
        )
    })        
            
    return (
        <div className="question">
            <p>{props.question}</p>
            <div className="answers">
                {answerElements}
            </div>
            <hr />
        </div>
    )
}
