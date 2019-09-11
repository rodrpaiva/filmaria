import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './classes.css';

import { keepSelected } from '../Menu';

class Classes extends Component {

    componentDidMount() {

        // keepSelected(window.location.pathname);

    }
    render() {
        return (
            <div className="classes">
                <Link to={'/Classes/new'}>
                    <img src={require('D:/Google Drive/Private Classes/Software/privateclasses/src/assets/addClass.png')} />
                </Link>
                <Link to={'/Classes/update'}>
                    <img src={require('D:/Google Drive/Private Classes/Software/privateclasses/src/assets/updateClass.png')} />
                </Link>
                <Link to={'/Classes/search'}>
                    <img src={require('D:/Google Drive/Private Classes/Software/privateclasses/src/assets/searchClass.png')} />
                </Link>       
                <Link to={'/Classes/register-class-day'}>
                    <img src={require('D:/Google Drive/Private Classes/Software/privateclasses/src/assets/registerClassDay.png')} />
                </Link>    
                <Link to={'/Classes/register-grades'}>
                    <img src={require('D:/Google Drive/Private Classes/Software/privateclasses/src/assets/registerGrades.png')} />
                </Link>    
                
                
                
                
                     </div>
        );
    }
}

export default Classes;