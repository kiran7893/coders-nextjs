import AdminNavbar from "@/components/Navbar/adminNavBar";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

type layoutProps = {
  children: React.ReactNode;
};

const layout: React.FC<layoutProps> = ({ children }) => {
  return (
    <>
      <AdminNavbar />
    </>
  );
};
export default layout;
