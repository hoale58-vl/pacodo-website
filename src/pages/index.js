import React, { useEffect } from 'react'
import Layout from 'components/layout'
import userStore from 'stores/user';
import orderStore from 'stores/order';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

const LIMIT = 10;

const IndexPage = () => {
  const { userInfo } = userStore();
  const { getList, orders, total, page } = orderStore();

  const order = () => {
    if (userInfo) {
      return userInfo.orders;
    }
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
    if (userInfo) {
      return userInfo.balance.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
    }
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
  
  useEffect(() => {
    getList(1, LIMIT);
  }, [])

  const paginationOrderOption = {
    page: page,
    totalSize: total,
    showTotal: true,
    alwaysShowAllBtns: true
  };

  const onOrderTableChange = (_, { page }) => {
    getList(page, LIMIT);
  }

  const orderColumns = [{
    dataField: 'id',
    text: 'ID',
    hidden: true
  },{
    dataField: 'transaction_id',
    text: 'Transaction ID',
  },  {
    dataField: 'campaign_name',
    text: 'Chiến dịch',
  }, {
    dataField: 'campaign_value',
    text: 'Hoa hồng',
      formatter: (cell, row) => {
        if (cell)
            return cell.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
          return '-';
    }
  }, {
    dataField: 'status',
    text: 'Trạng thái',
    formatter: (cell, row) => {
      if (cell === "approved") {
        return <i className="fa fa-fw fa-check text-success"></i>;
      } else if (cell === "pending") {
        return <i className="fa fa-fw fa-spinner text-info"></i>;
      }
      return <i className="fa fa-fw fa-times-circle text-danger"></i>;
    }
  }, {
    dataField: 'geo',
    text: 'VT địa lý',
  }, {
    dataField: 'created_at',
    text: 'Thời gian',
  }];
  
  const users = []

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
          <BootstrapTable
            remote
            keyField='id'
            data={orders}
            columns={orderColumns}
            pagination={paginationFactory(paginationOrderOption)}
            onTableChange={ onOrderTableChange }
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
