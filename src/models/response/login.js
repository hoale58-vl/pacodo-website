import { BaseModel } from 'sjs-base-model'

export default class LoginResponse extends BaseModel {
  jwt = ''
  email = ''
    
  constructor(data) {
    super()
    this.update(data)
  }
}
