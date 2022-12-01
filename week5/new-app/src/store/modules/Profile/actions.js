import API_URLS from '@/src/enums/api-urls'
import ApiService from '@/src/services/client'
import ACTION_TYPES from '@/src/store/types/action-types'
import REDUCER_TYPES from '@/src/store/types/reducer-types'
import AUTH_GETTERS from '@/src/store/modules/Auth/getters'

export default {
	[ACTION_TYPES.FETCH_PROFILE_INFO]() {
		// fetch data profile info
		return async (dispatch, state) => {
			const token = AUTH_GETTERS.loginToken(state())
			dispatch({ type: REDUCER_TYPES.PROFILE_INFO_LOADING, isLoading: true })
			return await ApiService.request({
				url: API_URLS.PROFILE_INFO,
				method: 'GET',
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
				.then((response) => {
					const {
						data: { data }
					} = response
					dispatch({ type: REDUCER_TYPES.PROFILE_INFO, data: data })
					return response
				})
				.catch((error) => {
					throw error
				})
				.finally(() => {
					dispatch({ type: REDUCER_TYPES.PROFILE_INFO_LOADING, isLoading: false })
				})
		}
	},

	[ACTION_TYPES.POST_PROFILE_REQUEST_OTP]({ phone }) {
		return async (dispatch, state) => {
			const token = AUTH_GETTERS.loginToken(state())
			dispatch({ type: REDUCER_TYPES.PROFILE_REQUEST_OTP_LOADING, isLoading: true })
			return await ApiService.request({
				url: API_URLS.PROFILE_REQUEST_OTP,
				method: 'POST',
				headers: {
					Authorization: `Bearer ${token}`
				},
				data: {
					phone
				}
			})
				.then((response) => {
					const {
						data: { data }
					} = response
					dispatch({ type: REDUCER_TYPES.PROFILE_REQUEST_OTP, data: data })
					return response
				})
				.catch((error) => {
					throw error
				})
				.finally(() => {
					dispatch({ type: REDUCER_TYPES.PROFILE_REQUEST_OTP_LOADING, isLoading: false })
				})
		}
	},

	[ACTION_TYPES.FETCH_PROFILE_RESEND_OTP]() {
		return async (dispatch, state) => {
			const token = AUTH_GETTERS.loginToken(state())
			dispatch({ type: REDUCER_TYPES.PROFILE_RESEND_OTP_LOADING, isLoading: true })
			return await ApiService.request({
				url: API_URLS.PROFILE_RESEND_OTP,
				method: 'GET',
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
				.then((response) => {
					const {
						data: { data }
					} = response
					dispatch({ type: REDUCER_TYPES.PROFILE_RESEND_OTP, data: data })
					return response
				})
				.catch((error) => {
					throw error
				})
				.finally(() => {
					dispatch({ type: REDUCER_TYPES.PROFILE_RESEND_OTP_LOADING, isLoading: false })
				})
		}
	},
	[ACTION_TYPES.POST_CHANGE_USERNAME]({ username }) {
		return async (dispatch, state) => {
			const token = AUTH_GETTERS.loginToken(state())
			dispatch({ type: REDUCER_TYPES.PROFILE_CHANGE_USERNAME_LOADING, isLoading: true })
			return await ApiService.request({
				url: API_URLS.PROFILE_CHANGE_USERNAME,
				method: 'POST',
				headers: {
					Authorization: `Bearer ${token}`
				},
				data: {
					username
				}
			})
				.then((response) => {
					const { data } = response
					dispatch({ type: REDUCER_TYPES.PROFILE_CHANGE_USERNAME, data })
					return response
				})
				.catch((error) => {
					throw error
				})
				.finally(() => {
					dispatch({ type: REDUCER_TYPES.PROFILE_CHANGE_USERNAME_LOADING, isLoading: false })
				})
		}
	},
	[ACTION_TYPES.POST_PROFILE_CHANGE_PICTURE]({ file }) {
		return async (dispatch, state) => {
			dispatch({ type: REDUCER_TYPES.PROFILE_CHANGE_PICTURE_LOADING, isLoading: true })
			const token = AUTH_GETTERS.loginToken(state())
			var bodyFormData = new FormData()
			bodyFormData.append('photo', file)
			return await ApiService.request({
				url: API_URLS.PROFILE_CHANGE_PICTURE,
				method: 'POST',
				headers: {
					Authorization: `Bearer ${token}`,
					'Content-Type': 'multipart/form-data'
				},
				data: bodyFormData
			})
				.then((response) => {
					return response
				})
				.catch((error) => {
					throw error
				})
				.finally(() => {
					dispatch({ type: REDUCER_TYPES.PROFILE_CHANGE_PICTURE_LOADING, isLoading: false })
				})
		}
	}
}
