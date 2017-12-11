import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Snowman from './Snowman'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Results from './results'
import Instruction from './instruction'




class App extends Component {
  constructor(){
    super();
    this.state = {
      greatlake: ["superior","huron","ontario","erie","michigan"],
      countries: ['usa','canada','uk','india','mexico','nigeria','spain','brazil','poland','france'],
      fruits:	['apple','mango','peach','respberry','plum','pear','cherry','mango','grape'],
      torontosub: ['bay','museum','union','king','queen','finch','kipling'],
      catagoryclass:'',
      textVal:'',
      nWrong: 0,
      answer: [],
      answercomb:'',
      correctanswer:'',
      inPut:'',
      pastGuesses: [],
      pastGames:[],
      gameState: false,
      win: false,
      loss: false,
      rightAns: null,
      result:'',
      winstq:0,
      totalw:0,
      totall:0,
      winpercent:0,
      lastvar:0


    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.getRandomWord= this.getRandomWord.bind(this);
    this.checkGameOver= this.checkGameOver.bind(this);
    this.setUpGame    = this.setUpGame.bind(this);
    this.checkfucntion= this.checkfucntion.bind(this);   
    this.printGameState=this.printGameState.bind(this);
    this.GameState=this.GameState.bind(this);
    
    
    
  }


  componentWillMount(){
    this.setUpGame()
    document.addEventListener('keypress',this.checkfucntion)
    
  }





  

  checkfucntion(event){
    this.setState({inPut:event.key})

    if(!this.checkGameOver()){
      this.handleSubmit();      
    }
    else{
      this.setState({
        correctanswer: this.state.answercomb,
        
      })
    }

  }

 
  
  handleSubmit(){
    let guess = this.state.inPut;
    let pastGuesses = this.state.pastGuesses;
    let answer = this.state.answer;
    let rightAns= this.state.rightAns;
    let nWrong = this.state.nWrong;

        if (pastGuesses.includes(guess)) {
              alert('You Already Guessed This Letter')
            } else {
              if (answer.includes(guess)) {
                for(let i =0;i<answer.length;i++){
                if(answer[i]=== guess){
                  rightAns += 1;
                }
                }
                pastGuesses.push(guess)
              } else {
                pastGuesses.push(guess)
                nWrong += 1;
              }
            }

            this.setState({rightAns:rightAns})
            this.setState({nWrong:nWrong})

            this.checkGameOver();
}

    // Get random world from the list

    getRandomWord(){
      let catagoryrand = Math.floor(Math.random()*4);
      let catagoryclass = [];
      if (catagoryrand===0){
        catagoryclass = this.state.greatlake;
        this.setState({catagoryclass:'Name of Great Lakes (Canada)'})
      }else if(catagoryrand===1){
        catagoryclass = this.state.countries;
        this.setState({catagoryclass:'Name of a Country'})        
      }else if(catagoryrand===2){
        catagoryclass = this.state.fruits;
        this.setState({catagoryclass:'Name of a Fruit'})        
      }else if(catagoryrand===3){
        catagoryclass = this.state.torontosub;
        this.setState({catagoryclass:'Toronto Subway Station'})        
      }
      const index = Math.floor(Math.random()*catagoryclass.length);
      return catagoryclass[index];
    }
  
    // Check game over !!

    checkGameOver(){
      if (this.state.nWrong===6){
        let a = this.state.totall
        this.setState({
            result:'loss',
            winstq:0,
            totall:(a + 1),
            gameState:false,
            loss:true,
            win:false,
            correctanswer:this.state.answercomb
          })
        return true
      }
      else if (this.state.answer.length===this.state.rightAns){
        let a = this.state.totall;
        let b = this.state.totalw;        
        this.setState({
          result:'won',
          totalw: (b +1),          
          totall:(a + 1),
          gameState:false,
          loss: false,
          win: true,
          answer:this.state.answercomb          

        })
        return true;
      } 
    
      else if(this.state.answer.length>this.state.rightAns){
        this.setState({
          gameState: true,
          loss: false,
          win: false
        })
        return false;
      }
    }


    setUpGame(){
      // choose a new word
      let ansR = this.getRandomWord();
    
      let ans = ansR.split('');
    
      this.setState({answer:ans,
      answercomb:ansR})
      // reset the total of wrong guesses
      this.setState({nWrong:0})
      this.setState({
        rightAns:0,
        gameState: false,
        win: false,
        loss: false,
        inPut:""
      })
    
      // empty our array of previously guessed letters
      this.setState({pastGuesses:[]})
      
    }

  

     printGameState(answer,pastGuesses){
    
      let str = "";
      
      // for each letter in the target word
      for(let i = 0; i < answer.length; i++){
        let found = false;
        // loop through the pastGuesses
        for(let j = 0; j < pastGuesses.length; j++){
          // and check each element of past guesses to see if it matches the
          if(answer[i] === pastGuesses[j]){
            found = true;
          }
        }
        if(found){
          str += answer[i];
          str += "\t";
        }
        else{
          str += "_\t";
        }
      }
      return str;
        
    }

      
    GameState(gameState,win,loss){
            
      let string = "";

      if (gameState){
        string = 'In Progress'
      }
      else if (loss){
        string = "Loss"
      }
      else if (win){
        string = "Win"
      }
      
      return string;

    }

  render() {
    // Start


    // Anytime there is a change in the state, these both function run.

    let gameStatee =  this.printGameState(this.state.answer,this.state.pastGuesses)
    let GameState =  this.GameState(this.state.gameState,this.state.win,this.state.loss)



    // End
    return (
      <div className="App">
        <div className="navBar">
          <h1>SNOWMAN</h1>
        </div>
      

        <Router>
          <div>
            <nav>

            <div>
            <Link to="/">Home</Link>
            </div>
            <div>
            <Link to="/instruction">Instruction</Link>
            </div>

            <div>
            <Link to="/results">Results</Link>
            </div>


            </nav>
            <Switch>
                <Route path='/results' render={(props) => (
                  <Results pastGuesses={this.state.pastGuesses} correctanswer ={this.state.correctanswer} Result= {this.state.result} winstq={this.state.winstq} totalw={this.state.totalw}  />
                    )}/>


                  <Route path='/' exact render={(props) => (
                  <Snowman GameState={GameState} gameState={gameStatee} nWrong={this.state.nWrong} catagoryclass={this.state.catagoryclass}
                  inPut={this.state.inPut} pastGuesses={this.state.pastGuesses} correctanswer= {this.state.correctanswer}  
                  GaameState ={this.state.gameState} win ={this.state.win} loss={this.state.loss} setUpGame={this.setUpGame}          />
                    )}/>
                  
                  <Route path='/instruction' render={(props) => (
                  <Instruction           />
                    )}/>



            </Switch>
          </div>
        </Router>
        
      </div>
    );
  }
}
export default App;
