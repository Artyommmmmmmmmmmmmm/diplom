import { useDispatch, useSelector } from "react-redux";
import './Header.css'
import { useEffect } from "react";
import SignIn from "../SignIn/SignIn";

export const Header = function() {
    return(
        <>
            <div className="main-header-cont">
                <div className="header-top-cont">
                    <img className="logo" src={require("./icon/Logotype-accent-RGB-1.jpg")} alt="silant logo"/>
                    <div className="teleg-cont">
                    <span>+7-8352 20-12-09, </span><span>telegram</span>
                    </div>
                    <div className="sign-in-btn-cont">
                        <SignIn/>
                    </div>
                </div>
                <div className="header-bottom-cont">
                    Электронная сервисная книжка "Мой Силант"
                </div>
                
            </div>
        </>
    )
}