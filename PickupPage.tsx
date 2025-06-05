import React from 'react';

const PickupPage: React.FC = () => {
  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Form Penjemputan Sampah</h2>
      <input placeholder="Jenis Sampah (organik/anorganik)" className="w-full p-2 mb-2 border rounded" />
      <input placeholder="Berat (kg)" className="w-full p-2 mb-2 border rounded" />
      <input placeholder="Alamat Lengkap" className="w-full p-2 mb-2 border rounded" />
      <input type="file" className="w-full p-2 mb-2" />
      <button className="bg-green-600 text-white px-4 py-2 rounded">Kirim</button>
    </div>
  );
};
export default PickupPage;