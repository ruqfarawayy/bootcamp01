import createReducer from '@/src/store/createReducer'
import REDUCER_TYPES from '@/src/store/types/reducer-types'
import set from 'lodash/fp/set'

const initialState = {
	data: {},
	loading: {
		profileInfo: false,
		profileVerify: false,
		profileRequestOtp: false,
		profileResendOtp: false,
		profileChangeUsername: false
	}
}

export default createReducer(initialState, {
	// reducer data profile
	[REDUCER_TYPES.PROFILE_INFO](state, action) {
		return set('data.profileInfoData', action.data, state)
	},
	[REDUCER_TYPES.PROFILE_VERIFY](state, action) {
		return set('data.profileVerifyData', action.data, state)
	},
	[REDUCER_TYPES.PROFILE_REQUEST_OTP](state, action) {
		return set('data.profileRequestOtpData', action.data, state)
	},
	[REDUCER_TYPES.PROFILE_RESEND_OTP](state, action) {
		return set('data.profileResendOtpData', action.data, state)
	},
	[REDUCER_TYPES.PROFILE_CHANGE_USERNAME](state, action) {
		return set('data.profileChangeUsernameData', action.data, state)
	},
	[REDUCER_TYPES.PROFILE_CHANGE_REFERRAL](state, action) {
		return set('data.profileChangeReferralData', action.data, state)
	},
	// reducer set loading profile info
	[REDUCER_TYPES.PROFILE_INFO_LOADING](state, action) {
		return set('loading.profileInfo', action.isLoading, state)
	},
	[REDUCER_TYPES.PROFILE_VERIFY_LOADING](state, action) {
		return set('loading.profileVerify', action.isLoading, state)
	},
	[REDUCER_TYPES.PROFILE_REQUEST_OTP_LOADING](state, action) {
		return set('loading.profileRequestOtp', action.isLoading, state)
	},
	[REDUCER_TYPES.PROFILE_RESEND_OTP_LOADING](state, action) {
		return set('loading.profileResendOtp', action.isLoading, state)
	},
	[REDUCER_TYPES.PROFILE_CHANGE_USERNAME_LOADING](state, action) {
		return set('loading.profileChangeUsername', action.isLoading, state)
	},
	[REDUCER_TYPES.PROFILE_CHANGE_REFERRAL_LOADING](state, action) {
		return set('loading.profileChangeReferral', action.isLoading, state)
	},
	[REDUCER_TYPES.PROFILE_UPLOAD_PROFILE_PICTURE_LOADING](state, action) {
		return set('loading.profileUploadProfilePicture', action.isLoading, state)
	}
})
