import React, { useEffect } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import userStore from 'stores/user';
import { navigate } from "gatsby";

const Layout = (props) => {
  const { logout, accessToken, email, getUser, isAdmin } = userStore();

  const onLogoutClick = () => {
    logout();
    navigate("/signin");
  }

  useEffect(() => {
    if (!accessToken) {
      navigate("/signin");
    } else if (!isAdmin) {
      navigate("/");
    }

    getUser();
  }, [])

  return (
    <div id="page-container" className="page-header-dark main-content-boxed">
      <ToastContainer />
      <header id="page-header">
        <div className="content-header">
          <div className="d-flex align-items-center">
            <a className="font-w600 font-size-h5 tracking-wider text-dual mr-3" href="/">
              <img className="mr-4" style={{ height: 40 }} src="/media/logo.png" alt="" />
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
                  src="/media/avatars/avatar10.jpg"
                  alt="Header Avatar"
                  style={{ width: 21 }}
                />
                <span className="d-none d-sm-inline-block ml-1">{email}</span>
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
                    src="/media/avatars/avatar10.jpg"
                    alt=""
                  />
                  <p className="mt-2 mb-0 text-white font-w500">{email}</p>
                </div>
                <div className="p-2">
                  <button
                    className="
                      dropdown-item
                      d-flex
                      align-items-center
                      justify-content-between
                    "
                    onClick={ onLogoutClick }
                  >
                    <span className="font-size-sm font-w500">????ng xu???t</span>
                  </button>
                </div>
              </div>
            </div>
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
                data-toggle="collapse"
                data-target="#navigation"
                data-class="d-none"
              >
                Menu
                <i className="fa fa-bars"></i>
              </button>
            </div>

            <div id="navigation" className="collapse d-lg-block mt-2 mt-lg-0">
              <ul className="nav-main nav-main-horizontal nav-main-hover">
                <li className="nav-main-item">
                  <a className="nav-main-link active" href="/admin">
                    <i className="nav-main-link-icon si si-compass"></i>
                    <span className="nav-main-link-name">Trang ch???</span>
                  </a>
                </li>
                <li className="nav-main-item">
                  <a className="nav-main-link active" href="/admin/deposits">
                    <i className="nav-main-link-icon si si-arrow-up"></i>
                    <span className="nav-main-link-name">N???p ti???n</span>
                  </a>
                </li>
                <li className="nav-main-item">
                  <a className="nav-main-link active" href="/admin/withdraws">
                    <i className="nav-main-link-icon si si-arrow-down"></i>
                    <span className="nav-main-link-name">R??t ti???n</span>
                  </a>
                </li>
                <li className="nav-main-item">
                  <a className="nav-main-link active" href="/admin/users">
                    <i className="nav-main-link-icon si si-people"></i>
                    <span className="nav-main-link-name">Ng?????i d??ng</span>
                  </a>
                </li>
                <li className="nav-main-item">
                  <a className="nav-main-link active" href="/admin/campaign">
                    <i className="nav-main-link-icon si si-layers"></i>
                    <span className="nav-main-link-name">Chi???n d???ch</span>
                  </a>
                </li>
                <li className="nav-main-item">
                  <a className="nav-main-link active" href="/admin/orders">
                    <i className="nav-main-link-icon si si-docs"></i>
                    <span className="nav-main-link-name">????n h??ng</span>
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
            <div className="col-sm-6 order-sm-1 py-1 text-center text-sm-left">
              <p className="font-w600">
                Pacodo
              </p>
              &copy; <span data-toggle="year-copy">2021</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
