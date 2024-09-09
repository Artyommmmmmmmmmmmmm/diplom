import { useDispatch, useSelector } from "react-redux";
import './SignIn.css'
import { useEffect, useState } from "react";
import { login } from "../../reducers/currentUserReducer/login";

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()

    return (
        <div className="signin-main-cont">
            <input
                className="signin-input"
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => {setUsername(e.target.value)}}
            />
            <input
                className="signin-input"
                type="text"
                placeholder="password"
                value={password}
                onChange={(e) => {setPassword(e.target.value)}}
            />
            <button onClick={() => {dispatch(login(username, password))}} className="signin-input">получить токен</button>
        </div>
    )    
}

export default SignIn;
