import React from 'react'
import Layout from 'components/layout'
import userStore from 'stores/user';
import { toast } from 'react-toastify';

const AffiliatePage = () => {
  const { userInfo } = userStore();

  const referralLink = () => {
    if (userInfo && typeof window !== `undefined`) {
      return `${window.location.origin}/signup?code=${userInfo.referral_code}`
    }
    return '-';
  }

  function copyReferralLink() {
    navigator.clipboard.writeText(referralLink());
    toast.success("Đã copy");
  }

  return (
    <Layout>
      <main id="main-container">
        <div className="hero-inner text-center">
          <div className="bg-white">
            <div className="content content-full overflow-hidden">
              <div className="py-4">
                <h2 className="display-3 font-w600 text-city">Giới thiệu bạn bè</h2>
                <p className="text-default-darker">
                  Hoa hồng giới thiệu người dùng mới <span className="font-w600">40%</span> và <span className="font-w600">5%</span> hoa hồng trọn đời.
                </p>
                <p className="text-default-darker w-50 m-auto">
                  <span className="font-w600 text-city">Lưu ý:</span> Chính sách hưởng hoa hồng trên chỉ áp dụng khi người dùng nạp tối thiểu <span className="font-w600">200000 VND</span> vào Ví khi đăng kí thành công tài khoản trên hệ thống.
                </p>
                <h2 className="h4 font-w400 text-muted my-4">Copy và gửi cho bạn bè đường link này</h2>
              </div>

              <div className="form-group row justify-content-center">
                <div className="col-sm-6 col-xl-3">
                  <div className="input-group input-group-lg">
                    <input
                      className="form-control form-control-alt"
                      type="text"
                      value={referralLink()}
                      disabled
                    />
                    <div className="input-group-append">
                      <button type="button" className="btn btn-alt-primary" onClick={copyReferralLink}>
                        <i className="fa fa-copy"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default AffiliatePage
