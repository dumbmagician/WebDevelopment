import logo from './logo.svg';
import './App.css';
import CreateUserData from "./UserData";
import ShowUserData from "./ShowUserData";
import {useState} from "react";

function App() {
  const UserList = [];
  const [currentUserList,setUserList] = useState(UserList);
  

  const UpdateUserListHandler = (userRecord) =>{
    console.log(userRecord);
    setUserList(()=>
    {
      return [...currentUserList,userRecord]
    });
    console.log(currentUserList);
  }

  return (
    <div className="App">
      <CreateUserData onCreateUser={UpdateUserListHandler}></CreateUserData>
    <ShowUserData userList={currentUserList}></ShowUserData>
    </div>
  );
}

export default App;
