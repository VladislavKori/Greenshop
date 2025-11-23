import { createStore, combineReducers } from "redux";
import {ModalReducer} from './state/ModalReducer'

const rootReducer = combineReducers({
  ModalReducer
})

const store = createStore(rootReducer)

export default store;
