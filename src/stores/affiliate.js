import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import EffectUtility from 'utilities/EffectUtility'
import {BASE_URL, ENDPOINT} from 'utilities/Endpoint'
import Pagination from 'models/response/pagination'
import Affiliate from 'models/affiliate'

let store = (set) => ({
  page: 1,
  total: 0,
    affiliates: [],
  getList: (page, limit) => {
    return EffectUtility.getToModel(
        Pagination, BASE_URL + ENDPOINT.LIST_AFFILIATE, {
            page,
            limit
      }).then((response) => {
      const { success, data } = response;
      if (success) {
        set((state) => ({
          ...state,
          page: page,
          total: data.total,
          affiliates: data.data.map(ele => new Affiliate(ele))
        }))
      }
    })
  }
})

store = devtools(store) // Allow redux devtool debug
store = persist(store, { name: 'affiliate' }) // Persist to local storage

export default create(store)
