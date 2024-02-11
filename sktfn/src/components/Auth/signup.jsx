import React , {useState , useEffect} from "react";
import '../../style/login.css'
import { useNavigate } from "react-router-dom";

export default function SignUp({setLoading}){
    const [signupName, setSignupName] = useState('');
    const [signupEmail, setSignupEmail] = useState('');
    const [signupPassword, setSignupPassword] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
          // User is already logged in, redirect to the home page
          
        }
      }, []);
      const signup =  () => {
        setLoading(true)
        fetch('http://localhost:8080/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
          body: JSON.stringify({ name: signupName, email: signupEmail, password: signupPassword }),
        })
          .then(response => response.json())
          .then(data => {
            if (data.userId) {
              
              alert('Signup successful! Redirecting...');
              const userName = data.userName;
               localStorage.setItem('token', data.token);
               localStorage.setItem('name' , data.userName)
              console.log(userName)
               console.log('User ID after signup:', data.userId);
          
          console.log('Token received:', data.token);
          setLoading(true)
           
            } else {
             setLoading(true)
              alert(data.message);
            }
          })
          .catch(error => {
            console.error('Error during signup:', error);
            alert('An error occurred during signup. Please try again.');
          });
      };
     setTimeout(function(){ setLoading(false) },3000);

return(

<div id="bdy">

<div className="login-card-container">
        <div className="login-card">
            <div className="login-card-logo">
            <img src={require('../../style/images/logo.png')} alt="logo" />
            </div>
            <div className="login-card-header">
                <h1>Sign Up</h1>
                <div>Please login to use the platform</div>
            </div>
            <form className="login-card-form">
            <div className="form-item">
                <span className=" form-item-icon material-symbols-outlined">
             person</span>
                    <input type="text" placeholder="Enter username" id="emailForm" autoFocus required value={signupName}
            onChange={e => setSignupName(e.target.value)}/>
                </div>
                <div className="form-item">
                    <span className="form-item-icon material-symbols-rounded">mail</span>
                    <input type="text" placeholder="Enter Email" id="emailForm" autoFocus required   value={signupEmail}
            onChange={e => setSignupEmail(e.target.value)} />
                </div>
                <div className="form-item">
                    <span className="form-item-icon material-symbols-rounded">lock</span>
                    <input type="password" placeholder="Enter Password" id="passwordForm" required value={signupPassword}
            onChange={e => setSignupPassword(e.target.value)}/>
                </div>
                <div className="form-item-other">
                    <div className="checkbox">
                        <input type="checkbox" id="rememberMeCheckbox" checked={true} />
                        <label htmlFor="rememberMeCheckbox">Remember me</label>
                    </div>
                   
                </div>
                <button type="button" onClick={signup}>Sign Up</button>
            </form>
            
        </div>
        
    </div>

</div>

)




}