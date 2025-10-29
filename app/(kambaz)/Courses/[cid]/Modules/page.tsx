"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { addModule, editModule, updateModule, deleteModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";

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

interface RootState {
  modulesReducer: {
    modules: Module[];
  };
}

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  
  const { modules } = useSelector((state: RootState) => state.modulesReducer);
  const dispatch = useDispatch();

  return (
    <div id="wd-modules">
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={() => {
          if (moduleName.trim()) {
            dispatch(addModule({ name: moduleName, course: cid as string }));
            setModuleName("");
          }
        }}
      />

      <ul id="wd-modules-list" className="list-group rounded-0">
        {modules
          .filter((module) => module.course === cid)
          .map((module) => (
            <li 
              key={module._id} 
              className="wd-module list-group-item p-0 mb-5 fs-5 border-gray"
            >
              <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                
                {!module.editing && <span className="flex-grow-1">{module.name}</span>}
                
                {module.editing && (
                  <input
                    className="form-control w-50 d-inline-block"
                    onChange={(e) =>
                      dispatch(updateModule({ ...module, name: e.target.value }))
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        dispatch(updateModule({ ...module, editing: false }));
                      }
                    }}
                    defaultValue={module.name}
                    autoFocus
                  />
                )}
                
                <ModuleControlButtons
                  moduleId={module._id}
                  deleteModule={(moduleId) => dispatch(deleteModule(moduleId))}
                  editModule={(moduleId) => dispatch(editModule(moduleId))}
                />
              </div>
              
              {module.lessons && module.lessons.length > 0 && (
                <ul className="wd-lessons list-group rounded-0">
                  {module.lessons.map((lesson) => (
                    <li 
                      key={lesson._id} 
                      className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center"
                    >
                      <BsGripVertical className="me-2 fs-3" />
                      <span className="flex-grow-1">{lesson.name}</span>
                      <LessonControlButtons />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}