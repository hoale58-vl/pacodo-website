import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import EffectUtility from '../utilities/EffectUtility'
import {BASE_URL, ENDPOINT} from '../utilities/Endpoint'
import LoginResponse from 'models/response/login'

let store = (set) => ({
  accessToken: null,
  email: null,
  password: null,
  remember: false,
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
        console.log(data);
        set((state) => ({
          ...state,
          email: data.email,
          accessToken: data.jwt
        }))
      }
    })
  },
  logout: () => {
    set((state) => ({
      ...state,
      email: null,
      accessToken: null,
    }))
  },
})

store = devtools(store) // Allow redux devtool debug
store = persist(store, { name: 'user' }) // Persist to local storage

export default create(store)
