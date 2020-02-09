import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const User = props => (
    <tr>
        <td>{props.user.userLogin}</td>
        <td>{props.user.userName}</td>
        <td>{props.user.userPassword}</td>
        <td>{props.user.userCargo}</td>
        <td>{props.user.userDepartamento}</td>
        <td>{props.user.userSuperior}</td>
        <td>
            <Link to={"/edit/"+props.user._id}>Editar</Link>
        </td>
    </tr>
)

export default class UsersList extends Component {

    constructor(props) {
        super(props);
        this.state = {users: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/users/')
            .then(response => {
                this.setState({ users: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    userList() {
        return this.state.users.map(function(currentUser, i){
            return <User user={currentUser} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Lista de Usuários</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Login</th>
                            <th>Nome</th>
                            <th>Senha</th>
                            <th>Cargo</th>
                            <th>Departamento</th>
                            <th>Superior</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.userList() }
                    </tbody>
                </table>
            </div>
        )
    }
}