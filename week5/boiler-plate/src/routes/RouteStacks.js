import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from '@/src/routes/PrivateRoute'
import { Navigate } from 'react-router-dom'
import URLS from '@/src/enums/urls'

// pages
const Page404 = lazy(() => import('../pages/404'))
const Home = lazy(() => import('../pages/Home'))
const Login = lazy(() => import('../pages/Login'))
const Profile = lazy(() => import('../pages/Profile'))
const DataWarga = lazy(() => import('../pages/DataWarga'))

const RouteStacks = () => {
	const loggedIn = () => {
		const token = localStorage.getItem('token') || ''
		return token.length > 0
	}
	const loggedOut = () => {
		const token = localStorage.getItem('token') || ''
		return token === ''
	}

	return (
		<Routes>
			<Route exact path={URLS.LANDING} element={<Navigate to={URLS.HOME} />} />
			{/* <Route
				path={URLS.PROFILE}
				element={
					<PrivateRoute path={URLS.PROFILE} allow={[loggedIn]} navigateTo={URLS.LOGIN}>
						<Profile />
					</PrivateRoute>
				}
			/> */}
			<Route path={URLS.HOME} element={<Home />} />
			<Route
				path={URLS.LOGIN}
				element={
					<PrivateRoute path={URLS.LOGIN} allow={[loggedOut]} navigateTo={URLS.PROFILE}>
						<Login />
					</PrivateRoute>
				}
			/>
			<Route
				path={URLS.PROFILE}
				element={
					<PrivateRoute path={URLS.PROFILE} allow={[loggedIn]} navigateTo={URLS.LOGIN}>
						<Profile />
					</PrivateRoute>
				}
			/>
			<Route
				path={URLS.DATAWARGA}
				element={
					<PrivateRoute path={URLS.DATAWARGA} allow={[loggedIn]} navigateTo={URLS.LOGIN}>
						<DataWarga />
					</PrivateRoute>
				}
			/>
			{/* keep  <Route path="*"> being the last of siblings */}
			<Route path="*" element={<Page404 />} />
		</Routes>
	)
}
export default RouteStacks
