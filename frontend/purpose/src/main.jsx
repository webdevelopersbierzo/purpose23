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

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />    
  </React.StrictMode>,
)
