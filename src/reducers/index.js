import {combineReducers} from 'redux';
import IdeaReducers from './idea';

const allReducers = combineReducers({
    idea: IdeaReducers,
});

export default allReducers;