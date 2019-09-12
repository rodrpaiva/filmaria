import React, { Component } from 'react';
import './students.css';
import { Link } from 'react-router-dom';
import { keepSelected } from '../Menu';


class Students extends Component {


    componentDidMount(){

        keepSelected(window.location.pathname);
            
       
       // alert(window.location.pathname);

    
}


    render() {
        return (<div className='students'>
          
        
                <Link  to={'/Students/new'}>
                    <img src={require('D:/Google Drive/Private Classes/Software/clone_privateclasses/privateclasses/src/assets/addStudent.PNG')}/>
                </Link>
                <Link to={'/Students/update'}>
                <img src={require('D:/Google Drive/Private Classes/Software/clone_privateclasses/privateclasses/src/assets/updateStudent.PNG')}/>
                </Link>
                <Link to={'/Students/search'}>
                <img src={require('D:/Google Drive/Private Classes/Software/clone_privateclasses/privateclasses/src/assets/searchStudent.png')}/>
                </Link>
          
        </div>
        );
    }
}

export default Students;