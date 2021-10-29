import React from 'react'
import Swal from 'sweetalert2'

const swalWithBootstrapButtons = Swal.mixin({
  buttonsStyling: false,
  customClass: {
    confirmButton: 'btn btn-success m-1',
    cancelButton: 'btn btn-danger m-1',
    input: 'form-control',
  },
})

const Layout = (props) => {
  const showDepositDialog = () => {
    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        text: 'You will not be able to recover this imaginary file!',
        icon: 'warning',
        showCancelButton: true,
        customClass: {
          confirmButton: 'btn btn-danger m-1',
          cancelButton: 'btn btn-secondary m-1',
        },
        confirmButtonText: 'Yes, delete it!',
        html: false,
        preConfirm: (e) => {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve()
            }, 50)
          })
        },
      })
      .then((result) => {
        if (result.value) {
          swalWithBootstrapButtons.fire('Deleted!', 'Your imaginary file has been deleted.', 'success')
          // result.dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
        } else if (result.dismiss === 'cancel') {
          swalWithBootstrapButtons.fire('Cancelled', 'Your imaginary file is safe :)', 'error')
        }
      })
  }

  const showWithdrawDialog = showDepositDialog

  return (
    <div id="page-container" className="page-header-dark main-content-boxed">
      <header id="page-header">
        <div className="content-header">
          <div className="d-flex align-items-center">
            <a className="font-w600 font-size-h5 tracking-wider text-dual mr-3" href="/">
              <img className="mr-4" style={{ height: 40 }} src="/assets/media/logo.png" alt="" />
              <span className="font-w400">Pacodo</span>
            </a>
          </div>

          <div className="d-flex align-items-center">
            <button
              type="button"
              className="btn btn-sm btn-dual d-md-none"
              data-toggle="layout"
              data-action="header_search_on"
            >
              <i className="fa fa-fw fa-search"></i>
            </button>

            <div className="dropdown d-inline-block ml-2">
              <button
                type="button"
                className="btn btn-sm btn-dual"
                id="page-header-user-dropdown"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  className="rounded"
                  src="/assets/media/avatars/avatar10.jpg"
                  alt="Header Avatar"
                  style={{ width: 21 }}
                />
                <span className="d-none d-sm-inline-block ml-1">Adam</span>
                <i className="fa fa-fw fa-angle-down d-none d-sm-inline-block"></i>
              </button>
              <div
                className="
                  dropdown-menu dropdown-menu-md dropdown-menu-right
                  p-0
                  border-0
                "
                aria-labelledby="page-header-user-dropdown"
              >
                <div className="p-3 text-center bg-primary-dark rounded-top">
                  <img
                    className="img-avatar img-avatar48 img-avatar-thumb"
                    src="/assets/media/avatars/avatar10.jpg"
                    alt=""
                  />
                  <p className="mt-2 mb-0 text-white font-w500">Adam Smith</p>
                  <p className="mb-0 text-white-50 font-size-sm">Web Developer</p>
                </div>
                <div className="p-2">
                  <div className="block block-rounded">
                    <div className="block-content">
                      <h4>Ví</h4>
                      <p>9tr VND</p>
                      <div className="row mb-4">
                        <button type="button" className="btn btn-sm btn-danger" onClick={showDepositDialog}>
                          Nạp tiền
                        </button>
                        <button type="button" className="btn btn-sm btn-danger ml-auto" onClick={showWithdrawDialog}>
                          Rút tiền
                        </button>
                      </div>
                    </div>
                  </div>
                  <a
                    className="
                      dropdown-item
                      d-flex
                      align-items-center
                      justify-content-between
                    "
                    href="/profile"
                  >
                    <span className="font-size-sm font-w500">Hồ sơ</span>
                  </a>
                  <div role="separator" className="dropdown-divider"></div>
                  <a
                    className="
                      dropdown-item
                      d-flex
                      align-items-center
                      justify-content-between
                    "
                    href="/signin"
                  >
                    <span className="font-size-sm font-w500">Đăng xuất</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="page-header-search" className="overlay-header bg-white">
          <div className="content-header">
            <form className="w-100" action="bd_search.html" method="POST">
              <div className="input-group">
                <div className="input-group-prepend">
                  <button
                    type="button"
                    className="btn btn-alt-danger"
                    data-toggle="layout"
                    data-action="header_search_off"
                  >
                    <i className="fa fa-fw fa-times-circle"></i>
                  </button>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search or hit ESC.."
                  id="page-header-search-input"
                  name="page-header-search-input"
                />
              </div>
            </form>
          </div>
        </div>

        <div id="page-header-loader" className="overlay-header bg-primary-lighter">
          <div className="content-header">
            <div className="w-100 text-center">
              <i className="fa fa-fw fa-circle-notch fa-spin text-primary"></i>
            </div>
          </div>
        </div>
      </header>

      <main id="main-container">
        <div className="bg-white">
          <div className="content py-3">
            <div className="d-lg-none">
              <button
                type="button"
                className="
                  btn btn-block btn-alt-secondary
                  d-flex
                  justify-content-between
                  align-items-center
                "
                data-toggle="class-toggle"
                data-target="#main-navigation"
                data-class="d-none"
              >
                Menu
                <i className="fa fa-bars"></i>
              </button>
            </div>

            <div id="main-navigation" className="d-none d-lg-block mt-2 mt-lg-0">
              <ul className="nav-main nav-main-horizontal nav-main-hover">
                <li className="nav-main-item">
                  <a className="nav-main-link active" href="/">
                    <i className="nav-main-link-icon si si-compass"></i>
                    <span className="nav-main-link-name">Trang chủ</span>
                  </a>
                </li>
                <li className="nav-main-item">
                  <a className="nav-main-link active" href="/campaign">
                    <i className="nav-main-link-icon si si-layers"></i>
                    <span className="nav-main-link-name">Chiến dịch</span>
                  </a>
                </li>
                <li className="nav-main-item">
                  <a className="nav-main-link active" href="/affiliate">
                    <i className="nav-main-link-icon si si-people"></i>
                    <span className="nav-main-link-name">Giới thiệu bạn bè</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="content">{props.children}</div>
      </main>

      <footer id="page-footer" className="bg-white">
        <div className="content py-3">
          <div className="row font-size-sm">
            <div className="col-sm-6 order-sm-2 py-1 text-center text-sm-right">
              <button className="btn btn-sm btn-primary px-4">Tham gia nhóm ZALO</button>
            </div>
            <div className="col-sm-6 order-sm-1 py-1 text-center text-sm-left">
              <a className="font-w600" href>
                Pacodo
              </a>
              &copy; <span data-toggle="year-copy">2021</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
