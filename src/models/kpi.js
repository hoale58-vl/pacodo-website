import { BaseModel } from 'sjs-base-model'

export default class KPIModel extends BaseModel {
  total_orders = ''
  total_deposited_users = ''
  total_users = ''
  total_income = ''

  constructor(data) {
    super()
    this.update(data)
  }
}
