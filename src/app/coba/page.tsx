"use client";
import React from "react";

const UKSDashboard = () => {
  const data = [
    {
      name: "Kita Ikuyo",
      class: "XI RPL 3",
      illness: "Demam",
      time: "07:00 AM",
    },
    {
      name: "Kita Ikuyo",
      class: "XI RPL 3",
      illness: "Demam",
      time: "07:00 AM",
    },
    {
      name: "Kita Ikuyo",
      class: "XI RPL 3",
      illness: "Demam",
      time: "07:00 AM",
    },
    {
      name: "Kita Ikuyo",
      class: "XI RPL 3",
      illness: "Demam",
      time: "07:00 AM",
    },
    {
      name: "Kita Ikuyo",
      class: "XI RPL 3",
      illness: "Demam",
      time: "07:00 AM",
    },
    {
      name: "Kita Ikuyo",
      class: "XI RPL 3",
      illness: "Demam",
      time: "07:00 AM",
    },
  ];

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded flex items-center">
            Masuk UKS{" "}
            <span className="ml-2 bg-green-600 px-2 py-1 rounded">20</span>
          </button>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded flex items-center">
            Keluar UKS{" "}
            <span className="ml-2 bg-yellow-600 px-2 py-1 rounded">7</span>
          </button>
        </div>
        <div className="flex space-x-2">
          <button className="bg-red-500 text-white px-4 py-2 rounded flex items-center">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              ></path>
            </svg>
            Hapus
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded flex items-center">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              ></path>
            </svg>
            Tambah
          </button>
        </div>
      </div>

      <div className="flex space-x-4 mb-4">
        <select className="w-32 p-2 border rounded">
          <option>Kelas</option>
          <option value="XI RPL 3">XI RPL 3</option>
        </select>

        <select className="w-32 p-2 border rounded">
          <option>Jurusan</option>
          <option value="RPL">RPL</option>
        </select>

        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Cari
        </button>

        <input
          className="w-64 p-2 border rounded"
          type="text"
          placeholder="Cari"
        />
      </div>

      <div className="bg-white shadow rounded">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-green-200">
              <th className="p-2 border">Foto</th>
              <th className="p-2 border">Nama</th>
              <th className="p-2 border">Kelas</th>
              <th className="p-2 border">Sakit</th>
              <th className="p-2 border">Waktu</th>
              <th className="p-2 border">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="text-center">
                <td className="p-2 border">
                  <img
                    src="/path/to/image.jpg"
                    alt="Profile"
                    className="w-10 h-10 rounded-full mx-auto"
                  />
                </td>
                <td className="p-2 border">{item.name}</td>
                <td className="p-2 border">{item.class}</td>
                <td className="p-2 border">{item.illness}</td>
                <td className="p-2 border">
                  <span className="bg-green-200 text-green-700 px-2 py-1 rounded">
                    {item.time}
                  </span>
                </td>
                <td className="p-2 border flex justify-center space-x-2">
                  <button className="bg-green-500 text-white p-2 rounded">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </button>
                  <button className="bg-yellow-500 text-white p-2 rounded">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1-6l-8 8m0 0H7m4 0v-4"
                      ></path>
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UKSDashboard;
