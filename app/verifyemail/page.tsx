"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

type VerifyEmailPageProps = {};

const VerifyEmailPage: React.FC<VerifyEmailPageProps> = () => {
  const [token, setToken] = useState<string>("");
  const [verified, setVerified] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const verifyUserEmail = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/Users/verifyemail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        }
      );

      if (response.ok) {
        setVerified(true);
      } else {
        throw new Error("Verification failed");
      }
    } catch (error) {
      setError(true);
      console.error("Error verifying email:", error);
    }
  };

  useEffect(() => {
    const urlToken = new URLSearchParams(window.location.search).get("token");
    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-4 bg-gray-100">
      <h1 className="text-5xl font-bold mb-4">Verify Email</h1>
      <h2
        className={`p-2 text-black ${token ? "bg-orange-500" : "bg-gray-500"}`}
      >
        {token ? `Token: ${token}` : "No token found"}
      </h2>

      {verified && (
        <div className="mt-4 text-center">
          <h2 className="text-2xl font-semibold text-green-600">
            Email Verified
          </h2>
          <Link href="/login">
            <a className="mt-2 inline-block text-blue-500 hover:underline">
              Login
            </a>
          </Link>
        </div>
      )}
      {error && (
        <div className="mt-4 text-center">
          <h2 className="text-2xl font-semibold bg-red-500 text-black p-2">
            Error occurred during verification
          </h2>
        </div>
      )}
    </div>
  );
};

export default VerifyEmailPage;
