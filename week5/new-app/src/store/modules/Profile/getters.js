import { get } from 'lodash'
const PROFILE_GETTERS = {
	// getter profile info data
	profileInfoData: (state) => get(state, 'Profile.data.profileInfoData', {}),
	userKYCStatus: (state) => get(state, 'Profile.data.profileInfoData.kyc_status_id', undefined),
	profileChangeUsernameMessage: (state) => get(state, 'Profile.data.profileChangeUsernameData.message', {}),
	profileInfoDataFullName: (state) => get(state, 'Profile.data.profileInfoData.detail.full_name', '-'),
	profileInfoDataUserName: (state) => get(state, 'Profile.data.profileInfoData.user_name', '-'),
	profileRejectReasonInfo: (state) => get(state, 'Profile.data.profileInfoData.reject_reason_kyc_yunet', ''),
	profileInfoDataProfilePicture: (state) => {
		const gender = get(state, 'Profile.data.profileInfoData.detail.gender', '') || ''
		const defaultPhotoPicture = gender === 'Female' ? 'https://joeschmoe.io/api/v1/jess' : 'https://joeschmoe.io/api/v1/jon'
		const profilePicture = get(state, 'Profile.data.profileInfoData.profile_picture', defaultPhotoPicture) || defaultPhotoPicture
		return profilePicture
	},
	// getter value status loading profile
	profileInfoLoading: (state) => get(state, 'Profile.loading.profileInfo', false),
	profileVerifyLoading: (state) => get(state, 'Profile.loading.profileVerify', false),
	profileRequestOtpLoading: (state) => get(state, 'Profile.loading.profileRequestOtp', false),
	profileResendOtpLoading: (state) => get(state, 'Profile.loading.profileResendOtp', false),
	profileChangeUsername: (state) => get(state, 'Profile.loading.profileChangeUsername', false)
}
export default PROFILE_GETTERS
