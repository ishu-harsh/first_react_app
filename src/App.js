import './App.css';
import React from 'react'
// import Header 
import Header from './component/Header' 

// data import
import newsData from './data/db.json'

// News Display Component
import Newsdisplay from './component/Newsdisplay'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      news : newsData   
     }
  }

  


  render(){
      console.log(this.state.news)
    return(
      <React.Fragment>
        <Header/> 
        <Newsdisplay newsData={this.state.news}/>
      </React.Fragment>
    )
  }
}






export default App;
