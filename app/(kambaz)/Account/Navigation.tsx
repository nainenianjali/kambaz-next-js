import Link from "next/link";

export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation" className="list-group rounded-0">
      <Link 
        href="/Account/Signin" 
        className="list-group-item list-group-item-action border-0 text-dark fw-bold border-start border-dark border-3">
        Signin
      </Link>
      <Link 
        href="/Account/Signup" 
        className="list-group-item list-group-item-action border-0 text-danger">
        Signup
      </Link>
      <Link 
        href="/Account/Profile" 
        className="list-group-item list-group-item-action border-0 text-danger">
        Profile
      </Link>
    </div>
  );
}