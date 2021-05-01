 import React from 'react';
import Signup from './Signup';
import Form from './Form';
import Login from './Login';
import Navbarmenu from './Navbarmenu';
import {Route , Switch} from 'react-router-dom';


 const App = ()=>{
    
    return( <>
      <Navbarmenu/>
      <Switch>
         { <Route exact path='/' component={Signup}/> }
         { <Route exact  path='/Login' component={Login}/>}
         {<Route exact path='/Form' component={Form} />}
             
        </Switch>
      </>)
 }

 export default App;