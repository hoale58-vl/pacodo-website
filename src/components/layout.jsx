import React, { useEffect } from 'react'
import Swal from 'sweetalert2'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import userStore from 'stores/user';
import { navigate } from "gatsby";
import EffectUtility from 'utilities/EffectUtility'
import { BASE_URL, ENDPOINT } from 'utilities/Endpoint'

const swalWithBootstrapButtons = Swal.mixin({
  buttonsStyling: false,
  customClass: {
    confirmButton: 'btn btn-success m-1',
    cancelButton: 'btn btn-danger m-1',
    input: 'form-control',
  },
})

const Layout = (props) => {
  const { logout, accessToken, getUser, userInfo, isAdmin, updateReferral } = userStore();
  const username = userInfo ? userInfo.username : '';

  const onLogoutClick = () => {
    logout();
    navigate("/signin");
  }

  useEffect(() => {
    if (!accessToken) {
      navigate("/signin");
    } else if (isAdmin) {
      navigate("/admin");
    }
    
    getUser();
  }, [])

  const showAddReferralDialog = () => {
    swalWithBootstrapButtons
        .fire({
          title: "Bổ sung người giới thiệu",
          html: `
          <div class="form-group mt-4 text-left">
            <label htmlFor="referralLink">Đường link giới thiệu</label>
            <input type="text"
              id="referralLink"
              class="form-control form-control-lg form-control-alt"
              placeholder="Link giới thiệu"
            >
          </div>
        `,
          confirmButtonText: 'Đồng ý',
          focusConfirm: false,
          showCancelButton: true,
          customClass: {
            confirmButton: 'btn btn-danger m-1',
            cancelButton: 'btn btn-secondary m-1',
          },
          preConfirm: () => {
            const referralLink = Swal.getPopup().querySelector('#referralLink').value;
            const regexpLink = /https?:\/\/[\w.:]+\/signup\?code=([\w\d]+)/;
            const match = referralLink.match(regexpLink);
            
            if (!referralLink || !match || match[1] === userInfo.referral_code) {
              Swal.showValidationMessage(`Vui lòng nhập giá trị hợp lệ`)
            } else {
              return { code: match[1] }
            }
          }
        })
        .then((result) => {
          if (result.value) {
            updateReferral(result.value).then((value) => {
              if (value) {
                Swal.fire(
                  'Thành công!',
                  'Đã cập nhật người giới thiệu',
                  'success'
                )
                getUser();
              } else {
                Swal.fire(
                  'Lỗi!',
                  'Cập nhật thất bại',
                  'error'
                )
              }
            })
          }
        });
  }

  const getBalance = () => {
    if (userInfo) {
      return userInfo.balance.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
    }
    return '-';
  }

  const handleDeposit = (value, message) => {
    EffectUtility.postToModel(
      Object, BASE_URL + ENDPOINT.DEPOSIT, {
      value: value,
      message: message
    }).then((response) => {
      const { success } = response;
      if (success) {
        swalWithBootstrapButtons.fire('Thành công!', 'Vui lòng đợi admin phê duyệt lệnh', 'success')
        if (value < 0) {
          getUser();
        }
      }
    })
  }

  const showDialog = (title, callback) => {
    if (userInfo.bank_id && userInfo.bank_name && userInfo.bank_location && userInfo.bank_user){
      swalWithBootstrapButtons
        .fire({
          title: title,
          html: `
          <div class="form-group text-left">
            <label htmlFor="deposit">Giá trị</label>
            <input type="number"
              id="deposit"
              class="form-control form-control-lg form-control-alt mt"
              placeholder="Giá trị (VND)"
              step="10000"
              min="100000"
            >
          </div>
          
          <div class="form-group mt-4 text-left">
            <label htmlFor="deposit">Tin nhắn</label>
            <input type="text"
              id="message"
              class="form-control form-control-lg form-control-alt"
              placeholder="Tin nhắn cho admin (Không bắt buộc)"
            >
          </div>
        `,
          confirmButtonText: 'Đồng ý',
          focusConfirm: false,
          showCancelButton: true,
          customClass: {
            confirmButton: 'btn btn-danger m-1',
            cancelButton: 'btn btn-secondary m-1',
          },
          preConfirm: () => {
            const deposit = Swal.getPopup().querySelector('#deposit').value;
            const message = Swal.getPopup().querySelector('#message').value;
            if (!deposit || deposit <= 0 || deposit % 1000 !== 0) {
              Swal.showValidationMessage(`Vui lòng nhập giá trị hợp lệ`)
            } else {
              return { deposit: deposit, message: message }
            }
          }
        })
        .then((result) => {
          if (result.value && result.value.deposit) {
            callback(result.value.deposit, result.value.message);
          }
        });
    } else {
      Swal.fire(
          'Lỗi!',
          'Vui lòng bổ sung thông tin hồ sơ',
          'error'
        )
    }
  }

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

          <div className="d-flex align-items-center">
            <div className="dropdown d-inline-block ml-2">
              <button
                type="button"
                className="btn btn-sm btn-dual"
                id="page-header-user-dropdown"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  className="rounded"
                  src="/media/avatars/avatar10.jpg"
                  alt="Header Avatar"
                  style={{ width: 21 }}
                />
                <span className="d-none d-sm-inline-block ml-1">{username}</span>
                <i className="fa fa-fw fa-angle-down d-none d-sm-inline-block"></i>
              </button>
              <div
                className="
                  dropdown-menu dropdown-menu-md dropdown-menu-right
                  p-0
                  border-0
                "
                aria-labelledby="page-header-user-dropdown"
              >
                <div className="p-3 text-center bg-primary-dark rounded-top">
                  <img
                    className="img-avatar img-avatar48 img-avatar-thumb"
                    src="/media/avatars/avatar10.jpg"
                    alt=""
                  />
                  <p className="mt-2 mb-0 text-white font-w500">{username}</p>
                </div>
                <div className="p-2">
                  <div className="block block-rounded">
                    <div className="block-content">
                      <h4>Ví</h4>
                      <p>{getBalance()}</p>
                      <div className="row mb-4">
                        <button type="button" className="btn btn-sm btn-danger" onClick={() => showDialog(
                          "Tạo lệnh nạp",
                          (value, message) => handleDeposit(value, message)
                        )}>
                          Nạp tiền
                        </button>
                        <button type="button" className="btn btn-sm btn-danger ml-auto" onClick={() => showDialog(
                          "Tạo lệnh rút",
                          (value, message) => handleDeposit(-value, message)
                        )}>
                          Rút tiền
                        </button>
                      </div>
                    </div>
                  </div>
                  <a
                    className="
                      dropdown-item
                      d-flex
                      align-items-center
                      justify-content-between
                    "
                    href="/profile"
                  >
                    <span className="font-size-sm font-w500">Hồ sơ</span>
                  </a>
                  <button
                    className="
                      dropdown-item
                      d-flex
                      align-items-center
                      justify-content-between
                    "
                    onClick={showAddReferralDialog}
                    disabled={!userInfo || userInfo.ref_user_id}
                  >
                    <span className="font-size-sm font-w500">Bổ sung người giới thiệu</span>
                  </button>
                  <div role="separator" className="dropdown-divider"></div>
                  <button
                    className="
                      dropdown-item
                      d-flex
                      align-items-center
                      justify-content-between
                    "
                    onClick={ onLogoutClick }
                  >
                    <span className="font-size-sm font-w500">Đăng xuất</span>
                  </button>
                </div>
              </div>
            </div>
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
        <div className="bg-white">
          <div className="content py-3">
            <div className="d-lg-none">
              <button
                type="button"
                className="
                  btn btn-block btn-alt-secondary
                  d-flex
                  justify-content-between
                  align-items-center
                "
                data-toggle="class-toggle"
                data-target="#main-navigation"
                data-class="d-none"
              >
                Menu
                <i className="fa fa-bars"></i>
              </button>
            </div>

            <div id="main-navigation" className="d-none d-lg-block mt-2 mt-lg-0">
              <ul className="nav-main nav-main-horizontal nav-main-hover">
                <li className="nav-main-item">
                  <a className="nav-main-link active" href="/">
                    <i className="nav-main-link-icon si si-compass"></i>
                    <span className="nav-main-link-name">Trang chủ</span>
                  </a>
                </li>
                <li className="nav-main-item">
                  <a className="nav-main-link active" href="/campaign">
                    <i className="nav-main-link-icon si si-layers"></i>
                    <span className="nav-main-link-name">Chiến dịch</span>
                  </a>
                </li>
                <li className="nav-main-item">
                  <a className="nav-main-link active" href="/affiliate">
                    <i className="nav-main-link-icon si si-people"></i>
                    <span className="nav-main-link-name">Giới thiệu bạn bè</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

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
