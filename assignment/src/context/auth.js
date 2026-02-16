export const UserSignUp = async({username,email,password})=>{
   const response = await fetch('https://squid-backend.onrender.com/api/v1/signup',
    {
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({username,email,password})
    });
    
    const data = await response.json();
    return data;

}

export const UserLogin = async({username,password})=>{
   const response = await fetch('https://squid-backend.onrender.com/api/v1/signin',
    {
        method:"POST",
        headers:{'Content-Type':'application/json'},
        credentials:'include',
        body:JSON.stringify({username,password})
    });
    
    const data = await response.json();
    return data;

}


export const signOut = async()=>{
   const response = await fetch('https://squid-backend.onrender.com/api/v1/sign-out',
    {
        method:"POST",
        headers:{'Content-Type':'application/json'},
        credentials:'include',
    });
    
    const data = await response.json();
    return data;

}
