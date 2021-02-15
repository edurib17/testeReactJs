import React from 'react';
//Icones
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';



export default function Header() {
    return (
        <nav>
            <div className="logo">YGames</div>
            <ul>
                <Link className="link" to="/sale" ><li>Os Melhores Preços</li></Link>
                <Link className="link" to="/score" ><li>Popularidade</li></Link>
                <Link className="link" to="/alphabetic" ><li>Ordem Alfabética</li></Link>
            </ul>
            <div className="search">
                <i className="icon" >
                  <FaShoppingCart/>
                </i>
            </div>

        </nav>
    )
}