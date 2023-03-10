import { BaseModel } from 'sjs-base-model'

export default class AdminSummaryResponse extends BaseModel {
  deposited = 0
  undeposit = 0
  total_deposited = 0
  orders = 0
  orders_balance = 0
    
  constructor(data) {
    super()
    this.update(data)
  }
}
