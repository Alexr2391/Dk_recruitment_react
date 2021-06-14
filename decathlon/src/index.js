import React from 'react'
import ReactDom from 'react-dom'
import './global.scss'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import {GlobalContextProvider} from './utils/GlobalContext'


ReactDom.render(
    <GlobalContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </GlobalContextProvider>
, document.getElementById('root'))