import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import userData from "../services/userDataHandling";

import "./Login.css";

const Login = function() {
    const [users, setUsers] = useState({});
    const [isValid, setIsValid] = useState(false);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const history = useHistory();

    useEffect(() => {
        userData.getUsers().then(data => setUsers(data));
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
        
    },[password, email, users.length])

    const formHandler = (e) => {
        e.preventDefault();
        const isUser = users.some((user) => {return user.email === email && user.password === password})

        if(isUser && isValid){
            history.push('/products');
        }else{
            alert('There is no user. You need to register!');
        }
    }

    return(
        <div className="loginContainer">
        <div className="layer">
        <form className="loginForm" onSubmit={formHandler}>
                <h1>Login</h1>
                <input type='email' name='email' value={email} onChange={e => {setEmail(e.target.value)}} placeholder="Email..." required/>
                <input type='password' name='password' value={password} onChange={e => {setPassword(e.target.value)}} placeholder="Password..." required/>
                <button>LOG IN</button>
                <Link to='/register'>Register?</Link>
            </form>
        </div>
        </div>
    )
}

export default Login;