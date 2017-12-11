import React, { Component } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import './App.css'






class Results extends Component {
    
    render() {
        return (
            <div>
                <div className='hangmanContainer'>


                    <div  className="hat">
                        <div className="hat__brim"></div>
                    </div>


                    <div  className='head'>
                        <div className="head__eye head__eye--left"></div>
                        <div className="head__eye head__eye--right"></div>    
                        <div className="head__nose"></div>
                    </div> 


                    <div  className="hat"></div>


                    <div   className='body--top'>
                        <div className="body__button body__button--top"></div>
                        <div className="body__button body__button--middle"></div>
                        <div className="body__button body__button--bottom"></div>
                    </div>


                    <div className="body--bottom">

                    </div> 
                    
                    <div  className='leftArm'></div>
                    <div  className='rightArm'></div>
                </div>
                

                
                

                <div className='gameContainer'>
                    <h1>Last Answer was :{this.props.correctanswer} </h1>
                    <h2>Last game result: {this.props.Result} </h2>
                    <h2>Your current win streak is: {this.props.totalw}</h2>
                </div>
            </div>
        )
    }
    }
    
    export default Results