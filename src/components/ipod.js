import React from 'react';
import '../css/ipod.css';
import Display from './display';
import Buttons from './buttons-component';
import MenuProps from '../menu';

class Ipod extends React.Component{

    constructor(){
        super();
        this.MenuProps = MenuProps;
        this.defaultMenu = 'Main-menu';
    }

    render(){
        return(
            <div className='ipod-container' >
                <Display 
                    menuProps = {this.MenuProps}
                    defaultMenu = {this.defaultMenu}
                 />
                <Buttons />
            </div>
        );
    }
}

export default Ipod;