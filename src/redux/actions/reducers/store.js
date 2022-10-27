import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { todosReducers } from './todosReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import { tabReducer } from './tabreducer';
const reducer=combineReducers({
todos:todosReducers,
currentTab:tabReducer

})

const middleware=[thunk];


const store=createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;