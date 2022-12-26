import { useState } from "react";

const Login = function() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <div>
            <input type='email' value={email} onChange={(e) => {setEmail(e.target.value)}}/>
            <input type='password' value={password} onChange={(e) => {setEmail(e.target.value)}} required/>
        </div>
    )
}

export default Login;