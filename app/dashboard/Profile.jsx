"use client";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

export default function Profile() {
  const { token } = useContext(AuthContext);
  const [profile, setProfile] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    fetch("http://127.0.0.1:5002/profile", {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setError(data.message);
          return;
        }
        setProfile(data.user);
      })
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return (
      <div
        className="bg-red-200 border-red-600 text-red-600 border-l-4 p-4 mt-4"
        role="alert"
      >
        <p>❌{error}</p>
      </div>
    );
  }

  if (!profile) return null;

  return (
    <section
      className="bg-red-800 border-red-500 border-1 
      border-radius-4 p-4 text-gray-100"
    >
      <p>ID: {profile._id}</p>
      <p>email: {profile.email}</p>
    </section>
  );
}
