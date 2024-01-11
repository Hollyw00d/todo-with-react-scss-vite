import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import type {Todo} from "../utils/types/Todo.type.ts";

interface TodosState {
    list: Todo[],
    addMode: boolean
}

const initialState: TodosState = {
    list: [],
    addMode: false
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            state.list.push({
                id: new Date().toISOString(),
                body: action.payload,
                completed: false
            });
        },
        removeTodo: (state, action: PayloadAction<string>) => {
            state.list = state.list.filter(todo => todo.id !== action.payload);
        },
        toggleTodoComplete: (state, action: PayloadAction<string>) => {
            const toggledTodo = state.list.find(todo => todo.id === action.payload);
            if (toggledTodo) {
                toggledTodo.completed = !toggledTodo.completed;
            }
        },
        addModeSwitch: (state) => {
            state.addMode = !state.addMode;
        }
    }
})

export const {addTodo, removeTodo, toggleTodoComplete, addModeSwitch} = todosSlice.actions;
export default todosSlice.reducer;