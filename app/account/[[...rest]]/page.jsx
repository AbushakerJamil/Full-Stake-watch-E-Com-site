"use client";

import Navbar from "@/components/Navbar";
import { UserProfile } from "@clerk/nextjs";

export default function AccountPage() {
  return (
    <>
    <Navbar />
    <main className="flex justify-center items-center min-h-screen bg-gray-50">
      <UserProfile />
    </main>
    </>
  );
}
