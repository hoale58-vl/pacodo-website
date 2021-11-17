import React, { useEffect } from 'react'
import offerStore from 'stores/offer';
import merchantStore from 'stores/merchant';
import { toast } from 'react-toastify';
import { copyToClipboard } from 'utilities/Misc';
import 'styles.scss';
import LoadingOverlay from 'react-loading-overlay';
import Layout from 'components/public_layout'

const LIMIT = 24;

const CouponPage = () => {
  const { offers, getList, page, merchant, setMerchant, link, setLink, loading } = offerStore();
  const { merchants, getMerchants } = merchantStore();

  function copyLink(offer) {
    copyToClipboard(offer.coupon_code);
    toast.success("Đã copy");
    setTimeout(() => window.open(offer.aff_link), 2000);
  }
  
  useEffect(() => {
    getMerchants();
    getList(1, LIMIT, merchant, link);
  }, [])

  const handleClickMerchant = (merchantId) => {
    setMerchant(merchantId);
    getList(1, LIMIT, merchantId, link);
  }

  return (
      <LoadingOverlay
        active={loading}
        spinner
        text='Đang tải danh sách...'
      >
    <Layout>
      <h5> Tìm kiếm </h5>
      <div className="input-group input-group-sm">
        <form onSubmit={(e)=> getList(1, LIMIT, merchant, link)} className="w-100">
          <div className="input-group">
            <input type="text"
              className="form-control form-control-alt bg-white"
              value={link}
              onChange={ (event) => setLink(event.target.value)}
              placeholder="Nhập link chi tiết để tìm kiếm mã coupon" />
              <div className="input-group-append"
                 style={{cursor: "pointer"}}
                onClick={() => getList(1, LIMIT, merchant, link)}>
                  <span className="input-group-text">
                      <i className="fa fa-fw fa-search"></i>
                  </span>
              </div>
          </div>
          <input type="submit"
            className="position-absolute"
            style={{left: -9999}}
            tabIndex="-1" />
          </form>
        </div>
      <hr />
      <h5> Nhà cung cấp nổi bật </h5>
      <div className="row text-center">
        {merchants && merchants.slice(0,4).map((_merchant) => (
          <div className="col-md-3" key={_merchant.id}>
            <div className=" position-relative" onClick={() => handleClickMerchant(_merchant.id)} style={{cursor: "pointer"}}>
              <img
                className="img-fluid mb-4"
                alt="logo"
                src={_merchant.logo}
                style={{
                  width:"200px",
                  height:"150px"
                }}
              />
              <div className="
                position-absolute mt-2
                px-2 rounded-left text-white
                bg-dark
                text-capitalize font-weight-bold
                "
                style={{
                  right: 0,
                  top: 0
                }}>
                {_merchant.total_offer} mã
              </div>
              </div>
            </div>
        ))}
      </div>
      <hr />
      <h5> Danh sách coupon </h5>
      
        <div className="row text-center">
          {/* {(!offers || offers.length === 0) && <div className="py-4">
            <h2 className="display-4 font-w600 text-city">Chưa có mã giảm giá nào</h2>
          </div>} */}

        {offers.map((offer) => (
          <div className="col-md-3" key={offer.id}>
            <div className="block block-rounded position-relative">
              <div className="
                position-absolute mt-2
                px-2 rounded-right text-white
                text-capitalize font-weight-bold
                "
                style={{
                  backgroundColor: offer.merchant === "shopee" ? "#ee4d2d" : (offer.merchant === "tikivn" ? "dodgerblue" : "deeppink")
                }}>
                {offer.merchant}
              </div>

              <div className="
                position-absolute mt-5
                px-2 rounded-right text-white
                bg-info
                text-capitalize font-weight-bold
                ">
                Còn lại: {offer.remain}%
              </div>

              <div className="block-content">
                <img
                  className="img-fluid mb-4"
                  alt="logo"
                  src={offer.image ? offer.image : "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty-300x240.jpg"}
                  style={{
                    width:"200px",
                    height:"150px"
                  }}
                />
                <h4 className="offerName">{offer.name}</h4>
                <p className="text-left offerDesc">{offer.content}</p>
                <p><span className="font-w600 ">{offer.time_left}</span> </p>
                <button rel="nofollow"
                  onClick={() => {
                    copyLink(offer);
                  }}
                  className="couponButton"
                  data-tooltip="Nhấn để copy và mở trang khuyến mãi"
                  data-position="top center">
                  <span className="codeText" rel="nofollow">{ offer.coupon_code}</span>
                  <span className="getCode">Lấy Mã</span>
                </button>
              </div>
            </div>
          </div>
        ))}
        
        </div>
          <div className="text-center py-4 align-items-center">
            <button className="mr-2"
              data-toggle="tooltip" data-placement="Previous"
                      title="Trang trước"
                      disabled={page === 1}
              onClick={() => getList(page - 1, LIMIT, merchant, link)}
            >
            <i className="fa fa-fw fa-arrow-left"></i>
          </button>
          <button data-toggle="tooltip" data-placement="Next" title="Trang sau"
            onClick={() => getList(page + 1, LIMIT, merchant, link)}
          >
              <i className="fa fa-fw fa-arrow-right"></i>
          </button>
        </div>
    </Layout>
    </LoadingOverlay>
  )
}

export default CouponPage
