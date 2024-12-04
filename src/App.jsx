import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Routes } from 'react-router-dom';
import { MainLayout, AdminLayout } from './layouts';
import { HomePage, DetailsPage, LoginPage, AdminPage, ErrorPage } from './pages';
import { AddMugPage, EditMugPage, DeleteMugPage } from './pages/admin';
import { ROUTES } from './utils/constants'
import { loadAllMugs, mugLoader } from './utils';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path={ROUTES.HOME} element={<MainLayout />}>
          <Route index element={<HomePage />} />
          {/* <Route path={ROUTES.ADMIN} element={<AdminPage />} /> */}
          <Route path={ROUTES.DETAILS_PAGE} element={<DetailsPage />} loader={mugLoader} />
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          <Route path={ROUTES.ERROR} element={<ErrorPage />} ></Route>
        </Route>
        <Route path={ROUTES.ADMIN} element={<AdminLayout />} loader={loadAllMugs}>
          <Route path={ROUTES.ADMIN} element={<AdminPage/>}/>
          <Route path={ROUTES.ADD} element={<AddMugPage/>}/>
          <Route path={ROUTES.EDIT} element={<EditMugPage/>}/>
          <Route path={ROUTES.DELETE} element={<DeleteMugPage/>}/>
        </Route>
      </Route>
    )
  )

  return (<RouterProvider router={router} />)
}

export default App;

/**

loader={mugLoader}
loader={() => loadAllMugs}

 */