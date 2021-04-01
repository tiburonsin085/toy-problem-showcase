import React, {Component} from 'react'

class Sum extends Component {
    constructor(){
        super()
        this.state = {
            number1: 0,
            number2: 1,
            sum: null
        } 
    }

    handle1 (e){
        this.setState({number1: parseFloat(e)})
    }

    handle2 (e){
        this.setState({number2: parseFloat(e)})
    }

    sumClick(x,y){
        this.setState({sum: x+y})
    }

    render(){

        return(
            <div className="puzzleBox sumPB" >
                <h4>Sum this you digital slave 'heart beak'</h4>
                <input className="inputLine" onChange = {(e) => this.handle1(e.target.value) }></input>
                <input className="inputLine" onChange= {(e) => this.handle2(e.target.value) } ></input>
                <button className = "confirmationButton" onClick = { ()=> this.sumClick(this.state.number1, this.state.number2) } >Press here bro</button>
                <span className="resultsBox" >This is the answer my lord: {this.state.sum}</span>
            </div>
        )
    }
}

export default Sum