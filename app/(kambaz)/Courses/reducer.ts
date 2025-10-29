import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { courses } from "../Database";
import { v4 as uuidv4 } from "uuid";

interface Course {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  department: string;
  credits: number;
  description: string;
}

interface CoursesState {
  courses: Course[];
}

const initialState: CoursesState = {
  courses: courses,
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addNewCourse: (state, { payload: course }: PayloadAction<Partial<Course>>) => {
      const newCourse: Course = {
        _id: uuidv4(),
        name: course.name || "",
        number: course.number || "",
        startDate: course.startDate || "",
        endDate: course.endDate || "",
        department: course.department || "",
        credits: course.credits || 0,
        description: course.description || "",
      };
      state.courses = [...state.courses, newCourse];
    },
    deleteCourse: (state, { payload: courseId }: PayloadAction<string>) => {
      state.courses = state.courses.filter(
        (course: Course) => course._id !== courseId
      );
    },
    updateCourse: (state, { payload: course }: PayloadAction<Course>) => {
      state.courses = state.courses.map((c: Course) =>
        c._id === course._id ? course : c
      );
    },
  },
});

export const { addNewCourse, deleteCourse, updateCourse } =
  coursesSlice.actions;
export default coursesSlice.reducer;