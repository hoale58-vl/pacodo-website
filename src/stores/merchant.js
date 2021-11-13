import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import EffectUtility from 'utilities/EffectUtility'
import {BASE_URL, ENDPOINT} from 'utilities/Endpoint'
import Merchant from 'models/merchant'

let store = (set) => ({
  merchants: [],
  getMerchants: () => {
    return EffectUtility.getToModel(
        Object, BASE_URL + ENDPOINT.LIST_MERCHANT).then((response) => {
      const { success, data } = response;
      if (success) {
        set((state) => ({
          ...state,
          merchants: data.data.map(ele => new Merchant(ele))
        }))
      }
    })
  }
})

store = devtools(store) // Allow redux devtool debug
store = persist(store, { name: 'merchant' }) // Persist to local storage

export default create(store)
