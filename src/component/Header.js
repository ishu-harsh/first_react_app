import React from 'react'


class Header extends React.Component {
    // constructor(){
    //     super()

    // }

    handleChanges(event){
        this.props.userText(event.target.value)
    }

    render(){
       return (
        <React.Fragment>
        <nav class="navbar  navbar-dark bg-primary">
             <a class="navbar-brand">Simple News App</a>
            <form class="form-inline">
                   <input class="form-control mr-sm-2"  onChange={(e)=>{this.handleChanges(e)}}/>
            </form>
        </nav>
        </React.Fragment>
       )
        
        }
}


export default Header;
