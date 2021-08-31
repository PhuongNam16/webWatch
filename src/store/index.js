import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
// import todosReducer from './reducers/todosSlice';
import rootReducer from './reducers/rootReducer';
//store

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk]
        
})

export default store;