import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';
import github from './github';

//  root reducer
const rootReducer = combineReducers({
    counter,
    todos,
    github
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;