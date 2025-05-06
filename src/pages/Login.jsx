import React, { useState } from "react";
import axios from 'axios'
const LoginPage = () => {

    let [formData,setFormdata]=useState({
        "email":'',
        "password":''
    })
    const Handledata = (e)=>{
        e.preventDefault()

        let value=e.target.value
        let key =e.target.name 

        setFormdata({
            ...formData,[key]:value
        })
    }
    const submitData =(e)=>{
        console.log(formData)
       setFormdata ({
        "email":'',
        "password":''
    })
    axios.post("http://localhost:3000/userinfo",JSON.stringify(formData))

    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-sm p-8 space-y-6 bg-white rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-800">Login Page</h2>
                <form className="space-y-5">
                    {/* Email */}
                    <div>
                        <label className="block mb-1 text-gray-600"> Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            placeholder="Enter your email"
                            name="email"
                            value={formData.email}
                            onChange={Handledata}
                            
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block mb-1 text-gray-600"> Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            placeholder="Enter your password"
                            name="password"
                            value={formData.password}
                            onChange={Handledata}
                        />
                    </div>

                    {/* Remember Me */}
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="remember"
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label className="ml-2 text-gray-600"> Remember me</label>
                    </div>

                    {/* Login Button */}
                    <button
                        type="button"
                        className="w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                        onClick={submitData}
                        >  Login
                        </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
