import React, { Component } from 'react';
import './searchStudent.css';
import Axios from 'axios';

class SearchStudent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            cpf: '',
            students: []

        };
        this.changeHandler = this.changeHandler.bind(this);
        this.searchStudent = this.searchStudent.bind(this);

    }
    changeHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                console.log(response);
                this.setState({ students: response.data });
            })
            .catch(error => {
                console.log(error);
            })
    }


    searchStudent() {
        if (this.state.name !== '' || this.state.cpf !== '') {


            //ao ler cpf, pegar nome no banco e atualizar state name
            this.setState({ student: this.state.name });

            // alert("Done!");
        } else {
            alert("Oops, there's a gap in blank");
        }
    }

    render() {
        return (<div className='ss'>


            <div className='search'>
                <h2 className='title'>Students</h2><br />
                <input name='name' value={this.state.name} onChange={this.changeHandler} />
                <a className='searchStudent'> Search</a>
                <div className='list'>

                    <table  className='studentsList'>
                        <thead>
                        <tr className='tableHead'>
                                <td>
                                    <a>Name</a>
                                                </td>
                                <td>
                                   <a> E-mail</a>
                                                </td>
                                <td>
                                   <a>Options</a> 
                                                </td>
                                                
                            </tr>
                        </thead>
                        <tbody>
                            
                            <tr>
                                {this.state.students.length ?
                                    this.state.students.map(user => <div key={user.id}>{user.name}</div>) :
                                    null
                                }
                                <td>
                                    {this.state.students.length ?
                                        this.state.students.map(user => <div key={user.id}>{user.email}</div>) :
                                        null
                                    }
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>

            </div>



        </div>);
    }
}

export default SearchStudent;