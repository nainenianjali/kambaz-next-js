import Link from "next/link";
import { FaCalendarAlt } from "react-icons/fa";


export default function Profile() {
  return (
    <div id="wd-profile-screen" className="container mt-5" >
      <h2 className="mb-4">Profile</h2>
      
      <div className="mb-3">
        <input 
          defaultValue="alice" 
          placeholder="username" 
          className="form-control wd-username"
        />
      </div>
      
      <div className="mb-3">
        <input 
          defaultValue="123" 
          placeholder="password" 
          type="password"
          className="form-control wd-password" 
        />
      </div>
      
      <div className="mb-3">
        <input 
          defaultValue="Alice" 
          placeholder="First Name" 
          id="wd-firstname"
          className="form-control" 
        />
      </div>
      
      <div className="mb-3">
        <input 
          defaultValue="Wonderland" 
          placeholder="Last Name" 
          id="wd-lastname"
          className="form-control" 
        />
      </div>
      
      <div className="mb-3">
        <div className="input-group">
          <input 
            defaultValue="mm/dd/yyyy" 
            placeholder="mm/dd/yyyy"
            id="wd-dob"
            className="form-control" 
          />
          <span className="input-group-text">
            <FaCalendarAlt />
          </span>
        </div>
      </div>
      
      <div className="mb-3">
        <input 
          defaultValue="alice@wonderland.com" 
          type="email" 
          id="wd-email"
          className="form-control" 
        />
      </div>
      
      <div className="mb-4">
        <select 
          defaultValue="USER" 
          id="wd-role"
          className="form-select"
        >
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </select>
      </div>
      
      <div className="d-grid">
        <Link href="/Signin" className="btn btn-danger btn-lg">
          Signout
        </Link>
      </div>
    </div>
  );
}
