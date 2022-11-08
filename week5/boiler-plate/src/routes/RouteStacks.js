import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from '@/src/routes/PrivateRoute'
import { Navigate } from 'react-router-dom'

// pages
const Page404 = lazy(() => import('../pages/404'))

const RouteStacks = () => {
	const loggedIn = () => {
		return true
	}
	const loggedOut = () => {
		return true
	}

	return (
		<Routes>
			{/* <Route exact path={URLS.LANDING} element={<Navigate to={URLS.HOME} />} />
			<Route
				path={URLS.PROFILE}
				element={
					<PrivateRoute path={URLS.PROFILE} allow={[loggedIn]} navigateTo={URLS.LOGIN}>
						<Profile />
					</PrivateRoute>
				}
			/> */}

			{/* keep  <Route path="*"> being the last of siblings */}
			<Route path="*" element={<Page404 />} />
		</Routes>
	)
}
export default RouteStacks
