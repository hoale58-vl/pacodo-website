import { BaseModel } from 'sjs-base-model'

export default class PaginationModel extends BaseModel {
    total = 0
    data = []

  constructor(data) {
    super()
    this.update(data)
  }
}
