// Creating the QuestionBox component
// This renders questions text and a set of button to let the user pick an answer

// The {useState} method allows to import states in a function component
import React, {useState} from 'react';

// Using a function component instead of a class component
// Function components do not provide a state mgmt. features
// This is ok in components that just need to display data or have simple interactions
// Creating a js function named QuestionBox which brings in 3 props using a single argument
const QuestionBox = ({question, options, selected}) => {
    // Setting initial value of answer variable to useState(options) from props
    const [answer, setAnswer] = useState(options);
    return (
        <div className="questionBox"> 
            <div className="question">{question}</div>
            {/* This render a series of buttons */}
            {/* Use map on answer variable to render a series of button */}
            {/* Using onClick event listener property to run a function on that event*/}
            {answer.map((text, index) => (
                <button key={index} className="answerBtn" onClick={() => {
                    // running the setAnswer method declared using the state hook and re-write the answer state array with a new array containing the chosen answer
                    setAnswer([text]);
                    selected(text);
                }}>  
                    {text}
                </button>
            ))}
        </div>
    );
};

export default QuestionBox;

// Should you need to incorporate state in a function component, there are hooks API