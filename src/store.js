import {createStore,applyMiddleware} from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
const middleware = [thunk]

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...applyMiddleware))
)

export default store