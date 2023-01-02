import { useState, useEffect } from "react";

const Register = function() {
    const [isValid, setIsValid] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        const trimmed = [...password];
        const specialChars = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        const isUpper = trimmed.some(letter => {return letter === letter.toUpperCase()});
        const isLower = trimmed.some(letter => {return letter === letter.toLowerCase()});
        const isNumber = trimmed.some(letter => {return !isNaN(letter)});
        
        
        if(password.length >= 8 && isUpper && isLower && isNumber && specialChars.test(password) && email.length > 0 && password === confirmPassword){
            setIsValid(true);
        } else {
            setIsValid(false);
        }
        
    },[password, confirmPassword, email])


    const emailHandler = function(e){
        setEmail(e.target.value);
        console.log(JSON.stringify(email));
    }

    const passwordHandler = function(e){
        setPassword(e.target.value);
    }

    const confirmPasswordHandler = function(e){
        setConfirmPassword(e.target.value);
    }
    
    const addUser = (e) => {
        e.preventDefault();

        fetch('http://localhost:3500/users',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'id': Math.random(),
                'email': email, 
                'password': password})
        })
    }

    return(
        <form onSubmit={addUser}>
            <input type='email' value={email} onChange={emailHandler}/>
            <input type='password' value={password} onChange={passwordHandler}/>
            <input type='password' value={confirmPassword} onChange={confirmPasswordHandler}/>
            {isValid ? <p>Valid!</p> : <p>Invalid!</p>}
            <button>Add user</button>
        </form>
    )
}

export default Register;