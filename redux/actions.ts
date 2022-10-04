import {Dispatch} from 'redux';
import {Action} from './reducers';

export const SET_COUNTRY_NAME = 'SET_CUNTRY_NAME';

export const setName = (name: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({type: SET_COUNTRY_NAME, payload: name});
  };
};
