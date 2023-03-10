import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import userData from "../services/userDataHandling";

import "./Register.css";

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
    }

    const passwordHandler = function(e){
        setPassword(e.target.value);
    }

    const confirmPasswordHandler = function(e){
        setConfirmPassword(e.target.value);
    }
    
    const addUser = (e) => {
        e.preventDefault();

        if(isValidEmail && isValidPass && isValidConfirmPass){

            userData.registerUser(email, password)
    
            history.push('/');
        }else {
            if(isValidEmail === false){
                alert('Email is not correct');
            }
            if(isValidPass === false){
                alert('Password is weak! Needs: 1 uppercase letter, 1 lowercase letter, 1 number, 1 special character and needs to be 8 characters long.')
            }
            if(isValidConfirmPass === false){
                alert('Passwords do not match');
            }
        }

    }

    return(
        <div className="registerContainer">
        <div className="layer">
        <form className="registerForm" onSubmit={addUser}>
        <h1>REGISTER</h1>
            <input type='email' value={email} onChange={emailHandler} placeholder="Email..." required/>
            <input type='password' value={password} onChange={passwordHandler} placeholder="Password..." required/>
            <input type='password' value={confirmPassword} onChange={confirmPasswordHandler} placeholder="Confirm Password..." required/>
            <button>ADD USER</button>
        </form>
        </div>
        </div>
    )
}

export default Register;