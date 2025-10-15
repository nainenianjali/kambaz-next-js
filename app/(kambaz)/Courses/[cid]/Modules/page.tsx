"use client";
import { useParams } from "next/navigation";
import * as db from "../../../Database";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { ListGroup, ListGroupItem } from "react-bootstrap";

export default function Modules() {
  const { cid } = useParams();
  const modules = db.modules;
  
  return (
    <div>
      <ModulesControls />
      <br /><br /><br /><br />
      <ListGroup id="wd-modules" className="rounded-0">
        {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (
            <ListGroupItem key={module._id} className="wd-module p-0 mb-5 border-gray">
              <div className="wd-title d-flex align-items-center p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                <span>{module.name}</span>
                <div className="ms-auto d-flex align-items-center">
                  <LessonControlButtons />
                </div>
              </div>
              {module.lessons && (
                <ListGroup className="wd-lessons rounded-0">
                  {module.lessons.map((lesson: any) => (
                    <ListGroupItem key={lesson._id} className="wd-lesson p-3 ps-4 d-flex align-items-center">
                      <BsGripVertical className="me-2 fs-5" />
                      <span className="wd-title">{lesson.name}</span>
                      <div className="ms-auto d-flex align-items-center">
                        <LessonControlButtons />
                      </div>
                    </ListGroupItem>
                  ))}
                </ListGroup>
              )}
            </ListGroupItem>
          ))}
      </ListGroup>
    </div>
  );
}