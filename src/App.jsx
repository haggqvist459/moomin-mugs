import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { MainLayout, AdminLayout } from './layouts';
import { HomePage, DetailsPage, AdminPage, ErrorPage } from './pages';
import { AddMugPage, EditMugPage, DeleteMugPage, EditMugDetailsPage } from './pages/admin';
import { mugLoader, ROUTES } from './utils';


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path={ROUTES.HOME} element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path={ROUTES.DETAILS} element={<DetailsPage />} loader={mugLoader} />
          <Route path={ROUTES.ERROR} element={<ErrorPage />} />
        </Route>
        <Route path={ROUTES.ADMIN} element={<AdminLayout />}>
          <Route index element={<AdminPage/>}/>
          <Route path={ROUTES.ADD} element={<AddMugPage/>}/>
          <Route path={ROUTES.EDIT_PAGE} element={<EditMugPage/>}/>
          <Route path={ROUTES.EDIT_DETAILS} element={<EditMugDetailsPage/>} loader={mugLoader}/>
          <Route path={ROUTES.DELETE} element={<DeleteMugPage/>}/>
        </Route>
      </Route>
    )
  )

  return (<RouterProvider router={router} />)
}

export default App;
