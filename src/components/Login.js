import React, {useState, useEffect} from 'react';
import Request from '../helpers/Request';
import '../css/login.css'

const Login = ({users, auth, setAuth, currentUser, setCurrentUser}) => {


const [wrong, setWrong] = useState(null);
const [stateLogin, setStateLogin] = useState(
  {
      name: "",
      password: ""
  }
)




  const handleChange = function(event){
    let propertyName = event.target.name;
    let copiedLogin= {...stateLogin}
    copiedLogin[propertyName] = event.target.value;
    setStateLogin(copiedLogin)
  }

  const handleSubmit = function(event){
    event.preventDefault();
    if ( stateLogin.name === users[0].name && stateLogin.password ===  users[0].password){
        setAuth(true)
        setCurrentUser(users[0])
        
        
      }
      if ( stateLogin.name === users[1].name && stateLogin.password ===  users[1].password){
        setAuth(true)
        setCurrentUser(users[1])
        
        
        
      }
      if ( stateLogin.name === users[2].name && stateLogin.password ===  users[2].password){
        setAuth(true)
        setCurrentUser(users[2])
        
        
      }if ( stateLogin.name === users[3].name && stateLogin.password ===  users[3].password){
        setAuth(true)
        setCurrentUser(users[3])
        
        
      }
      if ( stateLogin.name === users[4].name && stateLogin.password ===  users[4].password){
        setAuth(true)
        setCurrentUser(users[4])
        
        
      }else {
        setWrong("Incorrect - Try again")
      }
    
    
  }
  return (
  
    <form className="login-form" onSubmit={handleSubmit}>
          <div>
          <label className="username-label">Username</label>
          <input className="username-box" type="text" placeholder="" name="name" onChange={handleChange} value={stateLogin.username} />
          </div>
          
        <br></br>
             <div>
  
             <label className="password-label">Password</label>
             <input className="password-box" type="password" placeholder="" name="password" onChange={handleChange} value={stateLogin.password}  />
           </div>
             <br></br>
            <div className="btn-div">
           <button className="login-btn" type="submit">Login</button>
           <div>
             <br></br>
           <label className="wrong">{wrong}</label>
           </div>
           
           </div>
             
                
             </form>
  )
  
  
}

export default Login;