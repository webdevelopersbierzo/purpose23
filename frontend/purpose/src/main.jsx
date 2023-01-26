import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import ContactPage from './routes/ContactPage';
import LoginPage from './routes/LoginPage';
import RegisterPage from './routes/RegisterPage';
import ProfilePage from './routes/ProfilePage.jsx';
import Error from './routes/Error';
import PurposeAddForm from './routes/PurposeAddForm';
import PurposeEditForm from './routes/PurposeEditForm';
import DeletePage from './routes/DeletePage';

const router = createBrowserRouter([
  {
    path:'/',
    element:  <App />,
    errorElement:<Error></Error>
  },
  {
    path:'/contact',
    element: <ContactPage></ContactPage>
  }, 
  {
    path:'/Login',
    element: <LoginPage></LoginPage>
  },
  {
    path:'/Register',
    element: <RegisterPage></RegisterPage>
  },
  {
    path:'/profile',
    element: <ProfilePage></ProfilePage>
  },
  {
    path:'/profile/purpose/add',
    element: <PurposeAddForm></PurposeAddForm>
  },
  {
    path:'/profile/purpose/edit/:id',
    element:<PurposeEditForm />
  },
  {
    path:'/profile/purpose/delete/:id',
    element:<DeletePage />
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />    
  </React.StrictMode>,
)
