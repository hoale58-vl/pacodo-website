import React from 'react'

const SigninPage = () => {
  return (
    <div id="page-container">
      <main id="main-container">
        <div className="hero-static d-flex align-items-center">
          <div className="w-100">
            <div className="bg-white">
              <div className="content content-full">
                <div className="row justify-content-center">
                  <div className="col-md-8 col-lg-6 col-xl-4 py-4">
                    <div className="text-center">
                      <img src="/assets/media/banner.png" alt="" style={{ width: 200 }} />
                      <h1 className="h4 mb-1">Đăng nhập</h1>
                    </div>

                    <form className="js-validation-signin" action="be_pages_auth_all.html" method="POST">
                      <div className="py-3">
                        <div className="form-group">
                          <input
                            type="text"
                            className="
                              form-control form-control-lg form-control-alt
                            "
                            id="login-username"
                            name="login-username"
                            placeholder="Email"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="
                              form-control form-control-lg form-control-alt
                            "
                            id="login-password"
                            name="login-password"
                            placeholder="Mật khẩu"
                          />
                        </div>
                        <div className="form-group">
                          <div
                            className="
                              d-md-flex
                              align-items-md-center
                              justify-content-md-between
                            "
                          >
                            <div className="custom-control custom-switch">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="login-remember"
                                name="login-remember"
                              />
                              <label className="custom-control-label font-w400" htmlFor="login-remember">
                                Ghi nhớ
                              </label>
                            </div>
                            <div className="py-2">
                              <a className="font-size-sm font-w500" href="op_auth_reminder2.html">
                                Quên mật khẩu
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group row justify-content-center mb-0">
                        <div className="col-md-6 col-xl-5">
                          <button type="submit" className="btn btn-block btn-primary">
                            <i className="fa fa-fw fa-sign-in-alt mr-1"></i> Đăng nhập
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="font-size-sm text-center text-muted py-3">
              <strong>Pacodo</strong> &copy;
              <span data-toggle="year-copy">2021</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default SigninPage
