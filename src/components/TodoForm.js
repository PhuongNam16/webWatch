import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addTodo} from '../store/reducers/counterReducer';

const TodoForm = () => {
  const dispatch = useDispatch ();
  const [title, setTitle] = useState ('');

  const changeTitle = event => {
    setTitle (event.target.value);
    // console.log(event.target.value);
  };
  const addSingleTodo = event => {
    event.preventDefault ();
  };
  return (
    <div className="container">
      <form onSubmit={addSingleTodo}>
      <div className="row">
      <div className="col-sm">
        <input
          type="text"
          value={title}
          placeholder="Todo ..."
          onChange={changeTitle}
        />
        <input
          type="submit"
          value="Add"
          onClick={() => {
            //     dispatch (addTodo (title));
            //   setTitle('')
            if (title !== '') {
              dispatch (addTodo (title));
              setTitle ('');
            } else {
              alert ('nhap vao');
            }
          }}
        />
      </div>
      <div className="col-sm">
        <input
          type="text"
          value={title}
          placeholder="search..."
        //   onChange={changeTitle}
        />
        <input
          type="submit"
          value="Add"
          onClick={() => {
            //     dispatch (addTodo (title));
            //   setTitle('')
            if (title !== '') {
              dispatch (addTodo (title));
              setTitle ('');
            } else {
              alert ('nhap vao');
            }
          }}
        />
      </div>
      </div>
      </form>
    </div>
  );
};

export default TodoForm;
