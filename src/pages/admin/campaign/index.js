import React, { useEffect } from 'react'
import Layout from 'components/admin_layout'
import campaignStore from 'stores/campaign';
import Swal from 'sweetalert2'

const swalWithBootstrapButtons = Swal.mixin({
  buttonsStyling: false,
  customClass: {
    confirmButton: 'btn btn-success m-1',
    cancelButton: 'btn btn-danger m-1',
    input: 'form-control',
  },
})

const CampaignPage = () => {
  const { getList, campaigns, create } = campaignStore();

  useEffect(() => {
    getList();
  }, []);

  const showDialog = () => {
    swalWithBootstrapButtons
      .fire({
        title: "Tạo chiến dịch",
        html: `
          <div class="form-group text-left">
            <label htmlFor="orderId">Mã chiến dịch</label>
            <input type="number"
              id="orderId"
              class="form-control form-control-lg form-control-alt mt"
              placeholder="Mã chiến dịch"
            >
          </div>

          <div class="form-group text-left">
            <label htmlFor="name">Tên chiến dịch</label>
            <input type="text"
              id="name"
              class="form-control form-control-lg form-control-alt mt"
              placeholder="Tên chiến dịch"
            >
          </div>

          <div class="form-group text-left">
            <label htmlFor="name">Net</label>
            <select class="form-control form-control-lg form-control-alt mt"
              id="net">
              <option value=""></option>
              <option value="dinos">Dinos</option>
              <option value="at">AccessTrade</option>
              <option value="optimise">Optimise</option>
            </select>
          </div>

          <div class="form-group text-left">
            <label htmlFor="value">Hoa hồng</label>
            <input type="number"
              id="value"
              class="form-control form-control-lg form-control-alt mt"
              placeholder="Hoa hồng (VND)"
              step="10000"
              min="10000"
            >
          </div>
          
          <div class="form-group mt-4 text-left">
            <label htmlFor="image">Link ảnh</label>
            <input type="text"
              id="image"
              class="form-control form-control-lg form-control-alt"
              placeholder="Link ảnh"
            >
          </div>

          <div class="form-group text-left">
            <label htmlFor="affLink">Link Affiliate</label>
            <input type="text"
              id="affLink"
              class="form-control form-control-lg form-control-alt mt"
              placeholder="Link Affiliate"
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
          const name = Swal.getPopup().querySelector('#name').value;
          const net = Swal.getPopup().querySelector('#net').value;
          const value = Swal.getPopup().querySelector('#value').value;
          const image = Swal.getPopup().querySelector('#image').value;
          const order_id = Swal.getPopup().querySelector('#orderId').value;
          const aff_link = Swal.getPopup().querySelector('#affLink').value;
          if (!value || !net || !name || !image || value <= 0 || value % 1000 !== 0 || !order_id || !aff_link) {
            Swal.showValidationMessage(`Vui lòng nhập đầy đủ thông tin các trường`)
          } else {
            return { name, net, value, image, order_id, aff_link }
          }
        }
      })
      .then((result) => {
        if (result.value) {
          create(result.value).then((value) => {
            if (value) {
              Swal.fire(
                'Thành công!',
                'Tạo chiến dịch thành công',
                'success'
              );
              getList();
            }
          });
        }
      })
  }

  return (
    <Layout>
      <button type="button" className="btn btn-sm btn-danger mb-4" onClick={() => showDialog()}>
       Tạo chiến dịch
      </button>
      <div className="row text-center">
        {campaigns.map((campaign) => (
          <div className="col-md-3" key={campaign.id}>
            <div className="block block-rounded">
              <div className="block-content">
                <img
                  className="img-fluid mb-4"
                  alt="logo"
                  style={{
                    width:"200px",
                    height:"150px"
                  }}
                  src={campaign.image}
                />
                <h4>{campaign.name}</h4>
                <p>Hoa hồng: {campaign.value.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</p>
                <a href={`/admin/campaign/details?id=${campaign.id}`} className="btn btn-sm btn-danger mb-4 px-4">
                  Chỉnh sửa
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default CampaignPage
