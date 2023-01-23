import React from 'react';
import { useDispatch } from 'react-redux';
import { RiCloseCircleLine } from 'react-icons/ri';

import { removeTodo, toggleTodoComplete } from '../store/TodoSlice';

const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(toggleTodoComplete({ id }));
  };

  const handleRemoveTodo = () => {
    dispatch(removeTodo({ id }));
  };

  return (
    <li className={`todo__list__item${completed ? '__completed' : ''}`}>
      <input type='checkbox' checked={completed} onChange={handleChange} />
      <p>{text}</p>
      <RiCloseCircleLine className='delete' onClick={handleRemoveTodo} />
    </li>
  );
};

export default TodoItem;
