/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import PeopleTable from "./Table";
import * as client from "../../client";

export default function PeoplePage() {
  const { cid } = useParams();
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const enrolledUsers = await client.findUsersForCourse(cid as string);
      setUsers(enrolledUsers);
    } catch (error) {
      console.error("Error fetching users:", error);
      setUsers([]);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [cid]);

  return (
    <div>
      <PeopleTable users={users} fetchUsers={fetchUsers} />
    </div>
  );
}