import React,{useState} from 'react';
import PhoneInput from 'react-phone-number-input';
import './Phone.css';

const Phone = () =>{
  
    const [value, setValue] = useState();
    return (
      <div className="phone">
      <PhoneInput
        placeholder="Enter phone number"
        value={value}
        onChange={setValue}/>
        </div>
    )

}


export default Phone;