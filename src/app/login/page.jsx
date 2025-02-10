"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

function Page() {
  const { login } = useAuth();
  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });
  const [error, setError] = React.useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error message
    try {
      await login(form);
      router.push("/dashboard_baru");
    } catch (error) {
      setError(
        error?.response?.data?.message || "Terjadi kesalahan, coba lagi."
      );
    }
  };

  return (
    <div className="w-full h-screen bg-white md:flex md:flex-row-reverse overflow-hidden relative">
      {/* Bagian Kanan - Gambar */}
      <div className="absolute inset-0 md:relative w-full h-full md:w-1/2">
        <Image
          src="/assets/logo/sekolah.png"
          alt="Sekolah"
          className="w-full h-full object-cover"
          width={300}
          height={300}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent md:hidden"></div>
      </div>

      {/* Bagian Kiri - Form Login */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-4 relative z-10 h-full md:h-auto">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md md:bg-transparent md:shadow-none md:p-0">
          <h1 className="font-serif text-3xl md:text-4xl text-center">
            WELCOME STELKERS
          </h1>
          <div className="flex items-center gap-4 justify-center mt-20">
            <div className="border-t border-black w-24 md:w-32 h-0"></div>
            <div className="text-xs text-center">Login</div>
            <div className="border-t border-black w-24 md:w-32 h-0"></div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 mt-6 w-full"
          >
            <input
              name="email"
              onChange={handleChange}
              type="text"
              className="bg-white px-5 py-2 border-2 border-gray-500 text-black rounded-lg w-full"
              placeholder="Username"
              required
            />
            <input
              name="password"
              onChange={handleChange}
              type="password"
              className="bg-white px-5 py-2 border-2 border-gray-500 text-black rounded-lg w-full mt-2"
              placeholder="Password"
              required
            />
            {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
            <button
              type="submit"
              className="mt-8 w-full py-2 text-white bg-[#950101] rounded-2xl"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Page;
