import { configureStore } from "@reduxjs/toolkit";
import TaskReducer from "./TaskReducer";

export const store = configureStore({
    reducer: {
        task: TaskReducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
