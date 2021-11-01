import React from 'react'
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import userStore from 'stores/user';
import { navigate } from "gatsby";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
const LoginSchema = Yup.object().shape({
   password: Yup.string()
     .min(6, 'Mật khẩu tối thiểu 6 ký tự!')
     .required('Bắt buộc'),
   email: Yup.string().email('Email không hợp lệ').required('Bắt buộc'),
 });

const SigninPage = () => {
  const { login, accessToken, email, password, remember } = userStore();
  
  if (accessToken) {
      navigate("/");
    }

  return (
    <div id="page-container">
      <ToastContainer />
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

                    <Formik
                      initialValues= {{
                        email: email,
                        password: password,
                        remember: remember
                      }}
                      validationSchema={LoginSchema}
                      onSubmit={values => {
                        const { email, password, remember } = values;
                        login(email, password, remember);
                      }}
                    >
                      {({ errors, touched }) => (
                        <Form>
                          <div className="py-3">
                            <div className="form-group">
                              <Field
                                className="
                                  form-control form-control-lg form-control-alt
                                "
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Email"
                              />
                              {errors.email && touched.email ? (
                                <p className="text-danger">{errors.email}</p>
                              ) : null}
                            </div>
                            <div className="form-group">
                              <Field
                                type="password"
                                className="
                                  form-control form-control-lg form-control-alt
                                "
                                id="password"
                                name="password"
                                placeholder="Mật khẩu"
                              />
                              {errors.password && touched.password ? (
                                <p className="text-danger">{errors.password}</p>
                              ) : null}
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
                                  <Field
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="remember"
                                    name="remember"
                                  />
                                  <label className="custom-control-label font-w400" htmlFor="remember">
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
                        </Form>
                      )}
                    </Formik>
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
