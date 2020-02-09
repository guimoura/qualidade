import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
    
    constructor(props) {
        super(props);

        this.onChangeUserLogin = this.onChangeUserLogin.bind(this);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserpassword = this.onChangeUserpassword.bind(this);
        this.onChangeUserCargo = this.onChangeUserCargo.bind(this);
        this.onChangeUserDepartamento = this.onChangeUserDepartamento.bind(this);
        this.onChangeUserSuperior = this.onChangeUserSuperior.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            userLogin: '',
            userName: '',
            userPassword: '',
            userCargo: '',
            userDepartamento: '',
            userSuperior: ''
        }
    }


    onChangeUserLogin(e) {
        this.setState({
            userLogin: e.target.value
        });
    }

    onChangeUserName(e) {
        this.setState({
            userName: e.target.value
        });
    }

    onChangeUserpassword(e) {
        this.setState({
            userPassword: e.target.value
        });
    }

    onChangeUserCargo(e) {
        this.setState({
            userCargo: e.target.value
        });
    }

    onChangeUserDepartamento(e) {
        this.setState({
            userDepartamento: e.target.value
        });
    }

    onChangeUserSuperior(e) {
        this.setState({
            userSuperior: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();
        
        console.log("Form submitted:");
        console.log(`User Login: ${this.state.userLogin}`);
        console.log(`User Name: ${this.state.userName}`);
        console.log(`User Password: ${this.state.userPassword}`);
        console.log(`User Cargo: ${this.state.userCargo}`);
        console.log(`User Departamento: ${this.state.userDepartamento}`);
        console.log(`User Superior: ${this.state.userSuperior}`);
        
        const newUser = {
            userLogin: this.state.userLogin,
            userName: this.state.userName,
            userPassword: this.state.userPassword,
            userCargo: this.state.userCargo,
            userDepartamento: this.state.userDepartamento,
            userSuperior: this.state.userSuperior
        };

        axios.post('http://localhost:4000/users/add', newUser)
            .then(res => console.log(res.data));

        this.setState({
            userLogin: '',
            userName: '',
            userPassword: '',
            userCargo: '',
            userDepartamento: '',
            userSuperior: ''
        })
    }

    
    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Criar novo Usuario</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Login: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.userLogin}
                                onChange={this.onChangeUserLogin}
                                />
                    </div>
                    <div className="form-group">
                        <label>Nome: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.userName}
                                onChange={this.onChangeUserName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Senha: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.userPassword}
                                onChange={this.onChangeUserpassword}
                                />
                    </div>
                    <div className="form-group">
                        <label>Cargo: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.userCargo}
                                onChange={this.onChangeUserCargo}
                                />
                    </div>
                    <div className="form-group">
                        <label>Departamento: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.userDepartamento}
                                onChange={this.onChangeUserDepartamento}
                                />
                    </div>
                    <div className="form-group">
                        <label>Superior: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.userSuperior}
                                onChange={this.onChangeUserSuperior}
                                />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Criar Usuario" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}