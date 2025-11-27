/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import PeopleDetails from "./Details";
import Link from "next/link";
import {useState} from "react";

export default function PeopleTable({ users, fetchUsers }: { users: any[], fetchUsers: () => void }) {
  const [showDetails, setShowDetails] = useState(false);
  const [showUserId, setShowUserId] = useState<string | null>(null);

  if (!users) {
  return <div className="text-center p-4">Loading users...</div>;
}
  return (
    <div id="wd-people-table">
      {showDetails && (
       <PeopleDetails uid={showUserId}
         onClose={() => {
           setShowDetails(false);
           fetchUsers();
         }}/>
     )}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan={6} className="text-center">
                No users enrolled in this course.
              </td>
            </tr>
          ) : (
            users.map((user: any) => (
              <tr key={user._id} onClick={() => {
                   setShowDetails(true);
                   setShowUserId(user._id);
                 }} >
                <td className="wd-full-name text-nowrap">
                  <FaUserCircle className="me-2 fs-1 text-secondary" />
                  <span className="wd-first-name">{user.firstName}</span>{" "}
                  <span className="wd-last-name">{user.lastName}</span>
                </td>
                <td className="wd-login-id">{user.loginId}</td>
                <td className="wd-section">{user.section}</td>
                <td className="wd-role">{user.role}</td>
                <td className="wd-last-activity">{user.lastActivity}</td>
                <td className="wd-total-activity">{user.totalActivity}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
}