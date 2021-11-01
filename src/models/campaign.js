import { BaseModel } from 'sjs-base-model'

export default class CampaignModel extends BaseModel {
  id = null
  name = ''
  image = 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/6/hot-girl-nong-cung-euro-dot-mat-netizen-bang-body-sieu-nong-bong-1625568453512566491723.jpeg'
  value = 0
  desc= ''

  constructor(data) {
    super()
    this.update(data)
  }
}
