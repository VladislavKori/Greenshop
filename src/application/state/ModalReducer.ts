import { Action } from "redux";

const defaultState = {
  modal: ''
}

export const ModalReducer = (state = defaultState, action: Action<string>) => {
  switch (action.type) {
    case "OPEN_AUTH":
      return state.modal = "AUTH"
      break;
    case "OPEN_ORDER":
      return state.modal = "ORDER"
      break;
    case "CLOSE_MODAL":
      return state.modal = ""
      break;
    default:
      return state
  }
}
