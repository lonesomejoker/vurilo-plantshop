import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { MainRouter } from './router/MainRouter'
import { store } from './app/store'
import { Provider } from 'react-redux'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
  
    <RouterProvider router={MainRouter}/>
    </Provider>
 
  </React.StrictMode>,
)
