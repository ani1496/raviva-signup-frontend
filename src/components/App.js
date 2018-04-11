import React, { Component } from 'react';
import logoIcon from '../images/logo.png';
import background from '../images/background.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app" style={{ backgroundImage: `url(${background})` }}>
        <div className="form-container">
          <form className="form">
            <figure className="image">
              <img src={logoIcon} alt="logo" />
            </figure>
            <div className="info">
              <div className="field is-grouped is-grouped-centered">
                <p className="control has-icons-right">
                  <input
                    className="input name"
                    type="text"
                    placeholder="Name"
                  />
                  <span className="icon name is-small is-right">
                    <i className="fas fa-check-circle" />
                  </span>
                </p>
                <p className="control has-icons-right">
                  <input
                    className="input last-name"
                    type="text"
                    placeholder="Last Name"
                  />
                  <span className="icon last-name is-small is-right">
                    <i className="fas fa-check-circle" />
                  </span>
                </p>
              </div>

              <div className="field">
                <p className="control has-icons-right">
                  <input
                    className="input phone"
                    type="text"
                    placeholder="Phone"
                  />
                  <span className="icon phone is-small is-right">
                    <i className="fas fa-check-circle" />
                  </span>
                </p>
              </div>

              <div className="field">
                <p className="control has-icons-right">
                  <input
                    className="input email"
                    type="text"
                    placeholder="Email"
                  />
                  <span className="icon email is-small is-right">
                    <i className="fas fa-check-circle" />
                  </span>
                </p>
              </div>
            </div>

            <a class="button">Join</a>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
