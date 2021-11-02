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
  },
  create: (data) => {
    return EffectUtility.postToModel(
      Object, BASE_URL + ENDPOINT.CREATE_CAMPAIGN, data).then((response) => {
      const { success } = response;
        return success;
    })
  },
  update: (id, desc) => {
    return EffectUtility.putToModel(
      Object, BASE_URL + ENDPOINT.UPDATE_CAMPAIGN, {
        id,
        desc
      }).then((response) => {
      const { success } = response;
        return success;
    })
  }
})

store = devtools(store) // Allow redux devtool debug
store = persist(store, { name: 'campaign' }) // Persist to local storage

export default create(store)
