// import { createSlice } from '@reduxjs/toolkit'
// const todosSlice = createSlice(
//     {
//         name : 'todos',
//         initialState : {
//             allTodos : [
//                 {
//                     id: 1,
//                     title : 'Todo 1',
//                     completed : false
//                 },
//                 {
//                     id: 2,
//                     title : 'Todo 2',
//                     completed : false
//                 },
//                 {
//                     id: 3,
//                     title : 'Todo 3',
//                     completed : false
//                 }
//             ]
//         }
//     }
// )

// reducers :{
//     addTodo : (state, action) => {
//         console.log(action.payload)
//     }
// }

// //reducers 
// const todosReducer = todosSlice.reducer
// //selector
// export const todosSelector = state => state.todosReducer.allTodos


// export const {addTodo} = todosSlice.actions
// export default todosReducer;