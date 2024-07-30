import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "../features/toDoList/toDoSlice";

export const store = configureStore({
  reducer: {
    toDos: toDoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
