"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useAuth } from "@/context/AuthContext";

export default function DashboardPage() {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  if (loading) return <p>Loading...</p>;

  if (!user) return null;

  return (
    <div style={{ padding: "40px" }}>
      <h1>Dashboard</h1>

      <p>Welcome, {user.displayName || user.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
