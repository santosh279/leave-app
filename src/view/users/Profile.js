import React, { Component } from 'react';
import Home from '../Home';

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: ''

    }

  }
  componentDidMount() {
    const users = JSON.parse(localStorage.getItem("loggedIn") || "[]");
    console.log('user', users)
    this.getData();
  }

  getData = () => {
    const users = JSON.parse(localStorage.getItem("loggedIn") || "[]");
    console.log('user', users)
    this.setState({
      username: users.username,
      email: users.email
    })
  }


  render() {
    return (
      <div>
        <Home />
        <body>
          <div className="container">
            <div className="jumbotron" style={{ marginTop: '50px' }}>
              username: <h3>{this.state.username}</h3>
              Email-ID:   <h3>{this.state.email}</h3>
            </div>
          </div>
        </body>
      </div>
    );
  }
}

export default Profile;
