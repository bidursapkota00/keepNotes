import { createStore, combineReducers } from 'redux';

import {addReducer} from '../reducers/addreducer';

const rootReducer = combineReducers({
    add: addReducer,
});

const configureStore = () => {

return createStore(rootReducer);

}

export default configureStore;