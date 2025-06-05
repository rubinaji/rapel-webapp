import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Dashboard Pengguna</h1>
      <button className="bg-green-600 text-white px-4 py-2 rounded mr-2" onClick={() => navigate('/pickup')}>Request Penjemputan</button>
      <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={() => navigate('/transactions')}>Lihat Transaksi</button>
    </div>
  );
};
export default Dashboard;