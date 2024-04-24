import { Outlet } from "react-router-dom";

import "./App.css";
import { Navbar } from "./components/Navbar";

function Wrapper() {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
    </>
  );
}

export default Wrapper;
