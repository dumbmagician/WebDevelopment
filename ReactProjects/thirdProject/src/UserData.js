import  "./UserData.css";
import {useState} from "react";

function CreateUserData(props){

    const [enteredName,setName] = useState('');
    const [enteredAge,setAge] = useState('');

    const NameChangeHandler = (event) => {
        console.log(event.target.value);
        setName(event.target.value);
        
    }

    const AgeChangeHandler = (event) => {
        console.log(event.target.value);
        setAge(event.target.value);
        if(event.target.value < 0){
            window.alert('Please enter positive number!!');
            setAge('');
        }


    }

    
    const UserCreatedHandler = (event)=>{
        event.preventDefault();
        console.log(event);
        if(enteredName.trim().length == 0 || enteredAge.trim().length == 0){
            return;
        }

        const userRecord = {
            username:event.target[0].value,
            age:event.target[1].value
        }
        setName('');
        setAge('');
        props.onCreateUser(userRecord);

    };
    return (
        <div className="UserInputBlock" onSubmit={UserCreatedHandler}>
            <form>
            <div>
            <label>UserName</label>     
            <input type="text" onChange={NameChangeHandler} value={enteredName}></input>
            </div>
            <label>Age</label>
            <input type="number" onChange={AgeChangeHandler} value={enteredAge}></input>
            <br></br>
            <button type="submit" >Save</button>
            </form>
        </div>
    )
};

export default CreateUserData;