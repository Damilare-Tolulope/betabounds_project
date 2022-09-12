import React, { useEffect } from 'react';
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom';
import { authProtectedRoutes, publicRoutes } from './routes';

import Layout from './layouts/Layout';

// Styles
import "./assets/styles/general.scss"
import "./assets/styles/auth.scss"
import "./assets/styles/dashboard.scss"
import "./assets/styles/idea.scss"
import "./assets/styles/cofunder.scss"
import "./assets/styles/profile.scss"
import "./assets/styles/project.scss"
import "./assets/styles/forum.scss"

const App = () => {
  const isProtected = true;
  const notProtected = false;

  const token = localStorage.getItem("access_token") || null

  useEffect(() => {
    localStorage.setItem("access_token", "myToken")
  }, [])

  return (
    <div className='App'>
        <Routes>
        {authProtectedRoutes.map((route, index) => {
          const { path, component: Component, title } = route;
          return <Route key={index} path={path} element={(isProtected && !token) ? <Navigate to="/" /> : (
              <Layout title={title}>
                <Component />
              </Layout>
            )} />
        })}

        {publicRoutes.map((route, index) => {
          const { path, component: Component } = route;
          return <Route key={index} path={path} element={(notProtected && !token) ? <Navigate to="/" /> : <Component />} />
        })}
        </Routes>
    </div>
  );
}

export default App;
