import React, { Component } from 'react';
import Frame from '../../components/Frame'
import UserTablePage from './UserTablePage';

class LoginPage extends Component {
  render() {
    return (
      <Frame

      >
        {this.props.children || <UserTablePage />}
      </Frame>
    );
  }
}

export default LoginPage;
