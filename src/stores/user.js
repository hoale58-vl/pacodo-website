import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import EffectUtility from 'utilities/EffectUtility'
import {BASE_URL, ENDPOINT} from 'utilities/Endpoint'
import LoginResponse from 'models/response/login'

let store = (set) => ({
  accessToken: null,
  email: '',
  password: '',
  remember: false,
  isAdmin: 0,
  login: (email, password, remember) => {
    if (remember) {
      set((state) => ({
        ...state,
        email: email,
        password: password,
        remember: true
      }))
    }
    EffectUtility.postToModel(
      LoginResponse, BASE_URL + ENDPOINT.LOGIN, {
      email: email,
      password: password
    }).then((response) => {
      const { success, data } = response;
      if (success) {
        set((state) => ({
          ...state,
          email: data.email,
          accessToken: data.jwt,
          isAdmin: data.isAdmin
        }))
      }
    })
  },
  signup: async (email, password) => {
    return EffectUtility.postToModel(
      LoginResponse, BASE_URL + ENDPOINT.REGISTER, {
      email: email,
      password: password
    }).then((response) => {
      const { success } = response;
      return success;
    })
  },
  logout: () => {
    set((state) => ({
      ...state,
      accessToken: null,
      isAdmin: 0,
    }))
  },
})

store = devtools(store) // Allow redux devtool debug
store = persist(store, { name: 'user' }) // Persist to local storage

export default create(store)
