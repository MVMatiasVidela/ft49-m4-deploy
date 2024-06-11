"use client";
import React from "react";
import { userSession } from "@/types";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";

const ComprasPage = () => {
  const [userData, setUserData] = useState<userSession>();

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userData: userSession = JSON.parse(
        localStorage.getItem("userSession")!
      );
      setUserData(userData);
      if (!userData?.token) redirect("/login");
    }
  }, []);

  return (
    <div>
      <h1>Esta es la vista de compras</h1>
    </div>
  );
};

export default ComprasPage;
