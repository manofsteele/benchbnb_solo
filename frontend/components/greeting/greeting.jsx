import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const greeting = () => (
      <div>
      <h3>Welcome, {this.props.currentUser.username}</h3>
    <button onClick={this.props.logout} >Log Out</button>
    </div>
    );

    const links = () => (
      <div>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Log In</Link>
      </div>
    );

  return this.props.currentUser ? greeting() : links();


  }

}

export default Greeting;
