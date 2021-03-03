import React, {Component} from 'react'

class Palindrome extends Component {
    constructor(){
        super()
        this.state = {
            userInput : '',
            value : false
        }
    }
    
    handleChange (value){
        this.setState({userInput : value})
    }

    checkPalindrome(){
        let userInputVar = this.state.userInput
        let userInputArr = userInputVar.split('')
        let arrayOfValues = []
        let currentValue = false
        
        for(let i = 0 ; i < userInputArr.length ; i++){
            
            if(userInputArr[i] === userInputArr[userInputArr.length - (1+i)]){
            arrayOfValues.push(1)
          
            }
            else{
              arrayOfValues.push(0)
            }     
                      
          }

        if (arrayOfValues.includes(0)){
            currentValue = false
        }
        else{
            currentValue = true
        }

        this.setState({ value : currentValue})
    }

    
    render(){
        return(
            <section className="puzzleBox filterObjectPB">
               <p>Is It a Pilindrome ????? = O hoooooo woooow </p>
               <input  className = "inputLine" onChange = {(e) => this.handleChange(e.target.value)}/>
               <button className="confirmationButton" onClick = {()=>this.checkPalindrome(this.state.userInput)} > Palindromator  </button>
               <span className="resultsBox filterObjectRB">Filter: {JSON.stringify(this.state.value)} </span>
           </section>
        )
    }
}

export default Palindrome