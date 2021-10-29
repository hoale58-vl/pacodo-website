import React from 'react'
import Layout from 'components/layout'

const IndexPage = () => {
  return (
    <Layout>
      <div className="row">
        <div className="col-6 col-md-3 col-lg-6 col-xl-3">
          <a className="block block-rounded block-link-pop" href>
            <div className="block-content block-content-full">
              <div className="font-size-sm font-w600 text-uppercase text-muted">Đơn hàng</div>
              <div className="font-size-h2 font-w400 text-dark">120,580</div>
            </div>
          </a>
        </div>
        <div className="col-6 col-md-3 col-lg-6 col-xl-3">
          <a className="block block-rounded block-link-pop" href>
            <div className="block-content block-content-full">
              <div className="font-size-sm font-w600 text-uppercase text-muted">Đã nạp</div>
              <div className="font-size-h2 font-w400 text-dark">340/380</div>
            </div>
          </a>
        </div>
        <div className="col-6 col-md-3 col-lg-6 col-xl-3">
          <a className="block block-rounded block-link-pop" href>
            <div className="block-content block-content-full">
              <div className="font-size-sm font-w600 text-uppercase text-muted">Chưa nạp</div>
              <div className="font-size-h2 font-w400 text-dark">40/380</div>
            </div>
          </a>
        </div>
        <div className="col-6 col-md-3 col-lg-6 col-xl-3">
          <a className="block block-rounded block-link-pop" href>
            <div className="block-content block-content-full">
              <div className="font-size-sm font-w600 text-uppercase text-muted">Doanh thu</div>
              <div className="font-size-h2 font-w400 text-dark">$100,000</div>
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
                <button type="button" className="btn-block-option">
                  <i className="si si-settings"></i>
                </button>
              </div>
            </div>
            <div className="block-content p-0 text-center">
              <div className="pt-3" style={{ height: 360 }}>
                <canvas className="js-chartjs-dashboard-earnings"></canvas>
              </div>
            </div>
          </div>
        </div>

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
                <button type="button" className="btn-block-option">
                  <i className="si si-settings"></i>
                </button>
              </div>
            </div>
            <div className="block-content block-content-full">
              <table
                className="
                      table
                      table-striped
                      table-hover
                      table-borderless
                      table-vcenter
                      font-size-sm
                      mb-0
                    "
              >
                <thead>
                  <tr className="text-uppercase">
                    <th className="font-w700" style={{ width: 80 }}>
                      ID
                    </th>
                    <th className="d-none d-sm-table-cell font-w700 text-center" style={{ width: 100 }}>
                      Photo
                    </th>
                    <th className="font-w700">Name</th>
                    <th className="d-none d-sm-table-cell font-w700 text-center" style={{ width: 80 }}>
                      Orders
                    </th>
                    <th className="font-w700 text-center" style={{ width: 60 }}>
                      Edit
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span className="font-w600">#01368</span>
                    </td>
                    <td className="d-none d-sm-table-cell text-center">
                      <img className="img-avatar img-avatar32" src="/assets/media/avatars/avatar13.jpg" alt="" />
                    </td>
                    <td className="font-w600">Jose Mills</td>
                    <td className="d-none d-sm-table-cell text-center">
                      <a className="link-fx font-w600" href>
                        5
                      </a>
                    </td>
                    <td className="text-center">
                      <a href data-toggle="tooltip" data-placement="left" title="Edit">
                        <i className="fa fa-fw fa-pencil-alt"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="font-w600">#01368</span>
                    </td>
                    <td className="d-none d-sm-table-cell text-center">
                      <img className="img-avatar img-avatar32" src="/assets/media/avatars/avatar7.jpg" alt="" />
                    </td>
                    <td className="font-w600">Danielle Jones</td>
                    <td className="d-none d-sm-table-cell text-center">
                      <a className="link-fx font-w600" href>
                        14
                      </a>
                    </td>
                    <td className="text-center">
                      <a href data-toggle="tooltip" data-placement="left" title="Edit">
                        <i className="fa fa-fw fa-pencil-alt"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="font-w600">#01368</span>
                    </td>
                    <td className="d-none d-sm-table-cell text-center">
                      <img className="img-avatar img-avatar32" src="/assets/media/avatars/avatar12.jpg" alt="" />
                    </td>
                    <td className="font-w600">Jack Estrada</td>
                    <td className="d-none d-sm-table-cell text-center">
                      <a className="link-fx font-w600" href>
                        15
                      </a>
                    </td>
                    <td className="text-center">
                      <a href data-toggle="tooltip" data-placement="left" title="Edit">
                        <i className="fa fa-fw fa-pencil-alt"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="font-w600">#01368</span>
                    </td>
                    <td className="d-none d-sm-table-cell text-center">
                      <img className="img-avatar img-avatar32" src="/assets/media/avatars/avatar1.jpg" alt="" />
                    </td>
                    <td className="font-w600">Helen Jacobs</td>
                    <td className="d-none d-sm-table-cell text-center">
                      <a className="link-fx font-w600" href>
                        36
                      </a>
                    </td>
                    <td className="text-center">
                      <a href data-toggle="tooltip" data-placement="left" title="Edit">
                        <i className="fa fa-fw fa-pencil-alt"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="font-w600">#01368</span>
                    </td>
                    <td className="d-none d-sm-table-cell text-center">
                      <img className="img-avatar img-avatar32" src="/assets/media/avatars/avatar16.jpg" alt="" />
                    </td>
                    <td className="font-w600">Albert Ray</td>
                    <td className="d-none d-sm-table-cell text-center">
                      <a className="link-fx font-w600" href>
                        3
                      </a>
                    </td>
                    <td className="text-center">
                      <a href data-toggle="tooltip" data-placement="left" title="Edit">
                        <i className="fa fa-fw fa-pencil-alt"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="font-w600">#01368</span>
                    </td>
                    <td className="d-none d-sm-table-cell text-center">
                      <img className="img-avatar img-avatar32" src="/assets/media/avatars/avatar7.jpg" alt="" />
                    </td>
                    <td className="font-w600">Amber Harvey</td>
                    <td className="d-none d-sm-table-cell text-center">
                      <a className="link-fx font-w600" href>
                        1
                      </a>
                    </td>
                    <td className="text-center">
                      <a href data-toggle="tooltip" data-placement="left" title="Edit">
                        <i className="fa fa-fw fa-pencil-alt"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="font-w600">#01368</span>
                    </td>
                    <td className="d-none d-sm-table-cell text-center">
                      <img className="img-avatar img-avatar32" src="/assets/media/avatars/avatar9.jpg" alt="" />
                    </td>
                    <td className="font-w600">Ryan Flores</td>
                    <td className="d-none d-sm-table-cell text-center">
                      <a className="link-fx font-w600" href>
                        12
                      </a>
                    </td>
                    <td className="text-center">
                      <a href data-toggle="tooltip" data-placement="left" title="Edit">
                        <i className="fa fa-fw fa-pencil-alt"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
