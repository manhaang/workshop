import { useContext } from "react";
import { AuthContext } from "./App";

const fakeUser = { username:'nice789' , fullname:'man'};

function LoginBox(props){
    const {authState, authDispatch} = useContext(AuthContext);

    function loginSubmit(event){
        event.preventDefault();
        authDispatch({type:'login', payload: fakeUser})
    }

    function logoutSubmit(event){
        authDispatch({type:'logout'})
    }


    if(!!authState){
        return(
            <div>
                <p>Auth username = {authState.username}</p>
                <p>Auth fullname = {authState.fullname}</p>
                <p><button onClick={logoutSubmit}>Log out</button></p>
            </div>

        );
    }

    return (
        <form onSubmit={loginSubmit}>
            <p><input type ="text" placeholder="username"/></p>
            <p><input type ="password" placeholder="password"/></p>
            <p><button type ="submit">Log in </button> </p>
        </form>

    );


}export default LoginBox;