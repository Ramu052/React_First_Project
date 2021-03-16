import React,{Fragment} from "react";

const StudentComponent = props => {
  
    let { std_id, std_name, std_photo, std_city} = props.students;
    
    return (
       <Fragment>
           <tr>
               <td>{std_id} </td>
               <td>{std_name} </td>
               <td><img className= "img-circle" src={std_photo} alt={std_name}/>

               </td>
               <td>{std_city} </td>
           </tr>
       </Fragment>
    );
};

export default StudentComponent;
