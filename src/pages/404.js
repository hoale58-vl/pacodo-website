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
                    Chúng tôi xin lỗi, trang bạn đang tìm không tồn tại..
                  </h2>
                </div>
              </div>
            </div>
            <div className="content content-full text-muted">
              <a className="link-fx" href="/">
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
