import React from 'react'
import Layout from 'components/layout'

const CampaignPage = () => {
  return (
    <Layout>
      <div className="row text-center">
        {[...Array(10).keys()].map((ele) => (
          <div className="col-md-3" key={ele}>
            <div className="block block-rounded">
              <div className="block-content">
                <img
                  className="img-fluid mb-4"
                  alt="logo"
                  src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/6/hot-girl-nong-cung-euro-dot-mat-netizen-bang-body-sieu-nong-bong-1625568453512566491723.jpeg"
                />
                <h4>Mở tài khoản MBBank</h4>
                <p>Hoa hồng: 50k</p>
                <button type="button" className="btn btn-sm btn-danger mb-4 px-4">
                  Đăng ký
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default CampaignPage
