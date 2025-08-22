import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchUsers = async () => {
  const res = await axios.get('http://localhost:7056/api/User');
  return res.data;
};

function User() {
  const { data, isLoading, isError, error } = useQuery(['users'], fetchUsers);

  if (isLoading) return <div className="text-center text-blue-600 mt-10">جاري تحميل المستخدمين...</div>;
  if (isError) return <div className="text-center text-red-500 mt-10">حصل خطأ: {error.message}</div>;

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-blue-100 to-blue-50">
      <h1 className="text-3xl font-bold text-center text-blue-900 mb-8">قائمة المستخدمين</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map(user => (
          <div key={user.id} className="bg-white border border-blue-200 rounded-lg shadow-lg p-4 hover:shadow-xl transition">
            <h2 className="text-xl font-bold text-blue-800">{user.fullName}</h2>
            <p className="text-gray-700 mt-1">{user.email}</p>
            <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full shadow-sm">
              {user.role}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default User;