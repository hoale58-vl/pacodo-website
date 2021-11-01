import React from 'react'
import Layout from 'components/admin_layout'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

const IndexPage = () => {

  const userColumns = [{
    dataField: 'email',
    text: 'Email',
  }, {
    dataField: 'bank_id',
    text: 'STK',
  },{
    dataField: 'bank_name',
    text: 'Ngân hàng',
  }, {
    dataField: 'bank_location',
    text: 'Chi nhánh',
  }, {
    dataField: 'bank_user',
    text: 'Tên CK',
  }, {
    dataField: 'value',
    text: 'VND',
      formatter: (cell, row) => {
        if (cell)
            return cell.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
          return '-';
    }
  }, {
    dataField: 'id',
    text: 'VND',
    formatter: (cell, row) => {
        return <span>
            <button className="mr-2" data-toggle="tooltip" data-placement="left" title="Edit">
                <i className="fa fa-fw fa-check"></i>
            </button>
            <button data-toggle="tooltip" data-placement="left" title="Remove">
                <i className="fa fa-fw fa-trash-alt"></i>
            </button>
      </span>;
    }
  }];
  
  const users = [...Array(30).keys()].map(ele => {
    return {
        email: `lvhoa${ele}@gmail.com`,
        id: ele,
        bank_id: ele,
        bank_name: ele,
        bank_location: ele,
        bank_user: ele,
        value: ele
    }
  })
    
  return (
    <Layout>
        <div className="block block-rounded block-mode-loading-oneui">
        <div className="block-header block-header-default">
            <h3 className="block-title">Danh sách lệnh nạp</h3>
            <div className="block-options">
            <button
                type="button"
                className="btn-block-option"
                data-toggle="block-option"
                data-action="state_toggle"
                data-action-mode="demo"
            >
                <i className="si si-refresh"></i>
            </button>
            </div>
        </div>
        <div className="block-content block-content-full">
            <BootstrapTable
            keyField='email'
            data={users}
            columns={userColumns}
            pagination={paginationFactory()}
            striped
            hover
            condensed
            />
        </div>
        </div>
    </Layout>
  )
}

export default IndexPage
