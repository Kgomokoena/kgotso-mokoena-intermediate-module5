import {SET_COUNTRY_NAME} from './actions';

const initialstate = {
  name: '',
};

export type Action = {
  type: string;
  payload: string;
};

const userReducer = (state = initialstate, action: Action) => {
  switch (action.type) {
    case SET_COUNTRY_NAME:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
