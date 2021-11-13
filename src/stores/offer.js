import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import EffectUtility from 'utilities/EffectUtility'
import {BASE_URL, ENDPOINT} from 'utilities/Endpoint'
import Pagination from 'models/response/pagination'
import Offer from 'models/offer'

let store = (set) => ({
  page: 1,
  offers: [],
  merchant: '',
  link: '',
  loading: false,
  getList: (page, limit, merchant, link) => {
    set((state) => ({
          ...state,
          loading: true,
        }))
    return EffectUtility.getToModel(
        Pagination, BASE_URL + ENDPOINT.LIST_OFFER, {
        page,
        limit,
        merchant,
        link
      }).then((response) => {
      const { success, data } = response;
      if (success) {
        set((state) => ({
          ...state,
          page: page,
          offers: data.data.map(ele => new Offer(ele)),
          loading: false
        }))
      } else {
        set((state) => ({
          ...state,
          loading: false,
        }))
      }
    })
  },
  setMerchant: (merchant) => {
    set((state) => ({
          ...state,
          merchant: merchant
        }))
  },
  setLink: (link) => {
    set((state) => ({
          ...state,
          link: link
        }))
  }
})

store = devtools(store) // Allow redux devtool debug
store = persist(store, { name: 'offer' }) // Persist to local storage

export default create(store)
