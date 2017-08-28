import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Table } from 'antd'

const propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired
}

class TablveView extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { data, columns } = this.props;
    return (
      <Table
        dataSource={data}
        columns={columns}
      />
    )
  }
}

TablveView.propTypes = propTypes

export default TablveView
