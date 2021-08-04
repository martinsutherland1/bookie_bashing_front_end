import React, {useEffect, useState} from 'react';
import Request from '../helpers/Request';
import BetList from '../components/BetList';
import Leaderboard from '../components/Leaderboard';
import Leaderboard2 from '../components/LeaderBoard2';
import NewUser from '../components/NewUser';
import Leaderboard3 from '../components/LeaderBoard3';
import Leaderboard4 from '../components/LeaderBoard4';
import Login from '../components/Login';

const MainContainer = () => {
    
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState();
    const [auth, setAuth] = useState(false);
    const [selectValue, setSelectValue] = useState();
    const [updateUser, setUpdateUser] = useState();
    

    const handleChange = (e) => {
      setAuth(true)
      setSelectValue(e.target.value)
    }
    console.log(`selectValue`, selectValue)

    const handLogOut = (e) => {
      setAuth(false)
    }

    const requestAll = function(){
        const request = new Request();
        const usersPromise = request.get('/api/users')
       

        
      
        Promise.all([usersPromise])
        .then((data) => {
            setUsers(data[0]);
            
            
        })
      }
      
      useEffect(()=>{
        requestAll()
      }, [])

      

      const handleDelete = function(id){
        const request = new Request();
        const url = "/api/users/" + id
        request.delete(url)
        .then(() => window.location = "/users")
      }
      
      const handlePost = function(user){
        const request = new Request();
         request.post("/api/users", user)
        .then(() => window.location = '/')
      }

      const handleUpdate = function(user){
        const request = new Request();
        request.patch('/api/users/' + user.id, user)
        .then(() => window.location = '/')
      }

      if (selectValue === "winners" && auth === true && currentUser.admin === true){
        return(
  
          <div>
  <h4>Hello, {currentUser.name}<button onClick={handLogOut}>Log out</button></h4>
              <label for="cars">Leader Boards:</label>
  
  <select name="tables" onChange={handleChange} value={selectValue}>
              <option value="" >Select Leader Board</option>
              <option value="winners">Winners</option>
              <option value="losers">Losers</option>
              <option value="form">Form</option>
              <option value="streak">Best Streak</option>
  </select>
            <Leaderboard users={users} />
            
              <BetList setUpdateUser={setUpdateUser} updateUser={updateUser} currentUser={currentUser} users={users} handleUpdate={handleUpdate} handlePost={handlePost}/>
              
              {/* <NewUser handlePost={handlePost}/> */}
          </div>
        )
       }
       if (selectValue === "losers" && auth === true && currentUser.admin === true){
        return(
  
          <div>
  <h4>Hello, {currentUser.name}<button onClick={handLogOut}>Log out</button></h4>
              <label for="cars">Leader Boards:</label>
  
  <select name="tables" onChange={handleChange} value={selectValue}>
              <option value="" >Select Leader Board</option>
              <option value="winners">Winners</option>
              <option value="losers">Losers</option>
              <option value="form">Form</option>
              <option value="streak">Best Streak</option>
  </select>
            <Leaderboard2 users={users} />
            
              <BetList  setUpdateUser={setUpdateUser} updateUser={updateUser} currentUser={currentUser} users={users} handleUpdate={handleUpdate} handlePost={handlePost}/>
              
              {/* <NewUser handlePost={handlePost}/> */}
          </div>
        )
       }
  
       if (selectValue === "form" && auth === true && currentUser.admin === true){
        return(
  
          <div>
 <h4>Hello, {currentUser.name}<button onClick={handLogOut}>Log out</button></h4>
              <label for="cars">Leader Boards:</label>
  
  <select name="tables" onChange={handleChange} value={selectValue}>
              <option value="" >Select Leader Board</option>
              <option value="winners">Winners</option>
              <option value="losers">Losers</option>
              <option value="form">Form</option>
              <option value="streak">Best Streak</option>
  </select>
            <Leaderboard3 users={users} />
            
              <BetList setUpdateUser={setUpdateUser} updateUser={updateUser} currentUser={currentUser} users={users} handleUpdate={handleUpdate} handlePost={handlePost}/>
              
              {/* <NewUser handlePost={handlePost}/> */}
          </div>
        )
       }
  
       if (selectValue === "streak" && auth === true && currentUser.admin === true){
        return(
  
          <div>
  <h4>Hello, {currentUser.name}<button onClick={handLogOut}>Log out</button></h4>
              <label for="cars">Leader Boards:</label>
  
  <select name="tables" onChange={handleChange} value={selectValue}>
              <option value="" >Select Leader Board</option>
              <option value="winners">Winners</option>
              <option value="losers">Losers</option>
              <option value="form">Form</option>
              <option value="streak">Best Streak</option>
  </select>
            <Leaderboard4 users={users} />
            
              <BetList  setUpdateUser={setUpdateUser} updateUser={updateUser} currentUser={currentUser} users={users} handleUpdate={handleUpdate} handlePost={handlePost}/>
              
              {/* <NewUser handlePost={handlePost}/> */}
          </div>
        )
       }

       if (selectValue === "winners" && auth === true && currentUser.admin === false){
        return(
  
          <div>
  <h4>Hello, {currentUser.name}<button onClick={handLogOut}>Log out</button></h4>
              <label for="cars">Leader Boards:</label>
  
  <select name="tables" onChange={handleChange} value={selectValue}>
              <option value="" >Select Leader Board</option>
              <option value="winners">Winners</option>
              <option value="losers">Losers</option>
              <option value="form">Form</option>
              <option value="streak">Best Streak</option>
  </select>
            <Leaderboard users={users} />
            
             
          </div>
        )
       }
       if (selectValue === "losers" && auth === true && currentUser.admin === false){
        return(
  
          <div>
  <h4>Hello, {currentUser.name}<button onClick={handLogOut}>Log out</button></h4>
              <label for="cars">Leader Boards:</label>
  
  <select name="tables" onChange={handleChange} value={selectValue}>
              <option value="" >Select Leader Board</option>
              <option value="winners">Winners</option>
              <option value="losers">Losers</option>
              <option value="form">Form</option>
              <option value="streak">Best Streak</option>
  </select>
            <Leaderboard2 users={users} />
            
              
          </div>
        )
       }
  
       if (selectValue === "form" && auth === true && currentUser.admin === false){
        return(
  
          <div>
 <h4>Hello, {currentUser.name}<button onClick={handLogOut}>Log out</button></h4>
              <label for="cars">Leader Boards:</label>
  
  <select name="tables" onChange={handleChange} value={selectValue}>
              <option value="" >Select Leader Board</option>
              <option value="winners">Winners</option>
              <option value="losers">Losers</option>
              <option value="form">Form</option>
              <option value="streak">Best Streak</option>
  </select>
            <Leaderboard3 users={users} />
            
             
          </div>
        )
       }
  
       if (selectValue === "streak" && auth === true && currentUser.admin === false){
        return(
  
          <div>
  <h4>Hello, {currentUser.name}<button onClick={handLogOut}>Log out</button></h4>
              <label for="cars">Leader Boards:</label>
  
  <select name="tables" onChange={handleChange} value={selectValue}>
              <option value="" >Select Leader Board</option>
              <option value="winners">Winners</option>
              <option value="losers">Losers</option>
              <option value="form">Form</option>
              <option value="streak">Best Streak</option>
  </select>
            <Leaderboard4 users={users} />
            
             
          </div>
        )
       }

      

     if (auth === true && currentUser.admin === true){

      return(

        <div>
            <h4>Hello, {currentUser.name}<button onClick={handLogOut}>Log out</button></h4>
            <label for="cars">Leader Boards:</label>

<select name="tables" onChange={handleChange} value={selectValue}>
            <option value="" >Select Leader Board</option>
            <option value="winners">Winners</option>
            <option value="losers">Losers</option>
            <option value="form">Form</option>
            <option value="streak">Best Streak</option>
</select>
         
            <BetList  setUpdateUser={setUpdateUser} updateUser={updateUser} currentUser={currentUser} users={users} auth={auth} setAuth={setAuth} handleUpdate={handleUpdate} handlePost={handlePost}/>
            {/* <NewUser handlePost={handlePost}/> */}
        </div>
      )

     } else if (auth === true && currentUser.admin === false){
      return(

        <div>
            <h4>Hello, {currentUser.name}<button onClick={handLogOut}>Log out</button></h4>
            <label for="cars">Leader Boards:</label>

<select name="tables" onChange={handleChange} value={selectValue}>
            <option value="" >Select Leader Board</option>
            <option value="winners">Winners</option>
            <option value="losers">Losers</option>
            <option value="form">Form</option>
            <option value="streak">Best Streak</option>
</select>
         
            
        </div>
      )

     }
     
     
     
     else {
       return (
         <Login  users={users} auth={auth} setAuth={setAuth} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
       )
     }  {

     }

     


      
  



}

export default MainContainer;