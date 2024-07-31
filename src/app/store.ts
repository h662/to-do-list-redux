import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "../features/toDoList/toDoSlice";
import usersReducer from "../features/users/usersSlice";

export const store = configureStore({
  reducer: {
    toDos: toDoReducer,
    users: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
