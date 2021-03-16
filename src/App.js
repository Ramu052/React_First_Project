import React, {Component, Fragment} from "react";
//import EmployeeComponent from './Components/EmployeeComponent';
//import HeaderComponent from './Components/HeaderComponent';
import NavbarComponent from "./Components/NavbarComponent";
//import faker from "faker/locale/en_IND";
import faker from "faker/locale/en_US"
import StudentComponent from "./Components/StudentComponent";



class App extends Component {
  state = { 
    student_details:[
      {
        std_id:"1",
        std_name:"Manu",
        std_photo:faker.random.image(),
        std_city:"Goa",
      },
      {
        std_id:"2",
        std_name:"Shanu",
        std_photo:faker.random.image(),
        std_city:"Mumbai",
      },
      {
        std_id:"3",
        std_name:"Anu",
        std_photo:faker.random.image(),
        std_city:"Punjab",
      },
    ],
   };
  render() { 
    return ( 
      <Fragment>
        <header>
          <NavbarComponent />
        </header>
          <main>
            <div className= "container my-2">
              <h1 className= "display-4 text-uppercase font-weight-bold text-success-">
                List of Students
              </h1>

              <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>Student Id</th>
                  <th>Student Nmae</th>
                  <th>Student Photo</th>
                  <th>Student City</th>
                </tr>
              </thead>
              <tbody>
               {
                 this.state.student_details.map(std => {
                  return <StudentComponent key={std.std_id} students = {std} />;
                })
               }
              </tbody>
              </table>

            </div>
          </main>
      </Fragment>
     );
  }
}
 
export default App ;




