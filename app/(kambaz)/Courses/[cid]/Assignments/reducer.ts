import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../../Database";

// Create reducer's initial state with default assignments from database
const initialState = {
  assignments: assignments,
};

// Create slice
const assignmentsSlice = createSlice({
  name: "assignments", // Name the slice
  initialState, // Set initial state
  reducers: {
    // Add a new assignment
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment: any = {
        ...assignment,
        _id: new Date().getTime().toString(), // Generate unique ID
      };
      state.assignments = [...state.assignments, newAssignment] as any;
    },
    
    // Delete an assignment by ID
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (a: any) => a._id !== assignmentId
      );
    },
    
    // Update an assignment
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignment._id ? assignment : a
      ) as any;
    },
    
    // Set the editing flag for an assignment
    editAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignmentId ? { ...a, editing: true } : a
      ) as any;
    },
  },
});

// Export all reducer functions
export const { addAssignment, deleteAssignment, updateAssignment, editAssignment } =
  assignmentsSlice.actions;

// Export reducer
export default assignmentsSlice.reducer;