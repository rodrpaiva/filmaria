import React, { Component } from 'react';
import './menu.css';
import { Link } from 'react-router-dom';

export const keepSelected =(path)=>{

   // alert(path);

    if(path==="/Classes"){

    }

}


class Menu extends Component {
constructor(props){
    super(props);


    
}



    
    render() {
        return (

            
            <div className='menu'>
                <Link  className="button" to={'/Classes'}>Classes</Link>
                <Link  className="button" to={'/Students'}>Students</Link>
                <Link  className="button" to={'/Financial'}>Financial</Link>
                <Link  className="button" to={'/Settings'}>Settings</Link>
                
                
            </div>
        );
    }
}

export default Menu;