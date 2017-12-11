import React, { Component } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import './App.css'






class Instruction extends Component {
    
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
                    <h1>Instructions</h1>


                    <h2> If you guess correct answer you win </h2>
                    <h2> If you guess wrong letter 6 times, you will loss this game</h2>

                    <h2>If you wanna play again click restart </h2>
                    <h1>Good Luck !! </h1>
                </div>
            </div>
        )
    }
    }
    
    export default Instruction 