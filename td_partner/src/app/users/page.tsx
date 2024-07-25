"use client"

import { useEffect, useState } from 'react';

interface User {
    user_id: number;
    full_name: string;
    date_of_birth: Date;
    sex: string;
    marital_status: string;
    nationality: string;
    phone_number: string;
    email: string;
    address: string;
    password: string;
}

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main>
        <div>
        <h1>Users</h1>
        <ul>
            {users.map((user) => (
            <li key={user.user_id}>
                {user.full_name} - {user.email}
            </li>
            ))}
        </ul>
        </div>
    </main>
  );
};

export default UsersPage;
