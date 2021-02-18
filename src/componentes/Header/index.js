import boxicons from 'boxicons';
import React from 'react'
import  Nike from "../..//images/Nike.jpg";

export const Header = () => {
    return(
        <Header>
            <a href="#">
                <div className="logo">
                    <img src={Nike} alt="logo" width="150"/>
                </div>
            </a>
            <ul>
                <li>
                    <a href="#">INICIO</a>
                </li>
                <li>
                    <a href="#">Productos</a>
                </li>
            </ul>
            <div className="cart">
                <box-icons name="cart"></box-icons>
                <span className="item__total">0</span>
            </div>
        </Header>
    )
}
