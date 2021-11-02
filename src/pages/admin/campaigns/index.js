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
            <label htmlFor="name">Tên chiến dịch</label>
            <input type="text"
              id="name"
              class="form-control form-control-lg form-control-alt mt"
              placeholder="Tên chiến dịch"
            >
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
          const value = Swal.getPopup().querySelector('#value').value;
          const image = Swal.getPopup().querySelector('#image').value;
          if (!value || !name || !image || value <= 0 || value % 1000 !== 0) {
            Swal.showValidationMessage(`Vui lòng nhập đầy đủ thông tin các trường`)
          } else {
            return { name, value, image }
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
        {(!campaigns || campaigns.length === 0) && <div className="py-4">
          <h2 className="display-4 font-w600 text-city">Chưa có chiến dịch nào</h2>
        </div>}
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
                <a href={`/admin/campaigns/${campaign.id}`} className="btn btn-sm btn-danger mb-4 px-4">
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
