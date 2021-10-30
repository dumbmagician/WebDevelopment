function ShowUserData(props){
    return (
        <div>
            {props.userList.map(item => <h1>Name : {item.username} Age : {item.age}</h1>)}
        </div>
    )
};

export default ShowUserData;