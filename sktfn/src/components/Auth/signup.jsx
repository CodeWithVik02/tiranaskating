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
        <div className="login-card-social">
            <div>Other Sign-In Options</div>
            <div className="login-card-social-btns">
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="24" height="24" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                    </svg>
                </a>
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-google" width="24" height="24" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8" />
                    </svg>
                </a>
            </div>
        </div>
    </div>

</div>

)




}