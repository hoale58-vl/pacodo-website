import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import EffectUtility from 'utilities/EffectUtility'
import {BASE_URL, ENDPOINT} from 'utilities/Endpoint'
import Pagination from 'models/response/pagination'
import Offer from 'models/offer'

let store = (set) => ({
  page: 1,
  offers: [],
  getList: (page, limit) => {
    return EffectUtility.getToModel(
        Pagination, BASE_URL + ENDPOINT.LIST_OFFER, {
        page,
        limit
      }).then((response) => {
      const { success, data } = response;
      if (success) {
        set((state) => ({
          ...state,
          page: page,
          offers: data.data.map(ele => new Offer(ele))
        }))
      }
    })
  }
})

store = devtools(store) // Allow redux devtool debug
store = persist(store, { name: 'offer' }) // Persist to local storage

export default create(store)
