import API_URLS from '@/src/enums/api-urls'
import URLS from '@/src/enums/urls'
import ApiService from '@/src/services/client'
import navigateTo from '@/src/utils/navigateTo'
import ACTION_TYPES from '@/src/store/types/action-types'
import REDUCER_TYPES from '@/src/store/types/reducer-types'
import AUTH_GETTERS from './getters'

/**
 * berisi perintah untuk integrasi ke backend rest api
 */


export default {
	[ACTION_TYPES.POST_AUTH_LOGIN]({ username, password }) {
		// auth login ke api
		return async (dispatch, state) => {
			dispatch({ type: REDUCER_TYPES.AUTH_LOGIN, isLoading: true })
			return await ApiService.request({
				url: API_URLS.AUTH_LOGIN,
				method: 'POST',
				data: {
					username,
					password
				}
			})
				.then((response) => {
					const {
						data: { data, statusCode, message }
					} = response
					dispatch({ type: REDUCER_TYPES.AUTH_LOGIN, data, statusCode, message })
					return response
				})
				.catch((error) => {
					throw error
				})
				.finally(() => {
					dispatch({ type: REDUCER_TYPES.AUTH_LOGIN, isLoading: false })
				})
		}
	},

	[ACTION_TYPES.POST_AUTH_LOGOUT]() {
		// auth login ke api
		return async (dispatch, state) => {
			const token = AUTH_GETTERS.loginToken(state())
			dispatch({ type: REDUCER_TYPES.AUTH_LOGIN, isLoading: true })
			return await ApiService.request({
				url: API_URLS.AUTH_LOGOUT,
				method: 'POST',
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
				.then((response) => {
					console.log(response)
					const {
						data: { statusCode, message }
					} = response
					if ([404].includes(statusCode)) {
						dispatch({ type: REDUCER_TYPES.AUTH_LOGIN })
					}
					return response
				})
				.catch((error) => {
					throw error
				})
				.finally(() => {
					dispatch({ type: REDUCER_TYPES.AUTH_LOGIN, isLoading: false })
				})
		}
	},

	[ACTION_TYPES.POST_AUTH_REGISTER]({ username, email, password, password_confirmation, phone, agreement, referral_code, captcha }) {
		return async (dispatch, state) => {
			dispatch({ type: REDUCER_TYPES.AUTH_REGISTER_LOADING, isLoading: true })
			return await ApiService.request({
				url: API_URLS.AUTH_REGISTER,
				method: 'POST',
				data: {
					username,
					email,
					password,
					password_confirmation,
					phone,
					agreement,
					referral_code,
					captcha
				}
			})
				.then((response) => {
					const {
						data: { data }
					} = response
					dispatch({ type: REDUCER_TYPES.AUTH_REGISTER, data: data })
					return response
				})
				.catch((error) => {
					throw error
				})
				.finally(() => {
					dispatch({ type: REDUCER_TYPES.AUTH_REGISTER_LOADING, isLoading: false })
				})
		}
	},
	[ACTION_TYPES.POST_AUTH_FORGOT]({ email }) {
		return async (dispatch, state) => {
			dispatch({ type: REDUCER_TYPES.AUTH_FORGOT_LOADING, isLoading: true })
			return await ApiService.request({
				url: API_URLS.AUTH_FORGOT,
				method: 'POST',
				data: {
					email
				}
			})
				.then((response) => {
					const {
						data: { data }
					} = response
					dispatch({ type: REDUCER_TYPES.AUTH_FORGOT, data: data })
					return response
				})
				.catch((error) => {
					throw error
				})
				.finally(() => {
					dispatch({ type: REDUCER_TYPES.AUTH_FORGOT_LOADING, isLoading: false })
				})
		}
	},
	[ACTION_TYPES.POST_AUTH_RESET]({ password, token }) {
		return async (dispatch, state) => {
			dispatch({ type: REDUCER_TYPES.AUTH_RESET_LOADING, isLoading: true })
			return await ApiService.request({
				url: API_URLS.AUTH_RESET,
				method: 'POST',
				data: {
					password,
					token
				}
			})
				.then((response) => {
					const {
						data: { data }
					} = response
					dispatch({ type: REDUCER_TYPES.AUTH_RESET, data: data })
					return response
				})
				.catch((error) => {
					throw error
				})
				.finally(() => {
					dispatch({ type: REDUCER_TYPES.AUTH_RESET_LOADING, isLoading: false })
				})
		}
	},
	[ACTION_TYPES.AUTH_LOGOUT]() {
		return async (dispatch, state) => {
			dispatch({ type: REDUCER_TYPES.AUTH_LOGOUT_LOADING, isLoading: true })
			dispatch({ type: REDUCER_TYPES.AUTH_LOGOUT })
			// dispatch({ 	type: REDUCER_TYPES.ROOT_STATE_RESET })
			dispatch({ type: REDUCER_TYPES.AUTH_LOGOUT_LOADING, isLoading: false })
			navigateTo(URLS.LOGIN)
		}
	},
	[ACTION_TYPES.POST_AUTH_RESEND_VERIFICATION]() {
		return async (dispatch, state) => {
			const userId = AUTH_GETTERS.registerUserId(state())
			const email = AUTH_GETTERS.registerEmail(state())
			dispatch({ type: REDUCER_TYPES.AUTH_RESEND_VERIFICATION_LOADING, isLoading: true })
			return await ApiService.request({
				url: API_URLS.AUTH_RESEND_VERIFICATION,
				method: 'POST',
				data: {
					email,
					user_id: userId
				}
			})
				.then((response) => {
					return response
				})
				.catch((error) => {
					throw error
				})
				.finally(() => {
					dispatch({ type: REDUCER_TYPES.AUTH_RESEND_VERIFICATION_LOADING, isLoading: false })
				})
		}
	}
}
