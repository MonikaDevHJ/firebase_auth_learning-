"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useAuth } from "@/context/AuthContext";

export default function DashboardPage() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  const handleProtectedAction = () => {
    if (!user) {
      setShowLoginPrompt(true);
    } else {
      alert("You are logged in 🎉");
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-200 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-3xl p-10 text-center w-full max-w-lg">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Dashboard
        </h1>

        <p className="text-gray-600 mb-6">
          {user
            ? `Welcome, ${user.displayName || user.email}`
            : "You are browsing as Guest"}
        </p>

        <div className="flex flex-col gap-4">
          <button
            onClick={handleProtectedAction}
            className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition"
          >
            View Profile
          </button>

          {user && (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-6 py-3 rounded-xl hover:bg-red-600 transition"
            >
              Logout
            </button>
          )}
        </div>
      </div>

      {/* Login Modal */}
      {showLoginPrompt && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white rounded-2xl p-8 w-80 text-center shadow-2xl">
            <h2 className="text-xl font-semibold mb-4">
              Login Required
            </h2>
            <p className="text-gray-600 mb-6">
              Please login to access this feature.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => router.push("/login")}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
              >
                Login
              </button>
              <button
                onClick={() => setShowLoginPrompt(false)}
                className="bg-gray-300 px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}