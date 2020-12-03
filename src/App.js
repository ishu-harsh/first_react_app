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
      news : newsData,
     }
  }
  // https://newsapi.org/v2/top-headlines?country=us&apiKey=d5f9ebb18b36426884821125240d993b API for news
  
  searchFeature(userInput){
    //  const output = this.state.news.map((data)=>{
    //    return data.title.indexOf(userInput)>-1
    //  })
     const Output = this.state.news.articles.filter((data)=>{
      console.log(data )

      return data.title.indexOf(userInput)>-1
    })
     this.setState({news:Output})
  }

  render(){
      // console.log(this.state.news)
    return(
      <React.Fragment>
        <Header userText={(data)=>{this.searchFeature(data)}}/> 
        <Newsdisplay newsData={this.state.news}/>
      </React.Fragment>
    )
  }
}






export default App;
