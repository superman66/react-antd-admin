import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Layout, Breadcrumb, Menu, Icon } from 'antd'
import PageHeader from './PageHeader'
import PageSidebar from './PageSidebar'

const { Content, Sider } = Layout
const { SubMenu } = Menu

const propTypes = {
  activeItem: PropTypes.string,
  hideSidebar: PropTypes.bool,
  hideHeader: PropTypes.bool,
};

const contextTypes = {
  router: PropTypes.object.isRequired
};

const defaultProps = {
  headerProps: {}
};

class Frame extends Component {
  render() {
    const { children, hideSidebar } = this.props;
    const styles = {
      marginLeft: hideSidebar ? 0 : 200
    };
    return (
      <Layout>
        <PageHeader />
        <Layout className="ant-layout-has-sider">
          <PageSidebar />
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '12px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content className="table-content">
              {children}
            </Content>
          </Layout>
        </Layout>
      </Layout>

    );
  }
}

Frame.propTypes = propTypes;
Frame.contextTypes = contextTypes;
Frame.defaultProps = defaultProps;
export default Frame;
