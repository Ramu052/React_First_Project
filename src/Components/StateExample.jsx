import React, { Component, Fragment } from 'react'
class StateExample extends Component{
    state ={
        username:"manu",
        password:"123456",
    }
    render(){
        return(
        <Fragment>
            <h1>username: {this.state.username}</h1>
            <p>password: {this.state.password}</p>

        </Fragment>);
    }
}

export default StateExample;