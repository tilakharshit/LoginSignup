import React from 'react';
import './index.css';
import './Form.css'
import Phone from './Phoneno/Phone';
import 'react-phone-number-input/style.css';
import Button from '@material-ui/core/Button';


const Form = ()=>{
   
    return(
        <>
        <div className = "Main_form">
         <form className = 'form_details'>
             
             <h1>Fill the Form</h1>
             Name :<br/> <input type='text' id='form' placeholder='enter your name' id='form'></input>
             <br/>
             DOB :<br/> <input type="date" id='form'></input>
             <br/>
             Phone number :<br/> <span className="phoneNo"> <Phone/> </span>
             <br/>
    
             image:<br/> <input type='file' id='form'></input>
             <br/> 
             Address :<br/>
             <textarea id='address' type='text' row='80' cols='50'></textarea>
           <Button className="form_btn" onClick={()=> alert("you have successfully submitted the form")}>Submit</Button>            
         </form>
 
        </div>
        </>
    )


}


export default Form;
