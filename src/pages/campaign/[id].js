import React from 'react'
import Layout from 'components/layout'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import campaignStore from 'stores/campaign';

const CampaignDetailsPage = (props) => {
  const { campaigns } = campaignStore();
  const campaign = campaigns.find((ele) => ele.id == props.id);

  return <Layout>
    <div className="bg-white m-2 p-4" dangerouslySetInnerHTML={{__html: campaign.desc}}>
    </div>
  </Layout>
}

export default CampaignDetailsPage
