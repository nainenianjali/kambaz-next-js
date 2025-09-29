import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import GreenCheckmark from "./GreenCheckmark";
import { BsGripVertical } from "react-icons/bs";
import { FaPlus, FaEllipsisV } from "react-icons/fa";

export default function Modules() {
  return (
    <div>
      <ModulesControls />
      <br /><br /><br /><br />
      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 border-gray">
          <div className="wd-title d-flex align-items-center p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <span>Week 1</span>
            <div className="ms-auto d-flex align-items-center">
              <LessonControlButtons />
            </div>
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-4 d-flex align-items-center">
              <BsGripVertical className="me-2 fs-5" />
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <div className="ms-auto d-flex align-items-center">
                <LessonControlButtons />
              </div>
            </li>
            <li className="wd-content-item list-group-item p-3 ps-5 d-flex align-items-center">
              <BsGripVertical className="me-2 fs-5" />
              <span>Introduction to the course</span>
              <div className="ms-auto d-flex align-items-center">
                <LessonControlButtons />
              </div>
            </li>
            <li className="wd-content-item list-group-item p-3 ps-5 d-flex align-items-center">
              <BsGripVertical className="me-2 fs-5" />
              <span>Learn what is Web Development</span>
              <div className="ms-auto d-flex align-items-center">
                <LessonControlButtons />
              </div>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-4 d-flex align-items-center">
              <BsGripVertical className="me-2 fs-5" />
              <span className="wd-title">LESSON 1</span>
              <div className="ms-auto d-flex align-items-center">
                <LessonControlButtons />
              </div>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-4 d-flex align-items-center">
              <BsGripVertical className="me-2 fs-5" />
              <span className="wd-title">LESSON 2</span>
              <div className="ms-auto d-flex align-items-center">
                <LessonControlButtons />
              </div>
            </li>
          </ul>
        </li>

        <li className="wd-module list-group-item p-0 mb-5 border-gray">
          <div className="wd-title d-flex align-items-center p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <span>Week 2</span>
            <div className="ms-auto d-flex align-items-center">
              <LessonControlButtons />
            </div>
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-4 d-flex align-items-center">
              <BsGripVertical className="me-2 fs-5" />
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <div className="ms-auto d-flex align-items-center">
               <LessonControlButtons />
              </div>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-4 d-flex align-items-center">
              <BsGripVertical className="me-2 fs-5" />
              <span className="wd-title">LESSON 1</span>
              <div className="ms-auto d-flex align-items-center">
               <LessonControlButtons />
              </div>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-4 d-flex align-items-center">
              <BsGripVertical className="me-2 fs-5" />
              <span className="wd-title">LESSON 2</span>
              <div className="ms-auto d-flex align-items-center">
                <LessonControlButtons />
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}