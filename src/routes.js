import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Error from './Components/Error';
import Menu from './Components/Menu';
import Header from './Components/Header';
import './routes.css';
import Content from './Components/Content';
import Settings from './Components/Settings';
import Financial from './Components/Financial';
import Students from './Components/Students';
import Classes from './Components/Classes';
import NewStudent from './Components/Students/NewStudent';
import UpdateStudent from './Components/Students/UpdateStudent';
import SearchStudent from './Components/Students/SearchStudent';
import AddClass from './Components/Classes/AddClass';
import SearchClass from './Components/Classes/SearchClass';
import UpdateClass from './Components/Classes/UpdateClass';
import RegisterClassDay from './Components/Classes/RegisterClassDay';
import RegisterGrades from './Components/Classes/RegisterGrades';
import Save from './Components/Save';

const Routes = () => {




    return (
        <BrowserRouter>
        <Header/>
        <div className='container'>
        <Menu/>
            
            
            <Switch>

            

           
            
                <Route exact path="/" component={Content} />

                <Route exact path="/Classes" component={Classes} />
                <Route exact path="/Classes/new" component={AddClass} />
                <Route exact path="/Classes/search" component={SearchClass} />
                <Route exact path="/Classes/update" component={UpdateClass} />
                <Route exact path="/Classes/register-class-day" component={RegisterClassDay} />
                <Route exact path="/Classes/register-grades" component={RegisterGrades} />
                


                <Route exact path="/Students" component={Students} />
                <Route exact path="/Students/new" component={NewStudent} />
                <Route exact path="/Students/update" component={UpdateStudent} />
                <Route exact path="/Students/search" component={SearchStudent} />

                <Route exact path="/Financial" component={Financial} />
                <Route exact path="/Settings" component={Settings} />

                <Route path="/save" component={Save} />
                <Route path="*" component={Error} />


            </Switch>
            </div>
        </BrowserRouter>
    )
}

export default Routes;