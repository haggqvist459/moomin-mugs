import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './App.css';
import MainLayout from './layouts/MainLayout';
import { HomePage, DetailsPage, LoginPage, AdminPage } from './pages';
import { ROUTES } from './utils/constants'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={ROUTES.HOME} element={<MainLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path={ROUTES.ADMIN} element={<AdminPage/>}/>
        <Route path={ROUTES.DETAILS} element={<DetailsPage/>}/>
        <Route path={ROUTES.LOGIN} element={<LoginPage/>}/>
      </Route>
    )
  )
  return (<RouterProvider router={router}/>)
}

export default App;
