import { BaseModel } from 'sjs-base-model'

export default class MerchantModel extends BaseModel {
    id = null
    display_name = ''
    logo = ''
    total_offer = 0

    constructor(data) {
        super()
        this.update(data)
    }
}
