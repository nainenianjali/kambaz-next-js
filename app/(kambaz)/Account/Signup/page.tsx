import Link from "next/link";

export default function Signup() {
  return (
    <div id="wd-signin-screen" className="container mt-5" style={{ maxWidth: "400px" }}>
      <h1 className="mb-4">Signup</h1>
      
      <input
        id="wd-username"
        placeholder="username"
        className="form-control mb-3"
      />
      
      <input
        id="wd-password"
        placeholder="password"
        type="password"
        className="form-control mb-3"
      />
      
      <div className="d-grid mb-3">
        <Link
          id="wd-signin-btn"
          href="/Account/Profile"
          className="btn btn-primary btn-lg"
        >
          Signup
        </Link>
      </div>
      
      <Link id="wd-signup-link" href="/Account/Signup" className="text-primary">
        Signin
      </Link>
    </div>
  );
}