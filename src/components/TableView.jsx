import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Table } from 'antd'

import ReqeustStatus from '../constants/RequestStatus'

const propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  status: PropTypes.string,
  loadData: PropTypes.func
}

class TablveView extends Component {
  constructor(props) {
    super(props)
    const { total } = props.options;
    this.state = {
      pagination: {
        total,
        current: 1,
        pageSize: 30,
        showTotal: this.showTotal
      },
      params: {
        page: 1,
      }
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {
      this.setState((prevState) => {
        return {
          pagination: { ...prevState.pagination, ...{ total: nextProps.options.total } }
        }
      })
    }
  }

  showTotal = (total) => {
    return `Total ${total} items`
  }

  handleTableChange = (pagination, filters, sorter) => {
    console.log(pagination, filters, sorter);
    this.setState((prevState) => {
      return {
        pagination: { ...prevState.pagination, ...{ current: pagination.page } }
      }
    })
    const params = {
      page: pagination.page,
      pageSize: pagination.pageSize
    }
    this.loadTableData(params);
  }

  loadTableData(params) {
    const { loadData } = this.props
    loadData(params)
  }

  render() {
    const { pagination } = this.state;
    const { data, columns, status, options } = this.props
    return (
      <div>
        <Table
          dataSource={data}
          columns={columns}
          pagination={pagination}
          loading={status === ReqeustStatus.REQUEST}
          scroll={{ x: 1500, y: 300 }}
          onChange={this.handleTableChange}
          {...this.props}
        />
      </div>
    )
  }
}

TablveView.propTypes = propTypes

export default TablveView
