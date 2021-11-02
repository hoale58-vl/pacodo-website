import { BaseModel } from 'sjs-base-model'

export default class DepositModel extends BaseModel {
    id = null
    email = ''
    value = 0
    verified = 0
    message = ''
    created_at = ''
  updated_at = ''
  bank_id = ''
  bank_name = ''
  bank_location = ''
  bank_user = ''

  constructor(data) {
    super()
    this.update(data)
  }
}
