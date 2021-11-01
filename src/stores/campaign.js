import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import EffectUtility from 'utilities/EffectUtility'
import {BASE_URL, ENDPOINT} from 'utilities/Endpoint'
import Campaign from 'models/campaign'

let store = (set) => ({
  campaigns: [],
  getList: () => {
    return EffectUtility.getToModel(
      Campaign, BASE_URL + ENDPOINT.LIST_CAMPAIGN).then((response) => {
      const { success, data } = response;
      if (success) {
        set((state) => ({
          ...state,
          campaigns: data ? data : []
        }))
      }
    })
  }
})

store = devtools(store) // Allow redux devtool debug
store = persist(store, { name: 'campaign' }) // Persist to local storage

export default create(store)
