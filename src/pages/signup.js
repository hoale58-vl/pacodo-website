import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import userStore from 'stores/user';
import { navigate } from "gatsby";

const SignupSchema = Yup.object().shape({
   password: Yup.string()
     .min(6, 'Mật khẩu tối thiểu 6 ký tự!')
    .required('Bắt buộc'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Mật khẩu phải khớp'),
   email: Yup.string().email('Email không hợp lệ').required('Bắt buộc'),
});
 
const SignupPage = () => {
  const { signup, accessToken } = userStore();
  if (accessToken) {
      navigate("/");
    }

  return (
    <div id="page-container">
      <ToastContainer />
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
                        href="/signin"
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

                      <Formik
                        initialValues= {{
                          email: '',
                          password: '',
                          confirmPassword: ''
                        }}
                        validationSchema={SignupSchema}
                        onSubmit={values => {
                          const { email, password } = values;
                          signup(email, password).then(success => {
                            if (success) {
                              navigate("/signin");
                            }
                          });
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
                                <Field
                                  type="password"
                                  className="
                                    form-control form-control-lg form-control-alt
                                  "
                                  id="confirmPassword"
                                  name="confirmPassword"
                                  placeholder="Nhập lại mật khẩu"
                                />
                                {errors.confirmPassword && touched.confirmPassword ? (
                                  <p className="text-danger">{errors.confirmPassword}</p>
                                ) : null}
                              </div>
                            </div>
                            <div className="form-group row">
                              <div className="col-md-6 col-xl-5">
                                <button type="submit" className="btn btn-block btn-alt-success">
                                  <i className="fa fa-fw fa-plus mr-1"></i> Đăng ký
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
            </div>
          </div>
          <div className="content content-full font-size-sm text-muted text-center">
            <strong>Pacodo</strong> &copy;
            <span data-toggle="year-copy">2021</span>
          </div>
        </div>
      </main>
    </div>
  )
}

export default SignupPage
