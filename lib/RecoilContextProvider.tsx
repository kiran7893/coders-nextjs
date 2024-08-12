"use client";
// Import necessary types from React and Recoil
import React, { ReactNode } from "react";
import { RecoilRoot } from "recoil";

// Define an interface for the props of RecoilContextProvider
interface RecoilContextProviderProps {
  children: ReactNode;
}

// Convert the component to TypeScript by specifying the type of its props
const RecoilContextProvider: React.FC<RecoilContextProviderProps> = ({
  children,
}) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilContextProvider;
