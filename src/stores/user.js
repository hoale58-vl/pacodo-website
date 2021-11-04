import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import EffectUtility from 'utilities/EffectUtility'
import {BASE_URL, ENDPOINT} from 'utilities/Endpoint'
import LoginResponse from 'models/response/login'
import User from 'models/user'
import Pagination from 'models/response/pagination'
import AdminSummary from 'models/response/admin_summary'

let store = (set) => ({
  accessToken: null,
  email: '',
  password: '',
  remember: false,
  isAdmin: 0,
  userInfo: null,
  adminSummary: null,

  page: 1,
  total: 0,
    users: [],
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
  signup: async (email, username, password, referral_code) => {
    return EffectUtility.postToModel(
      LoginResponse, BASE_URL + ENDPOINT.REGISTER, {
        email,
        username,
        password,
        referral_code
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
  getUser: () => {
    return EffectUtility.getToModel(
      User, BASE_URL + ENDPOINT.USER_INFO).then((response) => {
      const { success, data } = response;
      if (success) {
        set((state) => ({
          ...state,
          userInfo: data
        }))
      }
    })
  },
  updateUserProfile: (values) => {
    return EffectUtility.putToModel(
      LoginResponse, BASE_URL + ENDPOINT.UPDATE_PROFILE, values).then((response) => {
      const { success } = response;
      return success;
    })
  },
  getList: (page, limit) => {
    return EffectUtility.getToModel(
        Pagination, BASE_URL + ENDPOINT.USER_LIST, {
            page,
            limit
      }).then((response) => {
      const { success, data } = response;
      if (success) {
        set((state) => ({
          ...state,
          page: page,
          total: data.total,
          users: data.data.map(ele => new User(ele))
        }))
      }
    })
  },
  getAdminSummary: () => {
    return EffectUtility.getToModel(
        AdminSummary, BASE_URL + ENDPOINT.ADMIN_SUMMARY).then((response) => {
          const { success, data } = response;
          if (success) {
        set((state) => ({
          ...state,
          adminSummary: data
        }))
      }
    })
  },
  updateReferral: (values) => {
    return EffectUtility.putToModel(
      Object, BASE_URL + ENDPOINT.UPDATE_REFERRAL, values).then((response) => {
        const { success } = response;
      return success;
    })
  },
})

store = devtools(store) // Allow redux devtool debug
store = persist(store, { name: 'user' }) // Persist to local storage

export default create(store)
