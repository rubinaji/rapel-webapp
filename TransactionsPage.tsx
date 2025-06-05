import React from 'react';

const TransactionsPage: React.FC = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Riwayat Transaksi</h2>
      <ul>
        <li>05 Juni 2025 - 3kg - Rp15.000</li>
        <li>02 Juni 2025 - 2kg - Rp10.000</li>
      </ul>
    </div>
  );
};
export default TransactionsPage;