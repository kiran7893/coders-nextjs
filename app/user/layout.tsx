import React, { ReactNode } from "react";
import Navbar from "@/components/Navbar/Navbar";
type layoutProps = {
  children: ReactNode;
};

const layout: React.FC<layoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
export default layout;
