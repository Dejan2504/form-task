import { useState } from "react";

const Register = function() {
    const users = {email: '', password: ''};
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const emailHandler = function(e){
        setEmail(e.target.value)
        console.log(`email: ${e.target.value}`);
    }

    const passwordHandler = function(e){
        setPassword(e.target.value)
        console.log(`pass: ${e.target.value}`);
    }

    const confirmPasswordHandler = function(e){
        setConfirmPassword(e.target.value)
        console.log(`confirmPass: ${e.target.value}`);
    }
    
    const addUser = (e) => {
        e.preventDefault();

        
    }

    return(
        <form onSubmit={addUser}>
            <input type='email' value={email} onChange={emailHandler}/>
            <input type='password' value={password} onChange={passwordHandler}/>
            <input type='password' value={confirmPassword} onChange={confirmPasswordHandler}/>
            <button>Add user</button>
        </form>
    )
}

export default Register;