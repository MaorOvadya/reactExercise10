// import { legacy_createStore } from 'redux'
// const store = legacy_createStore(moodReducer)
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import {configureStore} from '@reduxjs/toolkit'

import { Provider } from 'react-redux'
import { moodReducer } from './mood'

const store = configureStore({ reducer: moodReducer })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode >,
)
