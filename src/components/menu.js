import React from "react";
import { FaChevronRight } from 'react-icons/fa';
import '../css/menu.css';

const Menu = (props) =>{
    return (
        props.menuProps.map((content)=>{
            return(
                <div className="menu-content">
                    <span className="menu-title">{content}</span>
                    <span className="menu-arrow"><FaChevronRight style={{fill: '#FFF'}} /></span>
                </div>
            );
        })
    );
}

export default Menu;