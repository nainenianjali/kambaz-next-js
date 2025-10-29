"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import * as db from "../../Database";
import { FormControl, Button } from "react-bootstrap";

interface Credentials {
  username: string;
  password: string;
}

interface User {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  dob: string;
  email: string;
  role: string;
}

export default function Signin() {
  // State variable to track user credentials
  const [credentials, setCredentials] = useState<Credentials>({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const router = useRouter();

  // Function to sign in the user
  const signin = () => {
    // Search for user with matching credentials
    const user = db.users.find(
      (u: User) =>
        u.username === credentials.username &&
        u.password === credentials.password
    );
    
    // If no user found, ignore the sign in attempt
    if (!user) return;
    
    // Store user in reducer by dispatching to Account reducer
    dispatch(setCurrentUser(user));
    
    // Navigate to Dashboard after successful sign in
    router.push("/Dashboard");
  };

  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      
      {/* Username input field */}
      <FormControl
        defaultValue={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
        className="mb-2"
        placeholder="username"
        id="wd-username"
      />
      
      {/* Password input field */}
      <FormControl
        defaultValue={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
        className="mb-2"
        placeholder="password"
        type="password"
        id="wd-password"
      />
      
      {/* Sign in button */}
      <Button onClick={signin} id="wd-signin-btn" className="w-100">
        Sign in
      </Button>
      
      {/* Link to sign up page */}
      <Link id="wd-signup-link" href="/Kambaz/Account/Signup">
        Sign up
      </Link>
    </div>
  );
}