import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

const Register = function() {
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [isValidPass, setIsValidPass] = useState(false);
    const [isValidConfirmPass, setIsValidConfirmPass] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const history = useHistory();

    useEffect(() => {
        const trimmed = [...password];
        const specialChars = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        const isUpper = trimmed.some(letter => {return letter === letter.toUpperCase()});
        const isLower = trimmed.some(letter => {return letter === letter.toLowerCase()});
        const isNumber = trimmed.some(letter => {return !isNaN(letter)});

        //EMAIL VALIDATION
        if( email.length > 0 ){
            setIsValidEmail(true);
        }else{
            setIsValidEmail(false);
        }
        
        //PASSWORD VALIDATION
        if(password.length >= 8 && isUpper && isLower && isNumber && specialChars.test(password)){
            setIsValidPass(true);
        } else {
            setIsValidPass(false);
        }

        //CONFIRM PASSWORD VALIDATION
        if( confirmPassword === password ){
            setIsValidConfirmPass(true);
        }else{
            setIsValidConfirmPass(false);
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
                'email': email, 
                'password': password})
        })

        history.push('/');
    }

    return(
        <form onSubmit={addUser}>
            <input type='email' value={email} onChange={emailHandler}/>
            {isValidEmail ? <p>Email is Valid</p> : <p>Email is Invalid</p>}
            <input type='password' value={password} onChange={passwordHandler}/>
            {isValidPass ? <p>Password is Valid</p> : <p>Password is Invalid</p>}
            <input type='password' value={confirmPassword} onChange={confirmPasswordHandler}/>
            {isValidConfirmPass ? <p>Confirm password is Valid</p> : <p>Confirm password is Invalid</p>}
            
            <button>Add user</button>
        </form>
    )
}

export default Register;