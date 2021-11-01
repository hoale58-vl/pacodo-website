import React, { useEffect } from 'react'
import Layout from 'components/admin_layout'
import campaignStore from 'stores/campaign';

const CampaignPage = () => {
  const { getList, campaigns } = campaignStore();

  useEffect(() => {
    getList();
  }, []);

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
                />
                <h4>{campaign.name}</h4>
                <p>Hoa hồng: {campaign.value}</p>
                <a href={`/campaign/${campaign.id}`} className="btn btn-sm btn-danger mb-4 px-4">
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
