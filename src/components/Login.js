import { useEffect, useState } from "react";

const Login = function() {
    const [users, setUsers] = useState({});
    const [isValid, setIsValid] = useState(false);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        fetch('http://localhost:3500/users').then(res => {
            if(res.ok){
                return res.json();
            } else {
                alert('error 404');
            }
        }).then(data => {
            setUsers(data);
            console.log(data);
        })

    },[])

    useEffect(() => {
        const trimmed = [...password];
        const specialChars = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        const isUpper = trimmed.some(letter => {return letter === letter.toUpperCase()});
        const isLower = trimmed.some(letter => {return letter === letter.toLowerCase()});
        const isNumber = trimmed.some(letter => {return !isNaN(letter)});
        
        
        if(password.length >= 8 && isUpper && isLower && isNumber && specialChars.test(password) && users.length > 0 && email.length > 0){
            setIsValid(true);
        } else {
            setIsValid(false);
        }
        
    },[password, email])

    const emailHandler = function(e){
        setEmail(e.target.value);
    }

    const passwordHandler = function(e){
        setPassword(e.target.value);
        
    }

    return(
        <form>
            <input type='email' name='email' value={email} onChange={emailHandler} required/>
            <input type='password' name='password' value={password} onChange={passwordHandler} required/>
            <button>Log in</button>
            {isValid ? <p>You are good to go</p> : <p>Error my man</p>}
        </form>
    )
}

export default Login;