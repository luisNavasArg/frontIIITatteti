import React from 'react'
import './App.css'
function Square(props){
  return(
    <button className='square' onClick={props.onClick}>
      {props.value}
    </button>
  )
}
class Board extends React.Component{
  renderSquare(i){
    return(
      <Square
        value={this.props.squares[i]}
        onClick={()=>this.props.onClick(i)}
      />
    )
  }
  render(){
    return(
      <div>
        <div className='board-row'>
         { this.renderSquare(0)}
         { this.renderSquare(1)}
         { this.renderSquare(2)}
        </div>
        <div className='board-row'>
         { this.renderSquare(3)}
         { this.renderSquare(4)}
         { this.renderSquare(5)}
        </div>
        <div className='board-row'>
         { this.renderSquare(6)}
         { this.renderSquare(7)}
         { this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

class Game extends React.Component {
  constructor(props){
    super(props)
    this.state={
      history:[
        {squares:Array(9).fill(null)}
      ],
      stepNumber:0,
      xIsNext:false
    }
  }
  handleClick(i){
    const history= this.state.history.slice(0,this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    console.log(this.state.stepNumber)
    squares[i]= this.state.xIsNext ? "X": "O";
    this.setState(
      {history:history.concat(
        [{squares:squares}]
      ),
      stepNumber:history.length,
      xIsNext : !this.state.xIsNext
    }
    )
  }

  render(){
    let history = this.state.history;
    let current = history[this.state.stepNumber]
    let status;
    status = "Next Juagdor" + (this.state.xIsNext ? "X":"O")
    
  return(
    <div className='game'>
      <div className='game-board'>
      <Board
        squares={current.squares}
        onClick={i=> this.handleClick(i)}
      />
      </div>
    </div>
    
  )
}
}

export default Game