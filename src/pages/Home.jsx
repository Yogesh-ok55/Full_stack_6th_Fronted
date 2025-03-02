import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 py-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
          Welcome to <span className="text-blue-600">Auction-Hub</span>
        </h1>
        <p className="max-w-md text-lg text-slate-600">Bid Smart, Win Big – Your Trusted Auction Hub!</p>
        <div className="mt-6 flex flex-col gap-4 sm:flex-row">
          <Link
            to="/Signup"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            Create Account
          </Link>
          <Link
            to="/login"
            className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-8 py-3 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  )
}

