import React, { Component } from 'react';
import './searchStudent.css';

class SearchStudent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            cpf: '',
            student: 'Student'
        };
        this.changeName = this.changeName.bind(this);
        this.changeCpf = this.changeCpf.bind(this);
        this.searchStudent = this.searchStudent.bind(this);

    }

    changeName(e) {
        this.setState({ name: e.target.value });
    }


    changeCpf(e) {
        this.setState({ cpf: e.target.value });
    }

    searchStudent() {
        if (this.state.name !== '' || this.state.cpf !== '') {


            //ao ler cpf, pegar nome no banco e atualizar state name
           this.setState({student: this.state.name});
           
           // alert("Done!");
        } else {
            alert("Oops, there's a gap in blank");
        }
    }

    render() {
        return (<div className='ss'>

            <table border='0'>
                <tbody>
                    <tr>
                        <td>
                            

                            <div className='search'>
                            <h2 className='title'>Search Student</h2><br />
                                <form className='form'>
                                    <a>Search by:</a><br /><br />
                                    <a>Name</a><br />
                                    <input onChange={this.changeName} type='text' name='name' value={this.state.name} /><br />
                                    <br /><a>or</a><br />
                                    <br /> <a>CPF</a><br />
                                    <input onChange={this.changeCpf} type='text' name='cpf' value={this.state.cpf} /><br />
                                    <br /><br /><a className='searchStudent' onClick={this.searchStudent}>Search</a>
                                </form>
                            </div>
                        </td>
                        <td>
                            <div className='show'>

                                <h2 className='title'>{this.state.student}'s Information</h2>
                                <textarea readOnly='readOnly' value='info'/>
                                
                        </div>
                        </td>
                    </tr>
                </tbody>
            </table>





        </div>);
    }
}

export default SearchStudent;