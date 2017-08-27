import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addLocaleData, IntlProvider } from 'react-intl';

const propTypes = {
  menuItems: PropTypes.array,
};

const contextTypes = {
  router: PropTypes.object,
};

class App extends Component {

  render() {
    const { children } = this.props;
    return (
      <div className="page">
        {children}
      </div>
    );
  }
}

App.propTypes = propTypes;
App.contextTypes = contextTypes;

export default App;

