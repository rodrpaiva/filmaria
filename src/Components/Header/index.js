import React, { Component } from 'react';
import './header.css';

class Header extends Component {
    render() {
        return (<div className='header'>
            <div className='company'>
            
            </div>
            <div className="user">
                <img alt="avatar" src={require('D:/Google Drive/Private Classes/Software/privateclasses/src/assets/avatar.png')}/>
               
               
            </div>
        </div>);
    }
}

export default Header;