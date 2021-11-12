import React from 'react'
import Layout from 'components/layout'
import campaignStore from 'stores/campaign';
import { useQueryParam, NumberParam } from "use-query-params";

const CampaignDetailsPage = (_) => {
  const { campaigns } = campaignStore();
  const [campaignId, setCampaignId] = useQueryParam("id", NumberParam);
  const campaign = campaigns.find((ele) => ele.id == campaignId);

  return <Layout>
    <div className="bg-white m-2 p-4" dangerouslySetInnerHTML={{__html: campaign ? campaign.desc: ''}}>
    </div>
  </Layout>
}

export default CampaignDetailsPage
