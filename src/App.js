// functional component
import React, {Fragment} from 'react';
import EmployeeComponent from './Components/EmployeeComponent';

import HeaderComponent from './Components/HeaderComponent';


// class App extends Component{
//     render(){

//     }
// }

let App = () =>{
  
return (
        <Fragment> 
           <header>
               <HeaderComponent/>
           </header>
           <main>
             <EmployeeComponent/>
           </main>
        </Fragment>
    );
    };



export default App;