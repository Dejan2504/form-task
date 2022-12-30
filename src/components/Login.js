import { useEffect, useState } from "react";

const Login = function() {
    const [isValid, setIsValid] = useState(false);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        const trimmed = [...password];
        const specialChars = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        const isUpper = trimmed.some(letter => {return letter === letter.toUpperCase()});
        const isLower = trimmed.some(letter => {return letter === letter.toLowerCase()});
        const isNumber = trimmed.some(letter => {return !isNaN(letter)});
        
        
        if(password.length >= 8 && isUpper && isLower && isNumber && specialChars.test(password)){
            setIsValid(true);
        }
        
    },[password])

    const emailHandler = function(e){
        setEmail(e.target.value);
        console.log(e.target.value.length);
    }

    const passwordHandler = function(e){
        setPassword(e.target.value);
        
    }

    return(
        <form>
            <input type='email' name='email' value={email} onChange={emailHandler} required/>
            <input type='password' name='password' value={password} onChange={passwordHandler} required/>
            {isValid ? <p>You are good to go</p> : <p>Error my man</p>}
        </form>
    )
}

export default Login;