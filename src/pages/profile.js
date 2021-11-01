import React from 'react'
import Layout from 'components/layout'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { navigate } from "gatsby";
import userStore from 'stores/user';
import { toast } from 'react-toastify';

const ProfileSchema = Yup.object().shape({
    phone_number: Yup.string()
      .max(13, 'Số điện thoại không hợp lệ!')
      .required('Bắt buộc'),
    bank_id: Yup.string()
      .required('Bắt buộc'),
    bank_name: Yup.string()
      .required('Bắt buộc'),
    bank_location: Yup.string()
      .required('Bắt buộc'),
    bank_user: Yup.string()
      .required('Bắt buộc')
});

const CampaignPage = () => {
  const { updateUserProfile, userInfo } = userStore();

  return (
    <Layout>
      <Formik
        initialValues= {{
          phone_number: userInfo ? userInfo.phone_number : '',
          bank_id: userInfo && userInfo.bank_id ? userInfo.bank_id : '',
          bank_name: userInfo && userInfo.bank_name ? userInfo.bank_name : '',
          bank_location: userInfo && userInfo.bank_location ? userInfo.bank_location : '',
          bank_user: userInfo && userInfo.bank_user ? userInfo.bank_user : '',
        }}
        validationSchema={ProfileSchema}
        onSubmit={values => {
          updateUserProfile(values).then(success => {
            if (success) {
              toast.success("Cập nhật thành công!");
              setTimeout(() => navigate("/"), 1000);
            }
          });
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="py-3">
              <div className="form-group">
                <label htmlFor="phone_number">Số điện thoại</label>
                <Field
                  className="
                    form-control form-control-lg 
                  "
                  id="phone_number"
                  name="phone_number"
                  type="tel"
                  placeholder="Số điện thoại"
                />
                {errors.phone_number && touched.phone_number ? (
                  <p className="text-danger">{errors.phone_number}</p>
                ) : null}
              </div>
              
              <div className="form-group">
                <label htmlFor="bank_id">Số tài khoản</label>
                <Field
                  className="
                    form-control form-control-lg 
                  "
                  id="bank_id"
                  name="bank_id"
                  type="text"
                  placeholder="Số tài khoản"
                />
                {errors.bank_id && touched.bank_id ? (
                  <p className="text-danger">{errors.bank_id}</p>
                ) : null}
              </div>

              <div className="form-group">
                <label htmlFor="bank_name">Ngân hàng</label>
                <Field
                  className="
                    form-control form-control-lg 
                  "
                  id="bank_name"
                  name="bank_name"
                  type="text"
                  placeholder="Ngân hàng"
                />
                {errors.bank_name && touched.bank_name ? (
                  <p className="text-danger">{errors.bank_name}</p>
                ) : null}
              </div>

              <div className="form-group">
                <label htmlFor="bank_location">Chi nhánh</label>
                <Field
                  className="
                    form-control form-control-lg 
                  "
                  id="bank_location"
                  name="bank_location"
                  type="text"
                  placeholder="Chi nhánh"
                />
                {errors.bank_location && touched.bank_location ? (
                  <p className="text-danger">{errors.bank_location}</p>
                ) : null}
              </div>

              <div className="form-group">
                <label htmlFor="bank_user">Tên chủ khoản</label>
                <Field
                  className="
                    form-control form-control-lg 
                  "
                  id="bank_user"
                  name="bank_user"
                  type="tel"
                  placeholder="Tên chủ khoản"
                />
                {errors.bank_user && touched.bank_user ? (
                  <p className="text-danger">{errors.bank_user}</p>
                ) : null}
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-6 col-xl-5">
                <button type="submit" className="btn btn-block btn-alt-success">
                  <i className="fa fa-fw fa-plus mr-1"></i> Cập nhật
                </button>
              </div>
            </div>
        </Form>
        )}
      </Formik>
    </Layout>
  )
}

export default CampaignPage
