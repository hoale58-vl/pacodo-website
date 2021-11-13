import { BaseModel } from 'sjs-base-model'

export default class OfferModel extends BaseModel {
    id = null
    name = ''
    image = ''
    content = ''
    aff_link = ''
    time_left = ''
    coupon_code = ''
    coupon_desc = ''
    merchant = ''
    remain = 0

    constructor(data) {
        super()
        this.update(data)
        this.coupon_code = data.coupons.length > 0 ? data.coupons[0].coupon_code : ""
        this.name = data.coupons.length > 0 && data.coupons[0].coupon_desc ? data.coupons[0].coupon_desc : this.name
    }
}
