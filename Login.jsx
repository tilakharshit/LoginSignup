import React from 'react'
import './Login.css';
import './index.css';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import {useHistory} from 'react-router-dom';


const Login = () => {

    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const history = useHistory();

    return (
        <>
            <div className='login_form'>
                <form className='form'>
                    <h1>login</h1>
                    <input type='email'
                     placeholder='Enter your email'
                     value={email}
                      onChange = {(event)=> setEmail(event.target.value)} >
                     </input>

                    <input type='password'
                     placeholder='password'
                      value={pass} 
                      onChange = {(event) => setPass(event.target.value)}>
                      </input>
                    <Button 
                    onClick={()=> history.push('/Form')}
                     className='login_btn'>LOGIN</Button>

                </form>

            </div>
        </>
    )

}

export default Login;