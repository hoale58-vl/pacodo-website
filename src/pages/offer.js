import React, { useEffect } from 'react'
import Layout from 'components/layout'
import offerStore from 'stores/offer';
import { toast } from 'react-toastify';
import { copyToClipboard } from 'utilities/Misc';

const LIMIT = 12;

const OfferPage = () => {
  const { offers, getList, page } = offerStore();

  function copyLink(link) {
    copyToClipboard(link);
    toast.success("Đã copy");
  }
  
  useEffect(() => {
    getList(1, LIMIT);
  }, [])

  return (
      <Layout>
      <div className="row text-center">
        {/* {(!offers || offers.length === 0) && <div className="py-4">
          <h2 className="display-4 font-w600 text-city">Chưa có mã giảm giá nào</h2>
        </div>} */}
        {offers.map((offer) => (
          <div className="col-md-3" key={offer.id}>
            <div className="block block-rounded">
              <div className="block-content">
                <img
                  className="img-fluid mb-4"
                  alt="logo"
                  src={offer.image}
                  style={{
                    width:"200px",
                    height:"150px"
                  }}
                />
                <h4>{offer.name}</h4>
                <p className="text-left">{offer.content}</p>
                <p><span className="font-w600">Hết hạn:</span> {offer.end_time}</p>
                <button type="button" className="btn btn-sm btn-primary mb-4 px-4" onClick={() => {
                  copyLink(offer.aff_link);
                }}>
                  Lấy link affiliate
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
              onClick={() => getList(page - 1, LIMIT)}
            >
            <i className="fa fa-fw fa-arrow-left"></i>
          </button>
          <button data-toggle="tooltip" data-placement="Next" title="Trang sau"
            onClick={() => getList(page + 1, LIMIT)}
          >
              <i className="fa fa-fw fa-arrow-right"></i>
          </button>
        </div>
    </Layout>
  )
}

export default OfferPage
