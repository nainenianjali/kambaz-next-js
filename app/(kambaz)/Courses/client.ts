/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const axiosWithCredentials = axios.create({ withCredentials: true });
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const USERS_API = `${HTTP_SERVER}/api/users`;
const COURSES_API = `${HTTP_SERVER}/api/courses`;
const MODULES_API = `${HTTP_SERVER}/api/modules`;

// Type definitions
interface Module {
  _id: string;
  name: string;
  description?: string;
  course?: string;
  lessons?: string[];
}

interface Course {
  _id: string;
  name: string;
  number: string;
  description?: string;
  modules?: string[];
}

// ✅ ADD THESE ENROLLMENT FUNCTIONS
export const enrollIntoCourse = async (userId: string, courseId: string) => {
  const response = await axiosWithCredentials.post(
    `${USERS_API}/${userId}/courses/${courseId}`
  );
  return response.data;
};

export const unenrollFromCourse = async (userId: string, courseId: string) => {
  const response = await axiosWithCredentials.delete(
    `${USERS_API}/${userId}/courses/${courseId}`
  );
  return response.data;
};

export const findEnrollmentsForUser = async (userId: string) => {
  const response = await axiosWithCredentials.get(
    `${USERS_API}/${userId}/enrollments`
  );
  return response.data;
};

// Module functions
export const deleteModule = async (courseId: string, moduleId: string) => {
  const response = await axios.delete(
   `${COURSES_API}/${courseId}/modules/${moduleId}`
 );
return response.data;
};

export const findUsersForCourse = async (courseId: string) => {
  const response = await axios.get(`${COURSES_API}/${courseId}/users`);
  return response.data;
};

export const updateModule = async (
   courseId: string, module: any) => {

 const { data } = await axios.put(
   `${COURSES_API}/${courseId}/modules/${module._id}`,
   module
 );
 return data;
};

export const createModuleForCourse = async (courseId: string, module: Omit<Module, '_id'>) => {
  const response = await axios.post(
    `${COURSES_API}/${courseId}/modules`,
    module
  );
  return response.data;
};  

// Course functions
export const fetchAllCourses = async () => {
  const { data } = await axios.get<Course[]>(COURSES_API);
  return data;
};

export const findMyCourses = async () => {
  const { data } = await axiosWithCredentials.get<Course[]>(`${USERS_API}/current/courses`);
  return data;
};

export const createCourse = async (course: Omit<Course, '_id'>) => {
  const { data } = await axiosWithCredentials.post<Course>(`${USERS_API}/current/courses`, course);
  return data;
};

export const deleteCourse = async (id: string) => {
  const { data } = await axiosWithCredentials.delete(`${COURSES_API}/${id}`);
  return data;
};

export const updateCourse = async (course: Course) => {
  const { data } = await axios.put<Course>(`${COURSES_API}/${course._id}`, course);
  return data;
};

export const findModulesForCourse = async (courseId: string) => {
  const response = await axios.get<Module[]>(`${COURSES_API}/${courseId}/modules`);
  return response.data;
};