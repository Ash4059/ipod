import React from "react";
import Menu from "./menu";
import '../css/menu-container.css';

class MenuContainer extends React.Component{
    constructor(props){
        super(props);
        this.MenuProps = props.menuProps[props.defaultMenu];
    }
    render(){
        return(
                <div className="menu-container">
                    <Menu menuProps = {this.MenuProps} />
                </div>
        );
    }
}

export default MenuContainer;