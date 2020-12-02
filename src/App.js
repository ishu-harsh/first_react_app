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
  // https://newsapi.org/v2/top-headlines?country=us&apiKey=d5f9ebb18b36426884821125240d993b API for news
  


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
