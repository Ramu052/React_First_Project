import React, { Component, Fragment } from 'react'
class EmployeeComponent extends Component {
    state = {  
        emp_id:'TCSAP251',
        emp_name:'RamU',
        emp_salary:30000,
        emp_education:"B.Tech",
        emp_designation:'web developer',
        emp_city:'madya',
        emp_photo:'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60',
        //emp_photo:'https://images.unsplash.com/photo-1542300058-b94b8ab7411b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60',
    };
    render() { 
        return ( 
        <Fragment>
            <section>
                <article>
                    <img src={this.state.emp_photo}alt = {this.state.emp_name}/>
                    <h1>{this.state.emp_name}</h1>
                    <p>{this.state.emp_id}</p>
                    <p>{this.state.emp_salary}</p>
                    
                    <p>{this.state.emp_education}</p>
                    <p>{this.state.emp_designation}</p>
                </article>
            </section>

        </Fragment> );
    }
}
 
export default EmployeeComponent;