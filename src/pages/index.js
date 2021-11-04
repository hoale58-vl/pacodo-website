import React from 'react'
import Layout from 'components/layout'
import userStore from 'stores/user';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

const IndexPage = () => {
  const { userInfo } = userStore();

  const order = () => {
    return '-';
  } 

  const depositedUser = () => {
    if (userInfo) {
      return `${userInfo.affiliate.filter(
        affiliate => affiliate.deposit > 0
      ).length}/${userInfo.affiliate.length}`
    }
    return '-';
  }
  
  const undepositedUser = () => {
    if (userInfo) {
      return `${userInfo.affiliate.filter(
        affiliate => affiliate.deposit === 0
      ).length}/${userInfo.affiliate.length}`
    }
    return '-';
  }
  
  const income = () => {
    return '-';
  }
  
  const userColumns = [{
    dataField: 'email',
    text: 'Email',
  }, {
    dataField: 'avatar',
    text: 'Avatar',
    formatter: (cell, row) => {
      return <img className="img-avatar img-avatar32" src="/media/avatars/avatar13.jpg" alt="" />
    }
  }, {
    dataField: 'deposited',
    text: 'Đã nạp',
    formatter: (cell, row) => {
      if (cell) return <i className="fa fa-fw fa-check-circle"></i>;
      return "";
    }
    }];
  
  const users = []
  
  // const users = [...Array(10).keys()].map(ele => {
  //   return {
  //     email: `lvhoa${ele}@gmail.com`,
  //     avatar: '/media/avatars/avatar13.jpg',
  //     deposited: ele % 2 === 0
  //   }
  // })

  return (
    <Layout>
      <div className="row">
        <div className="col-6 col-md-3 col-lg-6 col-xl-3">
          <a className="block block-rounded block-link-pop" href>
            <div className="block-content block-content-full">
              <div className="font-size-sm font-w600 text-uppercase text-muted">Đơn hàng</div>
              <div className="font-size-h2 font-w400 text-dark">{order() }</div>
            </div>
          </a>
        </div>
        <div className="col-6 col-md-3 col-lg-6 col-xl-3">
          <a className="block block-rounded block-link-pop" href>
            <div className="block-content block-content-full">
              <div className="font-size-sm font-w600 text-uppercase text-muted">Đã nạp</div>
              <div className="font-size-h2 font-w400 text-dark">{depositedUser()}</div>
            </div>
          </a>
        </div>
        <div className="col-6 col-md-3 col-lg-6 col-xl-3">
          <a className="block block-rounded block-link-pop" href>
            <div className="block-content block-content-full">
              <div className="font-size-sm font-w600 text-uppercase text-muted">Chưa nạp</div>
              <div className="font-size-h2 font-w400 text-dark">{undepositedUser()}</div>
            </div>
          </a>
        </div>
        <div className="col-6 col-md-3 col-lg-6 col-xl-3">
          <a className="block block-rounded block-link-pop" href>
            <div className="block-content block-content-full">
              <div className="font-size-sm font-w600 text-uppercase text-muted">Doanh thu</div>
              <div className="font-size-h2 font-w400 text-dark">{income() }</div>
            </div>
          </a>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6">
          <div className="block block-rounded block-mode-loading-oneui">
            <div className="block-header block-header-default">
              <h3 className="block-title">Đơn hàng</h3>
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
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="block block-rounded block-mode-loading-oneui">
            <div className="block-header block-header-default">
              <h3 className="block-title">Người dùng đã giới thiệu</h3>
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
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
