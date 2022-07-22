import React, { useState } from 'react';
import AddUser from './Components/Users/AddUser'
import UserList from './Components/Users/UserList';

function App() {
  const[userList,setUserList]= useState([]);
  const AddUserHandler = (userName,userAge)=>
  {
setUserList((prevList)=>
{
  return[...prevList,{name:userName,age:userAge,id:Math.random().toString()}];
})

  }
  return (
 <>
 <AddUser onAddUser={AddUserHandler}/>
 <UserList users={userList}/>
 </>

   
  );
}

export default App;
