import React from 'react'
import Layout from 'components/layout'

const CampaignPage = () => {
  return (
    <Layout>
      <form className="js-wizard-validation-form" action="be_forms_wizard.html" method="POST">
        <div className="form-group">
          <label htmlFor="wizard-validation-firstname">First Name</label>
          <input
            className="form-control"
            type="text"
            id="wizard-validation-firstname"
            name="wizard-validation-firstname"
          />
        </div>
        <div className="form-group">
          <label htmlFor="wizard-validation-lastname">Last Name</label>
          <input
            className="form-control"
            type="text"
            id="wizard-validation-lastname"
            name="wizard-validation-lastname"
          />
        </div>
        <div className="form-group">
          <label htmlFor="wizard-validation-email">Email</label>
          <input className="form-control" type="email" id="wizard-validation-email" name="wizard-validation-email" />
        </div>
        <button type="reset" className="btn btn-sm btn-alt-primary px-4 mr-4">
          Reset
        </button>
        <button type="submit" className="btn btn-sm btn-primary px-4">
          Submit
        </button>
      </form>
    </Layout>
  )
}

export default CampaignPage
