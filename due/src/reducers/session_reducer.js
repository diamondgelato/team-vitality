import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const sessionState = {
  id: null
}

const sessionReducer = (state = sessionState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {id: action.currentUser.id})
    case LOGOUT_CURRENT_USER:
      return Object.assign({}, {id: null})
    default:
      return state;
  }
}

export default sessionReducer;