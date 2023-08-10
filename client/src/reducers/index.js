import { combineReducers } from 'redux';
import { reducer as formReducer } from 'react';
import authReducer from './authReducer'

export default combineReducers({
    auth: authReducer,
    form: formReducer
})