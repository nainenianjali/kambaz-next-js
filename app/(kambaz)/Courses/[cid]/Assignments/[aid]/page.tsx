export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name"><h3>Assignment Name</h3></label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description" defaultValue="The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page."> 
        </textarea>
      <br />
      <table>
        <tbody>
          <tr>
      
            <td>
               <label htmlFor="wd-points">Points</label>
              <input id="wd-points" defaultValue={100} />
            </td>
          </tr>
          <tr>
            <td colSpan={2} height="15px"></td>
          </tr>
          
          <tr>
            
            <td>
              <label htmlFor="wd-group">Assignment Group</label>
              <select id="wd-group">
                <option>ASSIGNMENTS</option>
              </select>
            </td>
          </tr>
          <tr>
            <td colSpan={2} height="15px"></td>
          </tr>
          
          <tr>
              
            <td>
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
              <select id="wd-display-grade-as">
                <option>Percentage</option>
              </select>
            </td>
          </tr>
          <tr>
            <td colSpan={2} height="15px"></td>
          </tr>
          
          <tr>
            
            <td>
              <label htmlFor="wd-submission-type">Submission Type</label>
              <select id="wd-submission-type">
                <option>Online</option>
              </select>
            </td>
          </tr>
          <tr>
            <td colSpan={2} height="15px"></td>
          </tr>
          
          <tr>
              
            <td>
              <label>Online Entry Options</label>
              <input type="checkbox" id="wd-text-entry" />
              <label htmlFor="wd-text-entry">Text Entry</label><br />
              
              <input type="checkbox" id="wd-website-url" />
              <label htmlFor="wd-website-url">Website URL</label><br />
              
              <input type="checkbox" id="wd-media-recordings" />
              <label htmlFor="wd-media-recordings">Media Recordings</label><br />
              
              <input type="checkbox" id="wd-student-annotation" />
              <label htmlFor="wd-student-annotation">Student Annotation</label><br />
              
              <input type="checkbox" id="wd-file-upload" />
              <label htmlFor="wd-file-upload">File Uploads</label>
            </td>
          </tr>
          <tr>
            <td colSpan={2} height="15px"></td>
          </tr>
          
          <tr>
              

            <td>
              <label htmlFor="wd-assign-to">Assign to</label>
              <input id="wd-assign-to" defaultValue="Everyone" />
            </td>
          </tr>
          <tr>
            <td colSpan={2} height="15px"></td>
          </tr>
          
          <tr>
              
            <td>
              <label htmlFor="wd-due-date">Due</label>
              <input type="date" id="wd-due-date" defaultValue="2024-05-13" />
            </td>
          </tr>
          <tr>
            <td colSpan={2} height="15px"></td>
          </tr>
          
          <tr>
            <td>
                <label htmlFor="wd-available-from">Available from</label>
              <input type="date" id="wd-available-from" defaultValue="2024-05-06" />
            </td>
            
              
            <td>
              <label htmlFor="wd-available-until">Until</label>
              <input type="date" id="wd-available-until" defaultValue="2024-05-20" />
            </td>
          </tr>
        
        </tbody>
      </table>
          <hr />
            <div>
                <button>Cancel</button>
                <button>Save</button>
            </div>
    </div>
  );
}

