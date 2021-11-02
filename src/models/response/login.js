import { BaseModel } from 'sjs-base-model'

export default class LoginResponse extends BaseModel {
  jwt = ''
  email = ''
  isAdmin = 0
    
  constructor(data) {
    super()
    this.update(data)
  }
}
