import React, { Component } from 'react';
import './header.css';
import {Link} from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            avatarClicked: false,
            username: 'Rodrigo'
        }

        this.clickFloat = this.clickFloat.bind(this);
    }

    clickFloat() {

        this.setState({ avatarClicked: !this.state.avatarClicked });
        //alert(this.state.avatarClicked);

    }


    render() {
        return (<div className='header'>
            <div className='company'>

            <Link to='/'><img  alt="avatar" src={require('D:/Google Drive/Private Classes/Software/clone_privateclasses/privateclasses/src/assets/logo.png')} /></Link>

            </div>

            {this.state.avatarClicked && <div className="float">

                
                <a>Edit Profile</a>
                <a>Settings</a>
                <a>Log Out</a>
                
            </div>}

            <div className="user">
                
              
                <img onClick={this.clickFloat} alt="avatar" src={require('D:/Google Drive/Private Classes/Software/clone_privateclasses/privateclasses/src/assets/avatar.png')} />

                <a onClick={this.clickFloat} >{this.state.username}</a>
            </div>
        </div>);
    }
}

export default Header;