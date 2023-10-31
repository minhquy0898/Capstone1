import React, { Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DefaultComponent from './components/DefaultComponent/DefaultComponent'
import { routes } from './routes'
import { isJsonString } from './utils'
import { jwtDecode } from "jwt-decode";
import * as UserService from './services/UserService'
import { useDispatch } from 'react-redux'
import { updateUser } from './redux/slides/userSlide'
// import axios from 'axios'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const { storageData, decoded } = handleDecoded()
    if (decoded?.id) {
      handleGetDetailUser(decoded?.id, storageData)
    }
  }, [])

  const handleDecoded = () => {
    let storageData = localStorage.getItem('access_token')
    let decoded = {}
    if (storageData && isJsonString(storageData)) {
      storageData = JSON.parse(storageData)
      decoded = jwtDecode(storageData)
    }
    return { decoded, storageData }
  }

  UserService.axiosJwt.interceptors.request.use(async (config) => {
    // Do something before request is sent
    const currentTime = new Date()
    const { decoded } = handleDecoded()
    if (decoded?.exp < currentTime.getTime() / 1000) {
      const data = await UserService.refreshToken()
      config.headers['token'] = `Beare ${data?.access_token}`
    }
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

  const handleGetDetailUser = async (id, token) => {
    const res = await UserService.getDetailUser(id, token)
    dispatch(updateUser({ ...res?.data, access_token: token }))
  }

  return (
    <div>
      <Router >
        <Routes >
          {routes.map((route) => {
            const Page = route.page
            const Layout = route.isShowHeader ? DefaultComponent : Fragment
            return (
              <Route key={route.path} path={route.path} element={
                <Layout>
                  <Page />
                </Layout>
              } />
            )
          })}
        </Routes>
      </Router>
    </div>
  )
}

export default App