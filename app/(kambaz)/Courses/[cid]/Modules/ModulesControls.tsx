"use client";

import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import ModuleEditor from "./ModuleEditor";

export default function ModulesControls({
  moduleName,
  setModuleName,
  addModule,
}: {
  moduleName: string;
  setModuleName: (title: string) => void;
  addModule: () => void;
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setModuleName(""); // Clear module name when closing
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <div id="wd-modules-controls" className="text-nowrap d-flex justify-content-end align-items-center gap-2 mb-4">
        <button 
          className="btn btn-lg btn-secondary"
          style={{
            backgroundColor: "#d5d5d5",
            border: "none",
            color: "#2d3b45",
          }}
        >
          Collapse All
        </button>
        
        <button 
          className="btn btn-lg btn-secondary"
          style={{
            backgroundColor: "#d5d5d5",
            border: "none",
            color: "#2d3b45",
          }}
        >
          View Progress
        </button>
        
        <div className="dropdown d-inline">
          <button
            className="btn btn-lg btn-secondary dropdown-toggle"
            type="button"
            id="wd-publish-all-btn"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{
              backgroundColor: "#d5d5d5",
              border: "none",
              color: "#2d3b45",
            }}
          >
            <span className="text-success me-1">✓</span> Publish All
          </button>
          <ul className="dropdown-menu" aria-labelledby="wd-publish-all-btn">
            <li><button className="dropdown-item" type="button">Publish All</button></li>
            <li><button className="dropdown-item" type="button">Unpublish All</button></li>
            <li><hr className="dropdown-divider" /></li>
            <li><button className="dropdown-item" type="button">Publish All Modules and Items</button></li>
            <li><button className="dropdown-item" type="button">Unpublish All Modules and Items</button></li>
          </ul>
        </div>
        
        <button 
          className="btn btn-lg btn-danger" 
          onClick={handleShow}
          id="wd-add-module-btn"
        >
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Module
        </button>
        
        <button 
          className="btn btn-lg btn-secondary"
          style={{
            backgroundColor: "#d5d5d5",
            border: "none",
            color: "#2d3b45",
          }}
        >
          <IoEllipsisVertical />
        </button>
      </div>

      <ModuleEditor
        show={show}
        handleClose={handleClose}
        dialogTitle="Add Module"
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={addModule}
      />
    </>
  );
}