"use client";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "../utils/axios";
import { useRouter } from "next/navigation";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const token = localStorage.getItem("auth_token");
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get("/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error("Failed to fetch user:", error);
      } finally {
        setLoading(false);
      }
    };
    getUser();
  }, []);

  // const login = async (form) => {
  //   try {
  //     const response = await axios.post("/login", form);
  //     localStorage.setItem("auth_token", response.data.token);
  //     setUser(response.data.user);
  //     console.log(response.data.user)
  //     router.push("/dashboard_baru");
  //   } catch (error) {
  //     console.error("Login failed:", error);
  //     throw error;
  //   }
  // };

  const login = async (form) => {
    if (!form.email || !form.password) {
      throw new Error("Kode dan password harus diisi.");
    }

    try {
      const response = await axios.post("/login", form);
      localStorage.setItem("auth_token", response.data.token);
      setUser(response.data.user);
      console.log(response.data.user)
      // Redirect berdasarkan role
      switch (response.data.user.role) {
        case "bk":
          router.push("/dashboard_baru");
          break;
        case "siswa":
          router.push("/pilihan");
          break;
      }
    } catch (e) {
      console.error("Login gagal:", e.response?.data?.message || e.message);
      throw new Error("Login gagal, periksa kembali kode dan password.");
    }
  };

  const logout = async () => {
    try {
      await axios.post("/logout");
      localStorage.removeItem("auth_token");
      setUser(null);
      router.push("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

// "use client";
// import { createContext, useContext, useEffect, useState } from "react";
// import axios from "../utils/axios";
// import { useRouter } from "next/navigation";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     const getUser = async () => {
//       try {
//         const response = await axios.get("/user");
//         setUser(response.data);
//       } catch (error) {
//         console.error("Error fetching user:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     getUser();
//   }, []);

//   const login = async (form) => {
//     setLoading(true);
//     try {
//       const response = await axios.post("/login", form);
//       localStorage.setItem("auth_token", response.data.token);
//       setUser(response.data.user);
//       router.push("/dashboard");
//     } catch (error) {
//       console.error("Login error:", error);
//       return error;
//     } finally {
//       setLoading(false);
//     }
//   };

//   const logout = async () => {
//     setLoading(true);
//     try {
//       await axios.post("/logout");
//       localStorage.removeItem("auth_token");
//       setUser(null);
//       router.push("/login");
//     } catch (error) {
//       console.error("Logout error:", error);
//       return error;
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);