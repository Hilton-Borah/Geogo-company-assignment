import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { Appreducer } from "./AppReducer/reducer";
import { Authreducer } from "./Authreducer/reducer";
const rootReducer = combineReducers({Appreducer,Authreducer})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));

