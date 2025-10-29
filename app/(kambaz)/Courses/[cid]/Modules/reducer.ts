import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { modules } from "../../../Database";
import { v4 as uuidv4 } from "uuid";

interface Lesson {
  _id: string;
  name: string;
  description: string;
  module: string;
}

interface Module {
  _id: string;
  name: string;
  course: string;
  lessons?: Lesson[];
  editing?: boolean;
}

interface ModulesState {
  modules: Module[];
}

const initialState: ModulesState = {
  modules: modules,
};

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    addModule: (state, { payload: module }: PayloadAction<{ name: string; course: string }>) => {
      const newModule: Module = {
        _id: uuidv4(),
        name: module.name,
        course: module.course,
        lessons: [],
        editing: false,
      };
      state.modules = [...state.modules, newModule];
    },
    
    deleteModule: (state, { payload: moduleId }: PayloadAction<string>) => {
      state.modules = state.modules.filter((m) => m._id !== moduleId);
    },
    
    updateModule: (state, { payload: module }: PayloadAction<Module>) => {
      state.modules = state.modules.map((m) =>
        m._id === module._id ? { ...module, editing: false } : m
      );
    },
    
    editModule: (state, { payload: moduleId }: PayloadAction<string>) => {
      state.modules = state.modules.map((m) =>
        m._id === moduleId ? { ...m, editing: true } : { ...m, editing: false }
      );
    },
  },
});

export const { addModule, deleteModule, updateModule, editModule } = modulesSlice.actions;
export default modulesSlice.reducer;