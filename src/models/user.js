import { BaseModel } from 'sjs-base-model'

export default class UserModel extends BaseModel {
  email = ''
  username = ''
  created_at = ''
  updated_at = ''
  phone_number = ''
  referral_code = ''
  bank_id = null
  bank_name = null
  bank_location = null
  bank_user = null
  user_status = 0
  ref_user_id = ''
  orders = 0
  is_admin = 0
  balance = 0
  affiliate= []

  constructor(data) {
    super()
    this.update(data)
  }
}
