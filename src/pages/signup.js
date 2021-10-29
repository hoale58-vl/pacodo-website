import React from 'react'

const SignupPage = () => {
  return (
    <div id="page-container">
      <main id="main-container">
        <div className="hero-static">
          <div className="content">
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-6 col-xl-4">
                <div className="block block-rounded block-themed mb-0">
                  <div className="block-header bg-primary-dark">
                    <h3 className="block-title">Tạo tài khoản</h3>
                    <div className="block-options">
                      <a
                        className="btn-block-option"
                        href="op_auth_signin.html"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Đăng nhập"
                      >
                        <i className="fa fa-sign-in-alt"></i>
                      </a>
                    </div>
                  </div>
                  <div className="block-content">
                    <div className="p-sm-3 px-lg-4 py-lg-5">
                      <h1 className="h2 mb-1">PACODO</h1>
                      <p className="text-muted">Điền những thông tin để đăng ký tài khoản mới.</p>

                      <form className="js-validation-signup" action="be_pages_auth_all.html" method="POST">
                        <div className="py-3">
                          <div className="form-group">
                            <input
                              type="email"
                              className="
                                form-control form-control-lg form-control-alt
                              "
                              id="signup-email"
                              name="signup-email"
                              placeholder="Email"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              className="
                                form-control form-control-lg form-control-alt
                              "
                              id="signup-phonenumber"
                              name="signup-phonenumber"
                              placeholder="Số điện thoại"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="password"
                              className="
                                form-control form-control-lg form-control-alt
                              "
                              id="signup-password"
                              name="signup-password"
                              placeholder="Mật khẩu"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="password"
                              className="
                                form-control form-control-lg form-control-alt
                              "
                              id="signup-password-confirm"
                              name="signup-password-confirm"
                              placeholder="Nhập lại mật khẩu"
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <div className="col-md-6 col-xl-5">
                            <button type="submit" className="btn btn-block btn-alt-success">
                              <i className="fa fa-fw fa-plus mr-1"></i> Đăng ký
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content content-full font-size-sm text-muted text-center">
            <strong>Pacodo</strong> &copy;
            <span data-toggle="year-copy"></span>
          </div>
        </div>
      </main>
    </div>
  )
}

export default SignupPage
