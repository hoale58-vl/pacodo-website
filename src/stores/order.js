import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import EffectUtility from 'utilities/EffectUtility'
import {BASE_URL, ENDPOINT} from 'utilities/Endpoint'
import Pagination from 'models/response/pagination'
import Order from 'models/order'

let store = (set) => ({
  page: 1,
  total: 0,
  orders: [],
  getList: (page, limit) => {
    return EffectUtility.getToModel(
        Pagination, BASE_URL + ENDPOINT.LIST_ORDER, {
            page,
            limit
      }).then((response) => {
      const { success, data } = response;
      if (success) {
        set((state) => ({
          ...state,
          page: page,
          total: data.total,
          orders: data.data.map(ele => new Order(ele))
        }))
      }
    })
  },
  getAll: (page, limit) => {
    return EffectUtility.getToModel(
        Pagination, BASE_URL + ENDPOINT.LIST_ALL_ORDER, {
            page,
            limit
      }).then((response) => {
      const { success, data } = response;
      if (success) {
        set((state) => ({
          ...state,
          page: page,
          total: data.total,
          orders: data.data.map(ele => new Order(ele))
        }))
      }
    })
  }
})

store = devtools(store) // Allow redux devtool debug
store = persist(store, { name: 'order' }) // Persist to local storage

export default create(store)
