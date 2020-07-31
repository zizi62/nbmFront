import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { usersReducer } from "./usersPageReducer";

const rootReducer = combineReducers({
    usersPage: usersReducer  
})

export type AppStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))

export default store;

