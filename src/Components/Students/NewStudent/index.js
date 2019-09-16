import React, { Component } from 'react';
import './newStudent.css';
import axios from 'axios';



class NewStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            cpf: '',
            email: '',
            phone: '',
            address: '',
            number: '',
            teste: ''
        }


        this.changeName = this.changeName.bind(this);
        this.changeNumber = this.changeNumber.bind(this);
        this.changePhone = this.changePhone.bind(this);
        this.changeCpf = this.changeCpf.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changeAddress = this.changeAddress.bind(this);
        this.addStudent = this.addStudent.bind(this);
        this.saveStudent = this.saveStudent.bind(this);

    }





    saveStudent() {

        // Requisições POST, note há um parâmetro extra indicando os parâmetros da requisição
        axios.post('http://localhost:8080/save', { firstName: 'Rodrigo', lastName: 'Paiva' })
            .then(function (response) {
                console.log('salvo com sucesso')
            });


    }

    addStudent() {
        if (this.state.address !== '' && this.state.cpf !== '' && this.state.email !== '' && this.state.name !== '' && this.state.number !== '' && this.state.phone !== '') {
            this.salveStudent();


        } else {
            alert("Oops, there's a gap in blank");
        }
    }

    changeName(e) {
        this.setState({ name: e.target.value });
    }


    changeCpf(e) {
        this.setState({ cpf: e.target.value });
    }

    changeEmail(e) {
        this.setState({ email: e.target.value });
    }

    changePhone(e) {
        this.setState({ phone: e.target.value });
    }

    changeAddress(e) {
        this.setState({ address: e.target.value });
    }

    changeNumber(e) {
        this.setState({ number: e.target.value });
    }


    render() {
        return (<div className='ns'>
            <h2 className='title'>New Student</h2>

            <form className='form'>
                <table border='0'>
                    <tbody>
                        <tr>
                            <td>
                                <a>Name</a><br />
                                <input type='text' onChange={this.changeName} value={this.state.name} name='name' /><br />
                                <br /><a>CPF</a><br />
                                <input type='text' onChange={this.changeCpf} value={this.state.cpf} name='cpf' /><br />
                                <br /><a>Email</a><br />
                                <input type='email' onChange={this.changeEmail} value={this.state.email} name='email' /><br />
                            </td>
                            <td>
                                <br /><a>Phone Number</a><br />
                                <input type='text' onChange={this.changePhone} value={this.state.phone} name='phone' /><br />
                                <br /><a>Address</a><br />
                                <input type='text' onChange={this.changeAddress} value={this.state.address} name='address' /><br />
                                <br /><a>Number</a><br />
                                <input type='text' onChange={this.changeNumber} value={this.state.number} name='number' /><br />
                                <br />
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><a onClick={this.addStudent} className="addStudent">Add Student</a></td>
                        </tr>
                    </tbody>
                </table>



            </form>

        </div>);

    }
}

export default NewStudent;