import React from 'react';
import TodoForm from "../../components/Main/TodoForm.tsx";
import TodoList from "../../components/Main/TodoList.tsx";
import style from "./Main.module.scss";
import TodayDate from "../../components/Main/Date.tsx";
import AddButton from "../../components/Main/AddButton.tsx";
import {useAppSelector} from "../../hooks/storeHooks/hooks.ts";

const Main:React.FC = () => {
    const addMode = useAppSelector(state => state.todos.addMode);

    return (
        <div className={style.main}>
            <TodayDate />
            {
                addMode
                    ? <TodoForm/>
                    : null
            }
            <TodoList />
            <AddButton />
        </div>
    );
};

export default Main;