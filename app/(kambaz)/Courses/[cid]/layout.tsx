"use client";

import { ReactNode, useState, useEffect } from "react";
import CourseNavigation from "./Navigation";
import { FaAlignJustify } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useParams, useRouter } from "next/navigation";
import Breadcrumb from "./Breadcrumb";

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

interface User {
  _id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  dob: string;
  email: string;
  role: string;
}

interface Enrollment {
  _id: string;
  user: string;
  course: string;
}

interface RootState {
  coursesReducer: {
    courses: Course[];
  };
  accountReducer: {
    currentUser: User | null;
  };
  enrollmentsReducer: {
    enrollments: Enrollment[];
  };
}

export default function CoursesLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const { cid } = useParams<{ cid: string }>();
  const router = useRouter();
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const { enrollments } = useSelector((state: RootState) => state.enrollmentsReducer);
  const course = courses.find((course: Course) => course._id === cid);
  const [showNav, setShowNav] = useState(true);
  
  // Route protection - check if user is enrolled
  useEffect(() => {
    // If no user, allow access (public)
    if (!currentUser) return;
    
    // Check if user is enrolled in this course
    const isEnrolled = enrollments.some(
      (e: Enrollment) => e.user === currentUser._id && e.course === cid
    );
    
    // If not enrolled, redirect to dashboard
    if (!isEnrolled) {
      alert("You are not enrolled in this course. Please enroll first.");
      router.push("/Dashboard");
    }
  }, [currentUser, enrollments, cid, router]);
  
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify 
          className="me-4 fs-4 mb-1" 
          style={{ cursor: "pointer" }}
          onClick={() => setShowNav(!showNav)}
        />
        <Breadcrumb course={course} />
      </h2>
      <hr />
      <div className="d-flex">
        {showNav && (
          <div className="d-none d-md-block">
            <CourseNavigation />
          </div>
        )}
        <div className="flex-fill">
          {children}
        </div>
      </div>
    </div>
  );
}