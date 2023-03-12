import React from "react";
import '../css/Content-container.css';
import MenuContainer from "./menu-container";

const ContentContainer = (props) => {
    return(
        <div className="content-container">
            <h1 className="title" style={{textAlign: 'center'}}>Ipod.js</h1>
            <MenuContainer
                menuProps = {props.menuProps}
                defaultMenu = {props.defaultMenu}
                />
        </div>
    );
}

export default ContentContainer;