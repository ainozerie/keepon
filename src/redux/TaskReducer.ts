import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface TaskInitialState {
    activeTaskId: string
}
const initialState: TaskInitialState = {
    activeTaskId: ''
}

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        setActiveTaskId: (state, action: PayloadAction<string>) => {
            return state = {...state, activeTaskId: action.payload}
        }
    }
});

// Part 4
export const { setActiveTaskId } = taskSlice.actions;
export default taskSlice.reducer;
