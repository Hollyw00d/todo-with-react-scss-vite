import React from 'react';
import style from './AddButton.module.scss';
import { useAppDispatch } from '../../hooks/storeHooks/hooks.ts';
import { addModeSwitch } from '../../store/todosSlice.tsx';

const AddButton: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={style.wrapper}>
      <button
        onClick={() => dispatch(addModeSwitch())}
        className={style.addButton}
      >
        +
      </button>
    </div>
  );
};

export default AddButton;
