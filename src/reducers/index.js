import {combineReducers} from 'redux';
import IdeaReducers from './idea';
import formReducer from './form';

const allReducers = combineReducers({
    idea: IdeaReducers,
    form: formReducer,
});

export default allReducers;