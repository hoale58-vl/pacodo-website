import React from 'react'

const NotFoundPage = () => {
  return (
    <div id="page-container">
      <main id="main-container">
        <div className="hero">
          <div className="hero-inner text-center">
            <div className="bg-white">
              <div className="content content-full overflow-hidden">
                <div className="py-4">
                  <h1 className="display-1 font-w600 text-city">404</h1>
                  <h2 className="h4 font-w400 text-muted mb-5">
                    We are sorry but the page you are looking for was not found..
                  </h2>
                </div>
              </div>
            </div>
            <div className="content content-full text-muted">
              <p className="mb-1">Would you like to let us know about it?</p>
              <a className="link-fx" href="javascript:void(0)">
                Report it
              </a>{' '}
              or{' '}
              <a className="link-fx" href="be_pages_error_all.html">
                Go Back to Dashboard
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default NotFoundPage
