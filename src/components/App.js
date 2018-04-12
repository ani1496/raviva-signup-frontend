import React, { Component } from 'react';
import logoIcon from '../images/logo.png';
import background from '../images/background.png';
import './App.css';
import axios from 'axios';

import isPhoneNumber from 'is-phone-number';
import isValidEmail from 'is-valid-email';

const APIurl = 'http://192.241.137.190:3000';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      isLoading: false
    };
  }

  onFormSubmit(e) {
    e.preventDefault();

    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const phone = this.state.phone;
    const email = this.state.email;

    if (!firstName || !lastName)
      return this.setState({
        message: 'First and Last name are required',
        error: true
      });

    if (!isPhoneNumber(phone))
      return this.setState({
        message: 'Invalid phone number. ex: 123-123-1234',
        error: true
      });

    if (!isValidEmail(email))
      return this.setState({ message: 'Invalid email', error: true });

    this.setState({ isLoading: true });

    axios
      .post(`${APIurl}/client`, {
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        email: email
      })
      .then(response => {
        this.setState({
          isLoading: false,
          message: 'Thank you for joining!',
          error: false
        });

        setTimeout(() => {
          this.setState({
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            message: ''
          });
        }, 3000);
      });
  }

  render() {
    return (
      <div className="app" style={{ backgroundImage: `url(${background})` }}>
        <div className="form-container">
          <form className="form" onSubmit={this.onFormSubmit.bind(this)}>
            <figure className="image">
              <img src={logoIcon} alt="logo" />
            </figure>
            <div className="info">
              <div className="columns">
                <div className="column">
                  <div className="field">
                    <p className="control has-icons-right">
                      <input
                        className="input name"
                        type="text"
                        onChange={e => {
                          this.setState({ firstName: e.target.value });
                        }}
                        placeholder="Name"
                        value={this.state.firstName}
                      />
                      <span
                        className="icon name is-small is-right"
                        style={{
                          display:
                            this.state.firstName.length >= 2 ? 'unset' : 'none'
                        }}
                      >
                        <i className="fas fa-check-circle" />
                      </span>
                    </p>
                  </div>
                </div>
                <div className="column">
                  <div className="field">
                    <p className="control has-icons-right">
                      <input
                        className="input last-name"
                        type="text"
                        onChange={e => {
                          this.setState({ lastName: e.target.value });
                        }}
                        placeholder="Last Name"
                        value={this.state.lastName}
                      />
                      <span
                        className="icon last-name is-small is-right"
                        style={{
                          display:
                            this.state.lastName.length >= 2 ? 'unset' : 'none'
                        }}
                      >
                        <i className="fas fa-check-circle" />
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="field">
                <p className="control has-icons-right">
                  <input
                    className="input phone"
                    type="text"
                    onChange={e => {
                      this.setState({ phone: e.target.value });
                    }}
                    placeholder="Phone --- --- ----"
                    value={this.state.phone}
                  />
                  <span
                    className="icon phone is-small is-right"
                    style={{
                      display: isPhoneNumber(this.state.phone)
                        ? 'unset'
                        : 'none'
                    }}
                  >
                    <i className="fas fa-check-circle" />
                  </span>
                </p>
              </div>

              <div className="field">
                <p className="control has-icons-right">
                  <input
                    className="input email"
                    type="text"
                    onChange={e => {
                      this.setState({ email: e.target.value });
                    }}
                    placeholder="Email"
                    value={this.state.email}
                  />
                  <span
                    className="icon email is-small is-right"
                    style={{
                      display: isValidEmail(this.state.email) ? 'unset' : 'none'
                    }}
                  >
                    <i className="fas fa-check-circle" />
                  </span>
                </p>
              </div>
              <p
                className="red size-7"
                style={{
                  color: this.state.error ? 'red' : '#71625c'
                }}
              >
                {this.state.message}
              </p>
            </div>

            <button
              className={`button ${this.state.isLoading ? 'is-loading' : ''}`}
              type="submit"
            >
              {this.state.isLoading ? '' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
