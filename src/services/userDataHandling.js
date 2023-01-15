const getUsers = async function(){
    const res = await fetch('http://localhost:3500/users')
    
    if(!res.ok){
        console.log(`Error`);
    }

    const data = await res.json();

    return data;
}

const registerUser = async function(email, password){
    await fetch('http://localhost:3500/users',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'email': email, 
            'password': password})
    })

}

const userData = {getUsers, registerUser}

export default userData;