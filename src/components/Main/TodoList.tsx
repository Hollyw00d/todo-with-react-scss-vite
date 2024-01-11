import React from 'react';
import {useAppSelector} from "../../hooks/storeHooks/hooks.ts";
import Todo from "./Todo.tsx";
import style from './TodoList.module.scss';

const TodoList:React.FC = () => {
    const todos = useAppSelector(state => state.todos.list);

    return (
        <div className={style.list}>
            {
                todos.map(todo => (
                    <Todo key={todo.id} id={todo.id} body={todo.body} completed={todo.completed}/>
                ))
            }
        </div>
    );
};

export default TodoList;