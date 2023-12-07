
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Container, Button } from "react-bootstrap";


function Agecalculator(){
  const [number, setNumber]= useState("");
  const [age, setAge]= useState("");
    const onChangeevent=(e)=>{
      setNumber(e.target.value);
    }
    
    const Age=()=>{
      var today=new Date();
      var birthdate = new Date(number);
      // var age = today.getFullYear()-birthdate.getFullYear();
      var year = today.getFullYear()-birthdate.getFullYear();
      var month = today.getMonth()-birthdate.getMonth();
      var date = today.getDate()-birthdate.getDate();
    
   
      // // setAge(`${year}year ${month}month ${date} `);
      // return(age);
      console.log(age)
        setAge(`${year}year ${month}month ${date} `);
    }
 
  
    return(
    <>
    <div>
        <Container>
    <h2 className="a1 blink"> Calculate Age from Date of Birth</h2> <br/> <br/>    
  
  <p className="a2"><h4><b>Enter Date of Birth:</b></h4><input type="date" value ={number} onChange={onChangeevent}></input> </p><br/> 
  <div className="text-center"><Button variant="success" type="submit" onClick={Age}> Calculate age </Button> </div><br/><br/> 
<p>{age}</p>
  </Container>
  </div>
    </>
   
);
}
export default Agecalculator;
