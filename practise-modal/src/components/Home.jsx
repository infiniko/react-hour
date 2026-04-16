import React from "react";
import { useGlobalContext } from "../context";
import { FaBars } from "react-icons/fa";

const Home = () => {
  const { toggleModal, toggleSidebar } = useGlobalContext();
  return (
    <main>
      <button onClick={toggleSidebar} className="sidebar-toggle">
        <FaBars />
      </button>
      <button onClick={toggleModal} className="btn">
        show Modal
      </button>
    </main>
  );
};

export default Home;
