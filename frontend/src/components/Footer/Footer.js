import { useDispatch, useSelector } from "react-redux";
import './Footer.css'
import { useEffect } from "react";


export const Footer = function() {
    const dispatch = useDispatch()
    useEffect(() => {
    }, [])
    return(
        <div className="footer-main-cont">
            <span>+7-8352 20-12-09</span>
            <span>Мой Силант 2022</span>
        </div>
    )
}