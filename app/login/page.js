"use client"
import { useState } from "react"

export default function Login() {

  const[error, setError] = useState()

  const handleLoginForm = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    // now send email and password to api
    fetch('http://127.0.0.1:5002/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    // get back user and token
    .then(res => res.json())
    .then(data => {
      if(data.message) {
        setError(data.message)
        return
      }
      // store user and token
    })
    // handle any errors
    .catch(err => {

    })
  }
  return (
    <div className="w-full h-screen font-sans bg-cover bg-landscape">
      <div className="container flex items-center justify-center flex-1 h-full mx-auto">
        <div onSubmit={handleLoginForm} className="w-full max-w-lg">
          <div className="leading-loose">
            <form className="max-w-sm p-10 m-auto rounded shadow-xl bg-white/25">
              <p className="mb-8 text-2xl font-light text-center text-white">
                Login
              </p>
              <div className="mb-2">
                <div className=" relative ">
                  <input
                    type="text"
                    id="email"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="email"
                  />
                </div>
              </div>
              <div className="mb-2">
                <div className=" relative ">
                  <input
                    type="password"
                    id="password"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="password"
                  />
                </div>
              </div>
              {error &&
                <div className="bg-red-200 border-red-600 text-red-600 border-l-4 p-4 mt-4" role="alert">
                  <p>❌{error}</p>
                </div>
              }
              <div className="flex items-center justify-between mt-4">
                <button
                  type="submit"
                  class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Login 
                </button>
              </div>
              <div className="text-center">
                <a className="right-0 inline-block text-sm font-light align-baseline text-500 hover:text-gray-800">
                  Create an account
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
