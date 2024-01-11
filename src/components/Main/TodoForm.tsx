import React, { useState } from 'react';
import { useAppDispatch } from '../../hooks/storeHooks/hooks.ts';
import { addModeSwitch, addTodo } from '../../store/todosSlice.tsx';

const TodoForm: React.FC = () => {
  const [text, setText] = useState<string>('');
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
  };

  const handleClick = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
      dispatch(addModeSwitch());
    } else {
      dispatch(addModeSwitch());
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <div>
      <input
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="input"
        type="text"
      />
      <button onClick={handleClick} className="button">
        Add
      </button>
    </div>
  );
};

export default TodoForm;
