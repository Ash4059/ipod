import React from 'react';
import '../css/display.css';
import Image from '../static/images/home-screen.jpg';
import ContentContainer from './Content-container';

class Display extends React.Component{
    constructor(props){
        super(props);
        this.MenuProps = props.menuProps;
        this.defaultMenu = props.defaultMenu;
    }

    render(){
        return(
            <div className='ipod-display' style={{backgroundImage:'url(' + Image + ')', backgroundSize: 'cover'}}>
                <ContentContainer
                    menuProps = {this.MenuProps}
                    defaultMenu = {this.defaultMenu}
                 />
            </div>
        );
    }
}

export default Display;