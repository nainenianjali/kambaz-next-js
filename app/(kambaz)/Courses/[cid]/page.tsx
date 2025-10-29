"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { FormControl, ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./Modules/ModulesControls";
import ModuleControlButtons from "./Modules/ModuleControlButtons";
// Import reducer functions to add, delete, and update modules
import { addModule, editModule, updateModule, deleteModule } from "./Modules/reducer";
// Import useSelector and useDispatch
import { useSelector, useDispatch } from "react-redux";

// Define types
interface Module {
  _id: string;
  name: string;
  course: string;
  editing?: boolean;
}

interface RootState {
  modulesReducer: {
    modules: Module[];
  };
}

export default function Modules() {
  const { cid } = useParams<{ cid: string }>();
  const [moduleName, setModuleName] = useState("");
  
  // Retrieve modules state variables with proper typing
  const { modules } = useSelector((state: RootState) => state.modulesReducer);
  
  // Get dispatch to call reducer functions
  const dispatch = useDispatch();

  return (
    <div className="wd-modules">
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        // Wrap reducer functions with dispatch, clear module name
        addModule={() => {
          dispatch(addModule({ name: moduleName, course: cid }));
          setModuleName("");
        }}
      />

      <ListGroup id="wd-modules" className="rounded-0">
        {modules
          .filter((module: Module) => module.course === cid)
          .map((module: Module) => (
            <ListGroup.Item key={module._id} className="p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                
                {/* Show name if not editing */}
                {!module.editing && module.name}
                
                {/* Show input field if editing */}
                {module.editing && (
                  <FormControl
                    className="w-50 d-inline-block"
                    // Wrap reducer functions with dispatch
                    onChange={(e) =>
                      dispatch(
                        updateModule({ ...module, name: e.target.value })
                      )
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        // Wrap reducer functions with dispatch
                        dispatch(updateModule({ ...module, editing: false }));
                      }
                    }}
                    defaultValue={module.name}
                  />
                )}
                
                {/* Wrap reducer functions with dispatch */}
                <ModuleControlButtons
                  moduleId={module._id}
                  deleteModule={(moduleId) => {
                    dispatch(deleteModule(moduleId));
                  }}
                  editModule={(moduleId) => dispatch(editModule(moduleId))}
                />
              </div>
            </ListGroup.Item>
          ))}
      </ListGroup>
    </div>
  );
}