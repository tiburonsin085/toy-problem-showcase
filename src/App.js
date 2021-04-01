import React, { Component } from 'react';
import TopicBrowser from './components/TopicBrowser/TopicBrowser'
import FilterObject from './components/Topics/FilterObject'
import FilterString from './components/Topics/FilterString'

class App extends Component {
  render() {
    return(
      <section>
        <TopicBrowser/>
       
      </section>
      
    )
  }
}

export default App;
