import React from "react";

const Riwayat: React.FC = () => {
  const riwayatData = [
    { name: "Mutida Erisah", class: "XI RPL 4", type: "Pengajuan Izin Pulang", status: "Diterima" },
    { name: "Maesa Diandra Shyafril", class: "XI RPL 4", type: "Pengajuan Izin Pulang", status: "Diterima" },
    { name: "Munirah Janna", class: "XI RPL 4", type: "Pengajuan Izin Pulang", status: "Diterima" },
    { name: "Muh. Dzaki Hasyim", class: "XI RPL 4", type: "Pengajuan Izin Sakit", status: "Ditolak" },
    { name: "Nuraqilah", class: "XI RPL 4", type: "Pengajuan Izin Sakit", status: "Ditangguhkan" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
              TS
            </div>
            <h1 className="text-2xl font-semibold text-gray-800">Telkom Schools</h1>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium text-gray-600">XXXXXXXX</p>
            <p className="text-sm font-medium text-gray-600">xxxxxxxx@gmail.com</p>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-screen-xl mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Riwayat</h2>

        {/* Filter Buttons */}
        <div className="flex space-x-4 mb-6">
          <button className="px-6 py-2 rounded bg-red-600 text-white font-semibold">Semua</button>
          <button className="px-6 py-2 rounded bg-gray-300 text-gray-700 font-semibold">Diterima</button>
          <button className="px-6 py-2 rounded bg-gray-300 text-gray-700 font-semibold">Ditolak</button>
          <button className="px-6 py-2 rounded bg-gray-300 text-gray-700 font-semibold">Ditangguhkan</button>
        </div>

        {/* Search Bar */}
        <div className="flex mb-6">
          <input
            type="text"
            placeholder="Pencarian"
            className="flex-1 px-4 py-2 rounded-l bg-gray-200 border border-gray-300 outline-none"
          />
          <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-r">
            🔍
          </button>
        </div>

        {/* Riwayat List */}
        <div className="space-y-4">
          {riwayatData.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center px-6 py-4 bg-white border rounded-lg shadow"
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl text-purple-600">👤</span>
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    {item.name} | {item.class}
                  </p>
                  <p className="text-sm text-gray-600">{item.type}</p>
                </div>
              </div>
              <span
                className={`px-4 py-1 rounded text-sm font-bold ${
                  item.status === "Diterima"
                    ? "bg-green-100 text-green-700"
                    : item.status === "Ditolak"
                    ? "bg-red-100 text-red-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Riwayat;
