"use client";

import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface User {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  dob: string;
  email: string;
  role: string;
}

interface RootState {
  accountReducer: {
    currentUser: User | null;
  };
}

export default function AccountPage() {
  // Get current user from Redux store
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const router = useRouter();
  
  useEffect(() => {
    // Redirect to Signin if no user is signed in
    if (!currentUser) {
      router.push("/Account/Signin");
    } else {
      // Redirect to Profile if user is signed in
      router.push("/Account/Profile");
    }
  }, [currentUser, router]);
  
  return null;
}