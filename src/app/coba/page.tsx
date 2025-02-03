"use client";
import { useState } from "react";

export default function StatusDropdown() {
  const [selectedStatus, setSelectedStatus] = useState("");

  const handleChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  return (
    <div className="w-64">
      <label
        htmlFor="status"
        className="block mb-2 text-sm font-medium text-gray-700"
      >
        Pilih Status
      </label>
      <select
        id="status"
        value={selectedStatus}
        onChange={handleChange}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">-- Pilih --</option>
        <option value="Pulang">Pulang</option>
        <option value="Sakit">Sakit</option>
        <option value="Keluar">Keluar</option>
      </select>

    </div>
  );
}
