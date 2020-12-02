import React from 'react'


class Header extends React.Component {

    render(){
       return (
        <React.Fragment>
        <nav class="navbar  navbar-dark bg-primary">
             <a class="navbar-brand">Simple News App</a>
            <form class="form-inline">
                   <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
        </React.Fragment>
       )
        
        }
}


export default Header;
