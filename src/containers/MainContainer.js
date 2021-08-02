import React, {useEffect, useState} from 'react';
import Request from '../helpers/Request';
import BetList from '../components/BetList';
import Leaderboard from '../components/Leaderboard';
import Leaderboard2 from '../components/LeaderBoard2';
import NewUser from '../components/NewUser';

const MainContainer = () => {

    const [users, setUsers] = useState([]);
   

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

      
  

      return(

        <div>
          <Leaderboard users={users} />
          <Leaderboard2 users={users}/>
            <BetList  users={users} handleUpdate={handleUpdate} handlePost={handlePost}/>
            
            <NewUser handlePost={handlePost}/>
        </div>
      )

}

export default MainContainer;