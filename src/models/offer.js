import { BaseModel } from 'sjs-base-model'

export default class OfferModel extends BaseModel {
    id = null
    name = ''
    image = ''
    content = ''
    aff_link = ''
    end_time = ''

    constructor(data) {
        super()
        this.update(data)
    }
}
