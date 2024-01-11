import React from 'react';
import type { Todo } from '../../utils/types/Todo.type.ts';
import { useAppDispatch } from '../../hooks/storeHooks/hooks.ts';
import { removeTodo, toggleTodoComplete } from '../../store/todosSlice.tsx';
import cn from 'classnames';
import style from './Todo.module.scss';
import '../../scss/main.scss';

const Todo: React.FC<Todo> = ({ id, body, completed }) => {
  const dispatch = useAppDispatch();

  return (
    <div className={style.todo}>
      <button
        className={cn(style.body, {
          [style.bodyCompleted]: completed
        })}
        onClick={() => dispatch(toggleTodoComplete(id))}
      >
        {body}
      </button>
      <button className={style.remove} onClick={() => dispatch(removeTodo(id))}>
        <div
          className={cn(style.icon, {
            [style.iconCompleted]: completed
          })}
        >
          X
        </div>
      </button>
    </div>
  );
};

export default Todo;
