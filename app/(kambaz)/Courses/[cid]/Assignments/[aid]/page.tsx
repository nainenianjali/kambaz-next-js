"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import * as db from "../../../../Database";
import { FaCalendarAlt } from "react-icons/fa";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignment = db.assignments.find((a: any) => a._id === aid);

  if (!assignment) {
    return <div>Assignment not found</div>;
  }

  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">Assignment Name</label>
        <input 
          id="wd-name" 
          className="form-control"
          defaultValue={assignment.title} 
        />
      </div>

      <div className="mb-3">
        <textarea 
          id="wd-description" 
          className="form-control"
          rows={10}
          defaultValue={assignment.description || `The assignment is available online

Submit a link to the landing page of your Web application running on Netlify.

The landing page should include the following:

- Your full name and section
- Links to each of the lab assignments  
- Link to the Kanbas application
- Links to all relevant source code repositories

The Kanbas application should include a link to navigate back to the landing page.`}
        />
      </div>

      <div className="row mb-3">
        <label htmlFor="wd-points" className="col-md-3 col-form-label text-end">Points</label>
        <div className="col-md-9">
          <input 
            id="wd-points" 
            className="form-control"
            defaultValue={assignment.points} 
          />
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="wd-group" className="col-md-3 col-form-label text-end">Assignment Group</label>
        <div className="col-md-9">
          <select id="wd-group" className="form-select">
            <option>ASSIGNMENTS</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="wd-display-grade-as" className="col-md-3 col-form-label text-end">Display Grade as</label>
        <div className="col-md-9">
          <select id="wd-display-grade-as" className="form-select">
            <option>Percentage</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="wd-submission-type" className="col-md-3 col-form-label text-end">Submission Type</label>
        <div className="col-md-9">
          <div className="border rounded p-3">
            <select id="wd-submission-type" className="form-select mb-3">
              <option>Online</option>
            </select>

            <div>
              <label className="form-label fw-bold">Online Entry Options</label>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="wd-text-entry" />
                <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
              </div>
              
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="wd-website-url" defaultChecked />
                <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
              </div>
              
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="wd-media-recordings" />
                <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label>
              </div>
              
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="wd-student-annotation" />
                <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotation</label>
              </div>
              
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="wd-file-upload" />
                <label htmlFor="wd-file-upload" className="form-check-label">File Uploads</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-3">
        <label className="col-md-3 col-form-label text-end">Assign</label>
        <div className="col-md-9">
          <div className="border rounded p-3">
            <div className="mb-3">
              <label htmlFor="wd-assign-to" className="form-label">Assign to</label>
              <div className="input-group">
                <input 
                  id="wd-assign-to" 
                  className="form-control"
                  defaultValue="Everyone" 
                />
                <button className="btn btn-outline-secondary" type="button">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="wd-due-date" className="form-label">Due</label>
              <div className="input-group">
                <input 
                  type="text" 
                  id="wd-due-date" 
                  className="form-control"
                  defaultValue={assignment.due} 
                />
                <span className="input-group-text">
                  <FaCalendarAlt />
                </span>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="wd-available-from" className="form-label">Available from</label>
                <div className="input-group">
                  <input 
                    type="text" 
                    id="wd-available-from" 
                    className="form-control"
                    defaultValue={assignment.availableFrom} 
                  />
                  <span className="input-group-text">
                    <FaCalendarAlt />
                  </span>
                </div>
              </div>
              
              <div className="col-md-6 mb-3">
                <label htmlFor="wd-available-until" className="form-label">Until</label>
                <div className="input-group">
                  <input 
                    type="text" 
                    id="wd-available-until" 
                    className="form-control"
                    defaultValue={assignment.availableUntil || ""} 
                  />
                  <span className="input-group-text">
                    <FaCalendarAlt />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <hr />
      
      <div className="d-flex justify-content-end">
        <Link href={`/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">
          Cancel
        </Link>
        <Link href={`/Courses/${cid}/Assignments`} className="btn btn-danger">
          Save
        </Link>
      </div>
    </div>
  );
}