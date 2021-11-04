import React, { useEffect } from 'react'
import Layout from 'components/admin_layout'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import userStore from 'stores/user';

const LIMIT = 10;

const IndexPage = () => {
  const { users, getList, total, page } = userStore();

  const userColumns = [{
    dataField: 'email',
    text: 'Email',
  }, {
    dataField: 'username',
    text: 'Họ Tên',
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
    dataField: 'balance',
    text: 'Tài khoản',
      formatter: (cell, row) => {
        if (cell)
            return cell.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
          return '-';
    }
  }];
  
  useEffect(() => {
    getList(1, LIMIT);
  }, [])

  const paginationOption = {
    page: page,
    totalSize: total,
    showTotal: true,
    alwaysShowAllBtns: true
  };

  const onTableChange = (_, { page }) => {
    getList(page, LIMIT);
  }

  const NoDataIndication = () => (
    <div className="spinner">
      <div className="rect1" />
      <div className="rect2" />
      <div className="rect3" />
      <div className="rect4" />
      <div className="rect5" />
    </div>
  );
    
  return (
    <Layout>
        <div className="block block-rounded block-mode-loading-oneui">
        <div className="block-header block-header-default">
            <h3 className="block-title">Danh sách người dùng</h3>
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
            remote
            keyField='id'
            data={users}
            columns={userColumns}
            pagination={paginationFactory(paginationOption)}
            onTableChange={ onTableChange }
            striped
            hover
            condensed
            noDataIndication={ () => <NoDataIndication /> }
            />
        </div>
        </div>
    </Layout>
  )
}

export default IndexPage
