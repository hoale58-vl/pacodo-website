import React, { useEffect, useState } from 'react'
import Layout from 'components/admin_layout'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import campaignStore from 'stores/campaign';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { navigate } from "gatsby";
import Swal from 'sweetalert2'

const CampaignDetailsPage = (props) => {
  const [editorState, setEditorState] = useState(null);
  const { campaigns, update } = campaignStore();

  const onChange = (value) => {
    setEditorState(value);
  };

  useEffect(() => {
    const campaign = campaigns.find((ele) => ele.id == props.id);
    const contentBlock = htmlToDraft(campaign.desc);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
      const editorState = EditorState.createWithContent(contentState);
      setEditorState(editorState);
    }
  }, []);

  const updateCampaign = () => {
    const desc = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    update(props.id, desc).then((value) => {
      if (value) {
        Swal.fire(
          'Thành công!',
          'Lưu thành công',
          'success'
        );
        setTimeout(() => navigate("/admin/campaigns"), 1000);
      }
    });
  }

  return <Layout>
    <button type="button" className="btn btn-sm btn-danger mb-4" onClick={() => updateCampaign()}>
        Lưu lại
    </button>
    
    <div className="bg-white m-2 p-4">
      <Editor
        editorState={editorState}
        editorClassName="p-4 h-100"
        onEditorStateChange={onChange}
      />
    </div>
  </Layout>
}

export default CampaignDetailsPage
