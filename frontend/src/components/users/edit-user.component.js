import React, { Component } from 'react';
import axios from 'axios';


export default class EditUser extends Component {

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

    componentDidMount() {
        axios.get('http://localhost:4000/users/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    userLogin: response.data.userLogin,
                    userName: response.data.userName,
                    userPassword: response.data.userPassword,
                    userCargo: response.data.userCargo,
                    userDepartamento: response.data.userDepartamento,
                    userSuperior: response.data.userSuperior
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
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
        const obj = {
            userLogin: this.state.userLogin,
            userName: this.state.userName,
            userPassword: this.state.userPassword,
            userCargo: this.state.userCargo,
            userDepartamento: this.state.userDepartamento,
            userSuperior: this.state.userSuperior
        };
        console.log(obj);
        axios.post('http://localhost:4000/users/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3 align="center">Atualiza Usuário</h3>
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
                        <input type="submit" value="Atualizar Usuário" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}