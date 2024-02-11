import React , {useState , useEffect} from "react";
import '../../style/login.css'
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/loading";

export default function Login({setLoading}){
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const navigate = useNavigate();
    
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
          // User is already logged in, redirect to the home page
          
        }
      }, []);
      
      const login = () => {
       // setLoading(true)
        fetch('http://localhost:8080/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },   body: JSON.stringify({ email: loginEmail, password: loginPassword }),
        })
          .then(response => response.json())
          .then(data => {
            if (data.userId) {
              alert('Login successful! Redirecting...');
              localStorage.setItem('token', data.token);
              const userName = data.userName;
              console.log('Token received:', data.token);
              console.log(data.userId)
              console.log(userName)
              setLoading(false)
              
            } 
            
            
            else {
              // Failed login, show an error message
              alert(data.message)
              setLoading(true)
              navigate('/')
              
            }
          })
          .catch(error => {
            console.error('Error during login:', error);
            alert('An error occurred during login. Please try again.');
          });
      };
      
      const handleClick = () => {
      navigate('/signup')
      }
      
      
      //setTimeout(()=>{ setLoading(false) },3000);
      
      
      
return(

<div id="bdy">

<div className="login-card-container">
        <div className="login-card">
            <div className="login-card-logo">
                <img src={require('../../style/images/logo.png')} alt="logo" />
            </div>
            <div className="login-card-header">
                <h1>Sign In</h1>
                <div>Please login to use the platform</div>
            </div>
            <form className="login-card-form">
                <div className="form-item">
                    <span className="form-item-icon material-symbols-rounded">mail</span>
                    <input type="text" placeholder="Enter Email" id="emailForm" autoFocus required value={loginEmail}
            onChange={e => setLoginEmail(e.target.value)}/>
                </div>
                <div className="form-item">
                    <span className="form-item-icon material-symbols-rounded">lock</span>
                    <input type="password" placeholder="Enter Password" id="passwordForm" required  value={loginPassword}
            onChange={e => setLoginPassword(e.target.value)}/>
                </div>
                <div className="form-item-other">
                    <div className="checkbox">
                        <input type="checkbox" id="rememberMeCheckbox" checked={true} />
                        <label htmlFor="rememberMeCheckbox">Remember me</label>
                    </div>
                    <a href="#" >I forgot my password!</a>
                </div>
                <button type="submit" onClick={login}>Sign In</button>
            </form>
            <div className="login-card-footer">
                Don't have an account? <a href="#" onClick={handleClick}>Create a free account.</a>
            </div>
        </div>
        
    </div>

</div>

)




}