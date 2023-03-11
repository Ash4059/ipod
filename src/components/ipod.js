import React from 'react';
import '../css/ipod.css';
import Display from './display';
import Buttons from './buttons-component';

class Ipod extends React.Component{
    render(){
        return(
            <div className='ipod-container' >
                <Display />
                <Buttons />
            </div>
        );
    }
}

export default Ipod;