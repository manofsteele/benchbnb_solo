import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

const sessionErrorsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {errors: []};
    case RECEIVE_SESSION_ERRORS:
      return merge({}, state, {errors: action.errors});
    default:
      return state;
  }
};

export default sessionErrorsReducer;
