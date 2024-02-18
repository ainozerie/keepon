import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { NewTaskInterface, TaskInterface } from "../components/interfaces/Task";

export interface TaskInitialState {
    activeTaskId: string,
    tasks: TaskInterface[],
    newTask: NewTaskInterface,
    edit: boolean,
    toBeDeleted: string,
    toBeAdded: string
}

const initialState: TaskInitialState = {
    activeTaskId: '',
    tasks: [],
    newTask: {
        title: '',
        description: '',
        deadline: ''
    },
    edit: false,
    toBeDeleted: '',
    toBeAdded: ''
}

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        setActiveTaskId: (state, action: PayloadAction<string>) => {
            return state = {...state, activeTaskId: action.payload}
        },
        setToBeDeleted: (state, action: PayloadAction<string>) => {
            return state = {...state, toBeDeleted: action.payload}
        },
        setToBeAdded: (state, action: PayloadAction<string>) => {
            return state = {...state, toBeAdded: action.payload}
        },
        setTasks: (state, action: PayloadAction<TaskInterface[]>) => {
            let sortedTasks:TaskInterface[] = [...action.payload.filter(t => !t.completed), ...action.payload.filter(t => t.completed)]
            return state = {...state, tasks: sortedTasks}
        },
        setNewTask: (state, action: PayloadAction<NewTaskInterface>) => {
            return state = {...state, newTask: action.payload}
        },
        setEdit: (state, action: PayloadAction<boolean>) => {
            return state = {...state, edit: action.payload}
        }
    }
});

// Part 4
export const { setActiveTaskId, setTasks, setNewTask, setEdit, setToBeDeleted, setToBeAdded } = taskSlice.actions;
export default taskSlice.reducer;
