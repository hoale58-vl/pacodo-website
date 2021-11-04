import { BaseModel } from 'sjs-base-model'

export default class AffiliateModel extends BaseModel {
    
  email = ''
  username = ''
  created_at = ''
  type = null
  value = 0

  constructor(data) {
    super()
    this.update(data)
  }
}
