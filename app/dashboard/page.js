import Link from "next/link"
import CheckAuth from "./CheckAuth"
import PrivateStuff from "./PrivateStuff"
import Profile from "./Profile"

export default function Dashboard() {
  return (
    <main className="p-8">
    <h1 className="text-2xl font-bold">Dashboard</h1>
    <CheckAuth />
    <h2 className="text-lg mb4 font-semibold text-blue-200">Private (sorta) stuff</h2>
    <PrivateStuff />
    <h2 className="text-lg mb4 font-semibold text-blue-200">Profile (tuley private):</h2>
    <Profile />
    <Link href="/" className="text-indigo-400">Home</Link>
    </main>
  )
}
