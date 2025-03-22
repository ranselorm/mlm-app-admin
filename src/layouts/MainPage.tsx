import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Outlet } from "react-router-dom";
import { useUsers } from "@/hooks/useUsers";

const MainPage = () => {
  const globalState = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();
  useUsers();

  // useEffect(() => {
  //   const currentDate = new Date();

  //   // Decode and check token expiration
  //   const token =
  //     globalState.token && jwtDecode<{ exp: number }>(globalState.token);
  //   console.log(token, "token");

  //   if (!globalState?.isLoggedIn) {
  //     console.log("User not logged in, redirecting to login");
  //     navigate("/login");
  //   } else if (token && (token.exp ?? 0) * 1000 < currentDate.getTime()) {
  //     console.log("Token expired, logging out");
  //     navigate("/login");
  //   }
  // }, [globalState.isLoggedIn, navigate]);

  // useEffect(() => {
  //   const currentDate = new Date();

  //   const token = globalState.token
  //     ? jwtDecode<{ exp: number }>(globalState.token)
  //     : null;

  //   console.log(token, "token");

  //   if (
  //     !globalState?.isLoggedIn ||
  //     (token && (token.exp ?? 0) * 1000 < currentDate.getTime())
  //   ) {
  //     console.log("User not logged in or token expired, redirecting to login");
  //     navigate("/login");
  //   }
  // }, [globalState.isLoggedIn, globalState.token, navigate]);

  useEffect(() => {
    const currentDate = new Date();
    const token = globalState.token || localStorage.getItem("token");

    if (!token || !globalState.isLoggedIn) {
      console.log("User not logged in or token expired, redirecting to login");
      navigate("/login");
    } else {
      const decodedToken = jwtDecode<{ exp: number }>(token);
      console.log(decodedToken.exp);
      if (decodedToken && decodedToken.exp * 1000 < currentDate.getTime()) {
        console.log("Token expired, logging out");
        localStorage.removeItem("token");
        navigate("/login");
      }
    }
  }, [globalState.isLoggedIn, globalState.token, navigate]);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {globalState.isLoggedIn && <Sidebar />}{" "}
      <div className="flex-1 flex flex-col overflow-y-auto">
        <Navbar />

        <main className="flex-grow p-4">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
