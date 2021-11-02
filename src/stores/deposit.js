import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import EffectUtility from 'utilities/EffectUtility'
import {BASE_URL, ENDPOINT} from 'utilities/Endpoint'
import Pagination from 'models/response/pagination'
import Deposit from 'models/deposit'

let store = (set) => ({
  page: 1,
  total: 0,
    deposits: [],
  getList: (type, page, limit) => {
    return EffectUtility.getToModel(
        Pagination, BASE_URL + ENDPOINT.LIST_DEPOSIT, {
            type,
            page,
            limit
      }).then((response) => {
      const { success, data } = response;
      if (success) {
        set((state) => ({
          ...state,
          page: page,
          total: data.total,
          deposits: data.data.map(ele => new Deposit(ele))
        }))
      }
    })
  },
  verify: async (id) => {
    return EffectUtility.putToModel(
        Object, BASE_URL + ENDPOINT.VERIFY, {
            id
      }).then((response) => {
      const { success } = response;
      if (success) {
        set((state) => ({
          ...state,
          deposits: state.deposits.map(ele => {
            if (ele.id === id) {
              return {
                ...ele,
                verified: 1
              }
            }
            return ele;
          })
        }))
      }
      return success;
    })
  },
  rejectDeposit: async (id) => {
    return EffectUtility.postToModel(
        Object, BASE_URL + ENDPOINT.REJECT, {
            id
      }).then((response) => {
      const { success } = response;
      if (success) {
        set((state) => ({
          ...state,
          deposits: state.deposits.filter(ele => {
            return ele.id !== id;
          })
        }))
      }
      return success;
    })
  }
})

store = devtools(store) // Allow redux devtool debug
store = persist(store, { name: 'deposit' }) // Persist to local storage

export default create(store)
