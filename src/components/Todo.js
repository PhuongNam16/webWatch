import React,{useEffect}from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, deleted, increment, sortTodos } from '../store/reducers/counterReducer'
import { GETPRODUCT } from '../store/reducers/productReducer'
// import { todosSelector } from '../store/reducers/todosSlice'
import TodoForm from './TodoForm'
const Todo = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GETPRODUCT())
    }, []);

    const todos = useSelector(state => state?.rootReducer?.counterReducer?.todos)
    const listProducts = useSelector(state => state?.productReducer?.listProducts)
    // const listProducts = useSelector(state => console.log(state))
    console.log('data', listProducts)

    // const count = useSelector(state => state?.rootReducer?.counterReducer?.value)
    // const count = useSelector(state => console.log(state))
    return (
        <div className="todo-list">
        <TodoForm/>
            <ul>
                {todos?.map(todo => <li onClick={() => dispatch(deleted(todo.id))} key={todo.id}>{todo.title}</li>)}
            </ul>
            <ul>
                {listProducts?.map(todo => <li key={todo._id}>{todo.name}</li>)}
            </ul>

            {/* <button onClick={() => dispatch(sortTodos())}>SortTodo</button> */}
            {/* <button onClick={()=> dispatch( increment())}>+</button>
            <p>{count}</p>
            
            <button onClick={()=> dispatch( decrement())}>-</button> */}
        </div>
    )
}

export default Todo
