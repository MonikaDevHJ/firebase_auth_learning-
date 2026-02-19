"use client";

import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const user = auth.currentUser;

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Dashboard</h1>

      {user && (
        <>
          <p>Welcome, {user.displayName || user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
}
