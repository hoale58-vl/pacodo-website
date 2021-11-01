import { BaseModel } from 'sjs-base-model'

export default class UserModel extends BaseModel {
  id = null
  email = ''
  created_at = ''
  updated_at = ''
  phone_number = ''

  constructor(data) {
    super()
    this.update(data)
  }
}
