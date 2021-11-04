import React, { useEffect } from 'react'
import Layout from 'components/admin_layout'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import depositStore from 'stores/deposit';
import Swal from 'sweetalert2'

const LIMIT = 10;

const IndexPage = (props) => {
    const { deposits, getList, total, page, verify, rejectDeposit } = depositStore();
    const { type, label } = props;

  const depositColumns = [{
    dataField: 'id',
    text: 'ID',
    hidden: true
  }, {
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
    dataField: 'message',
    text: 'Tin nhắn',
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
      if (row.verified === 0)
        return <span>
            <button className="mr-2"
              data-toggle="tooltip" data-placement="left"
              title="Edit"
              onClick={() => showVerifyConfirmDialog(row)}
            >
            <i className="fa fa-fw fa-check"></i>
          </button>
          <button data-toggle="tooltip" data-placement="left" title="Remove"
            onClick={() => showDeleteConfirmDialog(row)}
          >
              <i className="fa fa-fw fa-trash-alt"></i>
          </button>
        </span>;
      return "Đã duyệt";
    }
  }];
  
  useEffect(() => {
    getList(type, 1, LIMIT);
  }, [])

  const paginationOption = {
    page: page,
    totalSize: total,
    showTotal: true,
    alwaysShowAllBtns: true
  };

  const onTableChange = (_, { page }) => {
    getList(type, page, LIMIT);
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

  const showVerifyConfirmDialog = (row) => {
    const { id, bank_id, bank_name, bank_location, bank_user, value } = row;
    Swal.fire({
      title: 'Bạn có chắc duyệt lệnh này?',
      html: `
        <p class="text-left text-default-darker"><span class="font-w600">STK</span>: ${bank_id} </p>
        <p class="text-left text-default-darker"><span class="font-w600">Tên ngân hàng</span>: ${bank_name} </p>
        <p class="text-left text-default-darker"><span class="font-w600">Chi nhánh</span>: ${bank_location} </p>
        <p class="text-left text-default-darker"><span class="font-w600">Chủ khoản</span>: ${bank_user} </p>
        <p class="text-left text-default-darker"><span class="font-w600">Giá trị</span>: ${value.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})} </p>
      `
      ,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Chấp nhận!'
    }).then((result) => {
      if (result.isConfirmed) {
        verify(id).then((value) => {
          if (value) {
            Swal.fire(
              'Thành công!',
              'Lệnh duyệt thành công',
              'success'
            )
          }
        })
      }
    })
  }

  const showDeleteConfirmDialog = (row) => {
    const { id, bank_id, bank_name, bank_location, bank_user, value } = row;
    Swal.fire({
      title: 'Bạn có chắc xóa lệnh này?',
      html: `
          <p class="text-default-darker"><span class="font-w600">STK</span>: ${bank_id} </p>
          <p class="text-default-darker"><span class="font-w600">Tên ngân hàng</span>: ${bank_name} </p>
          <p class="text-default-darker"><span class="font-w600">Chi nhánh</span>: ${bank_location} </p>
          <p class="text-default-darker"><span class="font-w600">Chủ khoản</span>: ${bank_user} </p>
          <p class="text-default-darker"><span class="font-w600">Giá trị</span>: ${value.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})} </p>
        `,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Chấp nhận!'
    }).then((result) => {
      if (result.isConfirmed) {
        rejectDeposit(id).then((value) => {
          if (value) {
            Swal.fire(
              'Thành công!',
              'Xóa lệnh thành công',
              'success'
            )
          }
        })
      }
    })
  }

  return (
    <Layout>
        <div className="block block-rounded block-mode-loading-oneui">
        <div className="block-header block-header-default">
                  <h3 className="block-title">Danh sách lệnh {label }</h3>
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
            data={deposits}
            columns={depositColumns}
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
