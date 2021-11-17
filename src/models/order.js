import { BaseModel } from 'sjs-base-model'

export default class OrderModel extends BaseModel {
    id = null
    payout = null
    user_id = null
    campaign_id = null
    status = null
    geo = null
    transaction_id = null
    user_agent = null
    ip = null
    offer_currency = null
    campaign_name = null
    campaign_value = null
    created_at = null
    email = null
    referral_code = null
    offer_currency = null
    payout = null

    constructor(data) {
        super()
        this.update(data)
    }
}
