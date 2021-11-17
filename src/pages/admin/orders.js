import React, { useEffect, useState } from 'react'
import Layout from 'components/admin_layout'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import orderStore from 'stores/order';

const LIMIT = 10;

const IndexPage = () => {
  const { orders, getAll, total, page } = orderStore();
  const [expanded, setExpanded] = useState([0, 1]);
  const orderColumns = [{
    dataField: 'id',
    text: 'ID',
    hidden: true
  },{
    dataField: 'transaction_id',
    text: 'Transaction ID',
    hidden: true
  },{
    dataField: 'email',
    text: 'Email',
  }, {
    dataField: 'referral_code',
    text: 'Code',
  }, {
    dataField: 'campaign_name',
    text: 'Chiến dịch',
  }, {
    dataField: 'campaign_value',
    text: 'Hoa hồng',
      formatter: (cell) => {
        if (cell)
            return cell.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
          return '-';
    }
  }, {
    dataField: 'status',
    text: 'Trạng thái',
    formatter: (cell) => {
      if (cell === "approved") {
        return <i className="fa fa-fw fa-check text-success"></i>;
      } else if (cell === "pending") {
        return <i className="fa fa-fw fa-spinner text-info"></i>;
      }
      return <i className="fa fa-fw fa-times-circle text-danger"></i>;
    }
  }, {
    dataField: 'created_at',
    text: 'Thời gian',
  }];
  
  useEffect(() => {
    getAll(1, LIMIT);
  }, [])

  const paginationOption = {
    page: page,
    totalSize: total,
    showTotal: true,
    alwaysShowAllBtns: true
  };

  const onTableChange = (_, { page }) => {
    getAll(page, LIMIT);
  }

  const handleOnExpand = (row, isExpand) => {
    if (isExpand) {
      setExpanded([...expanded, row.id]);
    } else {
      setExpanded(expanded.filter(x => x !== row.id));
    }
  }

  const expandRow = {
    renderer: row => (
      <div>
        <p class="text-left text-default-darker"><span class="font-w600">TransactionID:</span> {row.transaction_id}</p>
        <p class="text-left text-default-darker"><span class="font-w600">Số tiền nhận từ net:</span> {row.payout.toLocaleString('it-IT', { style: 'currency', currency: row.offer_currency ? row.offer_currency : 'VND' })}</p>
        <p class="text-left text-default-darker"><span class="font-w600">VT địa lý:</span> {row.geo}</p>
      </div>
    ),
    expanded: expanded,
    onExpand: handleOnExpand
  };
    
  return (
    <Layout>
        <div className="block block-rounded block-mode-loading-oneui">
        <div className="block-header block-header-default">
            <h3 className="block-title">Danh sách đơn hàng</h3>
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
            keyField='transaction_id'
            data={orders}
            columns={orderColumns}
            pagination={paginationFactory(paginationOption)}
            onTableChange={ onTableChange }
            striped
            hover
            expandRow={ expandRow}
            condensed
            />
        </div>
        </div>
    </Layout>
  )
}

export default IndexPage
