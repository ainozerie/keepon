import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { NewTaskInterface, TaskInterface } from "../components/interfaces/Task";

export interface TaskInitialState {
    activeTaskId: string,
    tasks: TaskInterface[],
    newTask: NewTaskInterface
}
const initialState: TaskInitialState = {
    activeTaskId: '',
    tasks: [],
    newTask: {
        title: '',
        description: '',
        deadline: ''
    }
}

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        setActiveTaskId: (state, action: PayloadAction<string>) => {
            return state = {...state, activeTaskId: action.payload}
        },
        setTasks: (state, action: PayloadAction<TaskInterface[]>) => {
            return state = {...state, tasks: action.payload}
        },
        setNewTask: (state, action: PayloadAction<NewTaskInterface>) => {
            return state = {...state, newTask: action.payload}
        }
    }
});

// Part 4
export const { setActiveTaskId, setTasks, setNewTask } = taskSlice.actions;
export default taskSlice.reducer;
