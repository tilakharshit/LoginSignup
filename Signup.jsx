import React, { useState} from 'react';
import './Signup.css';
import './index.css';
import './Login'
// import Login from './Login';
import {NavLink ,useHistory, useLocation} from 'react-router-dom'; 
import { Link } from 'react-router-dom';

 const Signup = ()=>{
     const[name, setName] = useState();
     const[email, setEmail] = useState();
     const[pass, setPass] = useState();
     const history = useHistory();
     const location = useLocation();

     console.log(history);
     console.log(location);
    
   

    return(
        <>
         <div className = "signup">
             <form className="form_signup">
             <h1>Sign up</h1>

             <input type="name"
              placeholder="enter your name" value={name}
              id='signup'
             onChange={(e) =>setName(e.target.value) } >
             </input>

             <input type="email" placeholder="enter your email"
              value={email}
              id='signup'
             onChange={(e)=> setEmail(e.target.value)}>
             </input>

             <input type="password" placeholder="password"
              value={pass}
              id='signup'
             onChange={(e)=>setPass(e.target.value)}>
             </input>

             <button className='btn'
             onClick={()=>history.push('/Login')}
             >SIGN UP</button>

             <p>  Aleady have an account? </p> <br/>

             {location.pathname === `/` ? (    
            <Link onClick={()=> history.push('/Login')}>
           <span style={{backgroundColor:'#fff'}}>login here</span>
            </Link>) : null }
             
             </form>
         </div> 
         
        </>
    )

 }

 export default Signup;


