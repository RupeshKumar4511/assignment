import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const authResponse = JSON.parse(localStorage.getItem("user"));

  useEffect(()=>{
        if( !authResponse || !authResponse.username) { navigate('/login')}
        else{
          localStorage.setItem("name",authResponse.username)
          localStorage.setItem("email",authResponse.email)
        } 
    },[authResponse, navigate])

  return (
    children 
  )
}

export default ProtectedRoute
