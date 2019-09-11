import React,{Component} from 'react';
import { keepSelected } from '../Menu';

class Settings extends Component{

    componentDidMount(){

        keepSelected(window.location.pathname);
            
       
       // alert(window.location.pathname);

    
}
    render(){
        return(
            <div>
Settings
            </div>
        );
    }
}

export default Settings;