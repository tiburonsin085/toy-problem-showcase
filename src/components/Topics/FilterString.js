import React, {Component} from 'react'

class FilterString extends Component {
    constructor(){
        super()
        this.state = {
            names : ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
            userInput: '',
            filterNames:[]

        }
    }

    handleChange(value){
        this.setState({userInput: value})
    }

    filterStrings(){
        let excludingLetters = this.state.userInput.toLowerCase()
        let oldArr = this.state.names
        let filterNamesArr = []
        for(let i =0 ; i < oldArr.length; i++){
            if (oldArr[i].toLowerCase().includes(excludingLetters)){
                filterNamesArr.push(oldArr[i])
            }
        }
        this.setState({filterNames: filterNamesArr})
    }


    render(){
        return(
           <section className="puzzleBox filterObjectPB">
               <p>Filter String</p>
               <span className="resultsBox filterObjectRB">names: {JSON.stringify(this.state.names,null,10)}</span>
               <input  className = "inputLine" onChange = {(e) => this.handleChange(e.target.value)}/>
               <button className="confirmationButton" onClick = {() => this.filterStrings(this.state.userInput)}>Filter the string </button>
               <span className="resultsBox filterObjectRB">Filter {JSON.stringify(this.state.filterNames,null,10)}</span>
           </section>
        )
    }
}

export default FilterString