import { useState } from "react";

const Register = function() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    return(
        <div>
            <input type='email' value={email} onChange={(e) => {setEmail(e.target.value)}}/>
            <input type='password' value={password} onChange={(e) => {setEmail(e.target.value)}}/>
            <input type='password' value={confirmPassword} onChange={(e) => {setEmail(e.target.value)}}/>
        </div>
    )
}

export default Register;