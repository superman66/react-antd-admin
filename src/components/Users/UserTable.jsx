import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TableView from '../TableView'


const propTypes = {
  data: PropTypes.array,
  page: PropTypes.object,
  onFetchUser: PropTypes.func
}

class UserTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.loadTableData();
  }

  getData() {
    const data = [];
    for (let i = 0; i < 100; i++) {
      data.push({
        key: i,
        name: `Edrward ${i}`,
        age: 32,
        address: `London Park no. ${i}`,
      });
    }
    return data;
  }

  getColumns() {
    const columns = [
      {
        title: 'Full Name',
        width: 100,
        dataIndex: 'name',
        key: 'name',
        fixed: 'left'
      },
      {
        title: 'Age',
        width: 100,
        dataIndex: 'age',
        key: 'age',
        fixed: 'left'
      },
      {
        title: 'Column 1',
        dataIndex: 'address',
        key: '1',
        width: 150,
        sorter: true,
      },
      {
        title: 'Column 2',
        dataIndex: 'address',
        key: '2',
        width: 150,
        sorter: true,
      },
      {
        title: 'Column 3',
        dataIndex: 'address',
        key: '3',
        width: 150,
        sorter: true,
      },
      {
        title: 'Column 4',
        dataIndex: 'address',
        key: '4',
        width: 150,
        sorter: true,
      },
      {
        title: 'Column 5',
        dataIndex: 'address',
        key: '5',
        width: 150,
        sorter: true,
      },
      {
        title: 'Column 6',
        dataIndex: 'address',
        key: '6',
        width: 150,
        sorter: true,
      },
      {
        title: 'Action',
        key: 'operation',
        width: 100,
        render: () => <a href="#">action</a>,
      },
    ];
    return columns;
  }

  loadTableData = () => {
    const { onFetchUser } = this.props;
    onFetchUser();
  }

  render() {
    return (
      <TableView
        data={this.getData()}
        loadData={this.loadTableData}
        columns={this.getColumns()}
        scroll={{ x: 1500, y: 300 }}
      />
    )
  }
}

UserTable.propTypes = propTypes
export default UserTable
