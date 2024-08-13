"use client";
import { authModalState } from "@/atoms/authModalAtom";
import AuthModal from "@/components/Modals/AuthModal";
import Login from "@/components/Modals/Login";
import { useRecoilValue } from "recoil";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const authModal = useRecoilValue(authModalState);

  return (
    <>
      <Navbar />
      {authModal.isOpen && <AuthModal />}
    </>
  );
}
