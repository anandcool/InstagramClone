import React from 'react'
import store from './store'
import {Provider} from 'react-redux'
r
import App from '../App.js'

const RootApp = () =>{
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
}

export default RootApp