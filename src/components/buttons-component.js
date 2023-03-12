import React from 'react';
import '../css/buttons-components.css'
import { FaFastForward, FaFastBackward, FaPlay, FaPause } from 'react-icons/fa';


class Buttons extends React.Component{
    render(){
        return (
            <div className='wheel-container'>
                <div className='wheel-buttons'>
                    <div className='button menu-buttons'>MENU</div>
                    <div className='button forward-buttons'> <FaFastForward /> </div>
                    <div className='button backward-buttons'> <FaFastBackward /> </div>
                    <div className='button play-pause-buttons'> <FaPlay /> <FaPause /> </div>
                </div>
                <div className='ok-buttons'>
                </div>
            </div>
        );
    }
}

export default Buttons;