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

  const refKey = (net) => {
    console.log(net);
    if (net === 'dinos') {
      return 'sub_id1';
    } else if (net === 'at') {
      return 'utm_content';
    } else {
      return 'UID';
    }
  }

  function copyAffLink(campaignAffLink, net) {
    const affLink = `${campaignAffLink}&${refKey(net)}=${userInfo.referral_code}`;
    copyToClipboard(affLink);
    toast.success("Đã copy affiliate link vào bộ nhớ tạm");
  }

  return (
    <Layout>
      <div className="row text-center">
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
                <div className="row">
                  <div className="col-md-6">
                  <a href={`/campaign/details?id=${campaign.id}`} className="btn btn-sm btn-primary mb-4 mx-2 w-100">
                    Chi tiết
                  </a>
                  </div>
                  <div className="col-md-6">
                    <button type="button" className="btn btn-sm btn-secondary mb-4 mx-2 w-100" onClick={() => {
                      copyAffLink(campaign.aff_link, campaign.net);
                    }}>
                      Copy link
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default CampaignPage
