import {createSlice} from '@reduxjs/toolkit';

const initialState = {value: 0, todos: [], searchTodos: []};

const counterSlice = createSlice ({
  name: 'counter',
  initialState,
  reducers: {
    // actions
    addTodo (state, action) {
      state.todos = [
        ...state.todos,
        {
          id: Math.random (),
          title: action.payload,
        },
      ];
      // console.log(state.todos);
    },
    deleted (state, action) {
      state.todos = state.todos.filter (todos => todos.id !== action.payload);
      // console.log(state.todos);
    },
    sortTodos (state, action) {
        state.todos = state.todos.sort(function(a, b){
            if(a.title < b.title) { return -1; }
            if(a.title > b.title) { return 1; }
            return 0;
        })
    },
    searchTodos (state, action) {
        state.searchTodos = state.todos.filter(title => {return title.indexOf(title) !== -1;} )
    }
    // increment (state) {
    //   state.value++;
    //   // console.log(state.value);
    // },
    // decrement (state) {
    //   state.value--;
    //   //   console.log(state.value);
    // },
    // incrementByAmount (state, action) {
    //   state.value += action.payload;
    // },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  addTodo,
  deleted,
  sortTodos,
  searchTodos,
  
} = counterSlice.actions;
// export default counterSlice.reducer
const {reducer: counterReducer} = counterSlice;

export default counterReducer;
