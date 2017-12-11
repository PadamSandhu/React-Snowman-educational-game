import React, { Component } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import './App.css'


class Snowman extends Component {

    render() {
        return (
            <div>
                <div className='hangmanContainer'>


                    <div hidden={this.props.nWrong>2} className="hat">
                        <div className="hat__brim"></div>
                    </div>


                    <div hidden={this.props.nWrong>3} className='head'>
                        <div className="head__eye head__eye--left"></div>
                        <div className="head__eye head__eye--right"></div>    
                        <div className="head__nose"></div>
                    </div> 


                    <div hidden={this.props.nWrong>2} className="hat"></div>


                    <div hidden={this.props.nWrong>4}  className='body--top'>
                        <div className="body__button body__button--top"></div>
                        <div className="body__button body__button--middle"></div>
                        <div className="body__button body__button--bottom"></div>
                    </div>


                    <div hidden={this.props.nWrong>5} className="body--bottom">

                    </div> 
                    
                    <div hidden={this.props.nWrong>0} className='leftArm'></div>
                    <div hidden={this.props.nWrong>1} className='rightArm'></div>
                </div>
                
                
                

                <div className='gameContainer'>
                    <h1 className={(this.props.inPut===""?('hidden'):("show"))}>
                        Currently Selected Guess is:<span className="answer"> {" "+this.props.inPut} </span>
                    </h1>

                    <h2 className={(this.props.catagoryclass===""?('hidden'):("show"))}>
                        Hint for the word : <span className="answer1"> {this.props.catagoryclass} </span>
                    </h2>

                    <h1>Your word is:<span className="answerM"> {this.props.gameState}</span></h1>
                    <h2 className={(this.props.correctanswer===""?('hidden'):("show"))}>
                        The last game answer was:<span className="answer2"> {" "+this.props.correctanswer} </span>
                        </h2>
                    <h2 className={(this.props.inPut===""?('hidden'):("show"))}>
                        Your current guesses are:<span className="answer3">{" "+this.props.pastGuesses} </span>
                    </h2>

                    <h1 className={(this.props.GameState===""?("hidden"):("show"))} >
                        Current Game State: 
                    <span className={(this.props.loss ?('loss'):(this.props.win?('win'):'gaaaameState')) } > {" "+this.props.GameState} 
                    </span>
                    </h1>

                    <button onClick={this.props.setUpGame} type="button" className="btn btn-primary btn-lg">Restart Game</button>
                </div>
            </div>
        )
    }
}

export default Snowman