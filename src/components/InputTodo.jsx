import React, { useState } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { useDispatch } from 'react-redux';

import { addTodo } from '../store/TodoSlice';

const InputTodo = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const addTask = () => {
    if (!text) return;

    dispatch(addTodo(text));
    setText('');
  };

  const handleChange = e => {
    setText(e.target.value);
  };

  return (
    <label className='todo__input'>
      <input
        type='text'
        value={text}
        onChange={handleChange}
        className='todo__input input'
        placeholder='Add a task here...'
      />
      <button onClick={addTask} className='btn'>
        <BsPlusLg />
      </button>
    </label>
  );
};

export default InputTodo;
