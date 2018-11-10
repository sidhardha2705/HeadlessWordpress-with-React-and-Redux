import { combineReducers } from 'redux';
import postsReducer from './reducer_fetchposts';

const rootReducer = combineReducers({
  posts : postsReducer
});

export default rootReducer;
