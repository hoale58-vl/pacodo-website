import React from 'react'
import Layout from 'components/admin_layout'

const IndexPage = () => {
  return (
    <Layout>
      <div className="row">
        <div className="col-6 col-md-3 col-lg-6 col-xl-3">
          <a className="block block-rounded block-link-pop" href>
            <div className="block-content block-content-full">
              <div className="font-size-sm font-w600 text-uppercase text-muted">Đơn hàng</div>
              <div className="font-size-h2 font-w400 text-dark">-</div>
            </div>
          </a>
        </div>
        <div className="col-6 col-md-3 col-lg-6 col-xl-3">
          <a className="block block-rounded block-link-pop" href>
            <div className="block-content block-content-full">
              <div className="font-size-sm font-w600 text-uppercase text-muted">Đã nạp</div>
              <div className="font-size-h2 font-w400 text-dark">-</div>
            </div>
          </a>
        </div>
        <div className="col-6 col-md-3 col-lg-6 col-xl-3">
          <a className="block block-rounded block-link-pop" href>
            <div className="block-content block-content-full">
              <div className="font-size-sm font-w600 text-uppercase text-muted">Chưa nạp</div>
              <div className="font-size-h2 font-w400 text-dark">-</div>
            </div>
          </a>
        </div>
        <div className="col-6 col-md-3 col-lg-6 col-xl-3">
          <a className="block block-rounded block-link-pop" href>
            <div className="block-content block-content-full">
              <div className="font-size-sm font-w600 text-uppercase text-muted">Doanh thu đơn hàng</div>
              <div className="font-size-h2 font-w400 text-dark">-</div>
            </div>
          </a>
        </div>
        <div className="col-6 col-md-3 col-lg-6 col-xl-3">
          <a className="block block-rounded block-link-pop" href>
            <div className="block-content block-content-full">
              <div className="font-size-sm font-w600 text-uppercase text-muted">Doanh thu đã nạp</div>
              <div className="font-size-h2 font-w400 text-dark">-</div>
            </div>
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
