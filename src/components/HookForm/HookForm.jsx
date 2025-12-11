import React from 'react';
import useInputField from '../../hooks/useinputField';

const HookForm = () => {
 
 
 const [name, nameOnChange] = useInputField('');
 const [email, emailOnChange] = useInputField('');
 const [password, passwordOnChange] = useInputField('');
    const handleSubmit = e=>{
    e.preventDefault();
    console.log("submit", name, email, password)
  }
  
    return (
        <div>
         <form onSubmit={handleSubmit}>
            <input defaultValue={name} type="text" onChange={nameOnChange}/>
            <br />
            <input type="email" onChange={emailOnChange} name="" id="" />
            <br />
            <input type="password" name=""onchange={passwordOnChange} />
            <br />
            <input type="submit" value="Submit" />
            </form>   
        </div>
    );
};

export default HookForm;