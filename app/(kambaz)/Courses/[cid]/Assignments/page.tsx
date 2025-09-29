import Link from "next/link";
import { FaSearch, FaPlus } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";
import { MdEditNote } from "react-icons/md";
import LessonControlButtons from "../Modules/LessonControlButtons";

export default function Assignments() {
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
          <li className="list-group-item wd-assignment-list-item border-5">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-4" />
              <MdEditNote className="text-success me-3 fs-2" />
              <div className="flex-grow-1">
                <Link href="/Courses/1234/Assignments/123" className="wd-assignment-link text-decoration-none text-dark fw-bold">
                  A1
                </Link>
                <div className="small text-muted">
                  <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 6 at 12:00am |
                  <br />
                  <strong>Due</strong> May 13 at 11:59pm | 100 pts
                </div>
              </div>
              <LessonControlButtons />
            </div>
          </li>

          <li className="list-group-item wd-assignment-list-item  border-5">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-4" />
              <MdEditNote className="text-success me-3 fs-2" />
              <div className="flex-grow-1">
                <Link href="/Courses/1234/Assignments/124" className="wd-assignment-link text-decoration-none text-dark fw-bold">
                  A2
                </Link>
                <div className="small text-muted">
                  <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 13 at 12:00am |
                  <br />
                  <strong>Due</strong> May 20 at 11:59pm | 100 pts
                </div>
              </div>
              <LessonControlButtons />
            </div>
          </li>

          <li className="list-group-item wd-assignment-list-item border-5">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-4" />
              <MdEditNote className="text-success me-3 fs-2" />
              <div className="flex-grow-1">
                <Link href="/Courses/1234/Assignments/125" className="wd-assignment-link text-decoration-none text-dark fw-bold">
                  A3
                </Link>
                <div className="small text-muted">
                  <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 20 at 12:00am |
                  <br />
                  <strong>Due</strong> May 27 at 11:59pm | 100 pts
                </div>
              </div>
              <LessonControlButtons />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}