import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import  './css/login.css';


class Login extends Component {
  constructor() {
    super();
    this.state = {
      role: 'user', // Default role is 'user'
      username: '',
      password: '',
    };
  }

  handleRoleChange = (event) => {
    this.setState({ role: event.target.value });
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can implement your login logic based on the selected role.
    // For demonstration purposes, we're just printing the input values.
    console.log('Role:', this.state.role);
    console.log('Username:', this.state.username);
    console.log('Password:', this.state.password);
  };

  render() {
    return (
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="role">Select Role:</label>
            <select
              id="role"
              name="role"
              value={this.state.role}
              onChange={this.handleRoleChange}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <span> Don't have an account? <a href="/register">Register</a></span>
      </div>
    );
  }
}

export default Login;
