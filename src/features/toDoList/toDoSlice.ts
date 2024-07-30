import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ToDo {
  id: number;
  text: string;
  isDone: boolean;
}

export const toDoSlice = createSlice({
  name: "toDos",
  initialState: [] as ToDo[],
  reducers: {
    addToDo: (state, action: PayloadAction<string>) => {
      state.push({ id: Date.now(), text: action.payload, isDone: false });
    },
    toggleToDo: (state, action: PayloadAction<number>) => {
      const toDo = state.find((v) => v.id === action.payload);

      if (toDo) {
        toDo.isDone = !toDo.isDone;
      }
    },
    deleteToDo: (state, action: PayloadAction<number>) => {
      return state.filter((v) => v.id !== action.payload);
    },
  },
});

export const { addToDo, toggleToDo, deleteToDo } = toDoSlice.actions;

export default toDoSlice.reducer;
