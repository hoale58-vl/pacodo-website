import React, { useEffect } from 'react'
import Layout from 'components/layout'
import campaignStore from 'stores/campaign';
import userStore from 'stores/user';
import { toast } from 'react-toastify';
import { copyToClipboard } from 'utilities/Misc';

const CampaignPage = () => {
  const { getList, campaigns } = campaignStore();
  const { userInfo } = userStore();

  useEffect(() => {
    getList();
  }, []);

  function copyAffLink(campaignAffLink) {
    const affLink = `${campaignAffLink}&sub_id1=${userInfo.referral_code}`;
    copyToClipboard(affLink);
    toast.success("Đã copy affiliate link vào bộ nhớ tạm");
  }

  return (
    <Layout>
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
                  src={campaign.image}
                  style={{
                    width:"200px",
                    height:"150px"
                  }}
                />
                <h4>{campaign.name}</h4>
                <p>Hoa hồng: {campaign.value.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</p>
                <a href={`/campaign/details?id=${campaign.id}`} className="btn btn-sm btn-primary mb-4 px-4">
                  Chi tiết
                </a>
                <button type="button" className="btn btn-sm btn-secondary mb-4 px-4" onClick={() => {
                  copyAffLink(campaign.aff_link);
                }}>
                  Lấy link affiliate
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
