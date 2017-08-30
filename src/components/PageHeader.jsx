import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { Layout, Menu } from 'antd'

const { Header } = Layout

const propTypes = {
  // Logo
  // brand: PropTypes.node,
  // // 顶部菜单
  // menuItems: PropTypes.array,
  // activeItem: PropTypes.string
};

const contextTypes = {
  // router: React.PropTypes.object.isRequired
};

class PageHeader extends Component {

  renderActiveItem(activeKey) {
    const { activeItem } = this.props;
    return activeItem === activeKey ? 'active' : null;
  }

  render() {
    return (
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
    );
  }
}

PageHeader.propTypes = propTypes;
PageHeader.contextTypes = contextTypes;

export default PageHeader;
