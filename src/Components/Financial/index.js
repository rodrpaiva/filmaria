import React, { Component } from 'react';

import './financial.css';
import { keepSelected } from '../Menu';

class Financial extends Component {

    componentDidMount(){

        keepSelected(window.location.pathname);
            
       
       // alert(window.location.pathname);

    
}
    render() {
        return (<div className='financial'>
            
            <div className="body">
                Financial
                </div>
        </div>

        );
    }
}

export default Financial;