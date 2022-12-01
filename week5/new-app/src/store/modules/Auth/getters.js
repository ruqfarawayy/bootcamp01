import { get } from 'lodash'
const AUTH_GETTERS = {
	loginToken: (state) => get(state, 'Auth.login.data.token', ''),
}
export default AUTH_GETTERS
