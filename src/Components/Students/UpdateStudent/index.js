import React,{Component} from 'react';
import './updateStudent.css';

class UpdateStudent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            cpf: '',
            email: '',
            phone: '',
            address: '',
            number: ''
        }

       
        this.changeHandler = this.changeHandler.bind(this);
        this.updateStudent = this.updateStudent.bind(this);
        

    }

  



  

    updateStudent() {
        if (this.state.address !== '' && this.state.cpf !== '' && this.state.email !== '' && this.state.name !== '' && this.state.number !== '' && this.state.phone !== '') {
            
            alert("Done!");
        } else {
            alert("Oops, there's a gap in blank");
        }
    }

    changeHandler(e){
        this.setState({[e.target.name]: e.target.value});
    }


    render() {
        return (<div className='ns'>
            <h2 className='title'>Update Student</h2>

            <form className='form'>
                <table border='0'>
                    <tbody>
                        <tr>
                            <td>
                                <a>Name</a><br />
                                <input type='text' onChange={this.changeHandler} value={this.state.name} name='name' /><br />
                                <br /><a>CPF</a><br />
                                <input type='text' onChange={this.changeHandler} value={this.state.cpf} name='cpf' /><br />
                                <br /><a>Email</a><br />
                                <input type='email' onChange={this.changeHandler} value={this.state.email} name='email' /><br />
                            </td>
                            <td>
                                <br /><a>Phone Number</a><br />
                                <input type='text' onChange={this.changeHandler} value={this.state.phone} name='phone' /><br />
                                <br /><a>Address</a><br />
                                <input type='text' onChange={this.changeHandler} value={this.state.address} name='address' /><br />
                                <br /><a>Number</a><br />
                                <input type='text' onChange={this.changeHandler} value={this.state.number} name='number' /><br />
                                <br />
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><a onClick={this.updateStudent} className="updateStudent">Update Student</a></td>
                        </tr>
                    </tbody>
                </table>



            </form>

        </div>);

    }
}

export default UpdateStudent;