"use client"
import { useEffect, useContext } from "react"
import { redirect, usePathname } from "next/navigation"
import { AuthContext } from "@/context/AuthContext"

export default function CheckAuth() {

  const pathname = usePathname()
  const { user } = useContext(AuthContext)

  useEffect(() => {
    if(!user) {
      redirect("/login")
    }
  }, [pathname])

  return null 
}