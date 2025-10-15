"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import * as db from "../../../Database";
import { FaSearch, FaPlus } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";
import { MdEditNote } from "react-icons/md";
import LessonControlButtons from "../Modules/LessonControlButtons";
//import { ReactNode } from "react";

interface Assignment {
  _id: string;
  course: string;
  title: string;
  availableFrom: string;
  due: string;
  points: number;
}

export default function Assignments() {
  const { cid } = useParams();
  const assignments: Assignment[]=db.assignments as Assignment[];

  return (
    <div id="wd-assignments" className="p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="input-group" style={{ width: "300px" }}>
          <span className="input-group-text bg-white">
            <FaSearch />
          </span>
          <input 
            type="text"
            className="form-control border-start-0" 
            placeholder="Search..."
            id="wd-search-assignment" 
          />
        </div>
        <div>
          <button className="btn btn-secondary me-2" id="wd-add-assignment-group">
            <FaPlus className="me-1" /> Group
          </button>
          <button className="btn btn-danger" id="wd-add-assignment">
            <FaPlus className="me-1" /> Assignment
          </button>
        </div>
      </div>

      <div className="border rounded">
        <div className="d-flex justify-content-between align-items-center p-3 bg-light border-bottom">
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-2 fs-4" />
            <button className="btn btn-sm me-2">▼</button>
            <h3 className="mb-0 fs-5 fw-bold" id="wd-assignments-title">
              ASSIGNMENTS
            </h3>
          </div>
          <div className="d-flex align-items-center">
            <span className="badge bg-secondary rounded-pill me-3">40% of Total</span>
            <FaPlus className="me-2" />
            <LessonControlButtons />
          </div>
        </div>

        <ul className="list-group list-group-flush" id="wd-assignment-list">
          {assignments
            .filter((assignment: Assignment) => {
              return assignment.course === cid;
            })
            .map((assignment: Assignment) => {
              return (
                <li key={assignment._id} className="list-group-item wd-assignment-list-item border-5">
                  <div className="d-flex align-items-center">
                    <BsGripVertical className="me-2 fs-4" />
                    <MdEditNote className="text-success me-3 fs-2" />
                    <div className="flex-grow-1">
                      <Link
                        href={`/Courses/${cid}/Assignments/${assignment._id}`}
                        className="wd-assignment-link text-decoration-none text-dark fw-bold"
                      >
                        {assignment.title}
                      </Link>
                      <div className="small text-muted">
                        <span className="text-danger">Multiple Modules</span> |
                        <strong> Not available until</strong> {assignment.availableFrom} |
                        <br />
                        <strong>Due</strong> {assignment.due} | {assignment.points} pts
                      </div>
                    </div>
                    <LessonControlButtons />
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}