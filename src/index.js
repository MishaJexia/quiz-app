import React, {Component} from 'react';
import ReactDOM from "react-dom";
import "./assets/style.css";

import quizService from "./quizService";
import QuestionBox from "./components/QuestionBox";
import Result from "./components/Result";

// Creating root component, the class QuizBee
class QuizBee extends Component {
    // Instantiate local state for the quizService component in the questionBank array
    // This will store the questions once they are pulled in from the API
    state = {
        questionBank: [],
        score: 0,
        responses: 0
    };

    // This function invokes the quizService API
    // and fill the questionBank array with the results
    getQuestions = () => {
        quizService().then(question => {
            // Update the state variable
            this.setState({
                questionBank: question
            });
        });
    };


    computeAnswer = (answer, correctAnswer) => {
        if(answer === correctAnswer){
            this.setState({
                score: this.state.score + 1
            });
        }
        this.setState({
            responses: this.state.responses < 5 ? this.state.responses + 1 : 5
        })
    };
    playAgain = () => {
        this.getQuestions();
        this.setState({
            score: 0,
            responses: 0
        });
    };
    
    // Brings a set of questions from the API.
    // This will populate the state variable with data
    componentDidMount(){
        this.getQuestions();
    }

    // Creating render method that returns the JSX template that will render on the page
    render(){
        return (
            // className in JSX is like class in HTML
            <div className="container">
                <div className='title'> QuizBee </div>
                {/* Check whether the questionBank array has data to render */}
                {this.state.questionBank.length > 0 && 
                this.state.responses < 5 && 
                this.state.questionBank.map(
                    ({question, answers, correct, questionId}) => ( // render instances of the QuestionBox component, passing two props: question and options
                    <QuestionBox // question props dynamiccaly bound to question text, options props carry an array of answers to render
                    question={question} 
                    options={answers} 
                    key={questionId}
                    // selected prop from QuestionBoc function run a function that gets user response and access the correct answer from API
                    selected={answer => this.computeAnswer(answer, correct)}
                    />  
                    )
                )}
                {/* Render an istance of the Result component, pass the score and the refererence to a function called playAgain */}
                {this.state.responses === 5 ? (<Result score={this.state.score} playAgain={this.playAgain}/>) : null}
            </div>
        );
    }
}

// Invoke render method from ReactDOM library
ReactDOM.render(
    <QuizBee />, // Passing the QuizBee component as first argument
    // Selector to an element in the HTML (inside public folder) file to render the component into.
    // index.html contains a div with id="root" and this is where QuizBee app will be mounted into.
    document.getElementById("root") 
)