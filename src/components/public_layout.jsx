import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Layout = (props) => {
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
        <div className="content">{props.children}</div>
      </main>

      <footer id="page-footer" className="bg-white">
        <div className="content py-3">
          <div className="row font-size-sm">
            <div className="col-sm-6 order-sm-2 py-1 text-center text-sm-right">
              <a
                href="http://www.facebook.com/groups/kiemtienonlinepacodo/"
                className="btn btn-sm btn-primary px-4"
                target="_blank"
                rel="noreferrer"
              >Tham gia nhóm FACEBOOK
              </a>
            </div>
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
