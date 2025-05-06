import { useState } from "react"
import axios from 'axios'
import { NavLink } from "react-router-dom"

const Signup =()=>{
    let [formdata,setFormdata]=useState({
        "name":'',
        'email':'',
        'password':'',
        'confirmpassword':''
    })
    const HandalInputData = (e)=>{
        let value=e.target.value
        let key =e.target.name 

        setFormdata({
            ...formdata,[key]:value
        })

    }
    const Submitdata = ()=>{
        setFormdata({
            "name":'',
            'email':'',
            'password':'',
            'confirmpassword':''
        })
        axios.post("http://localhost:3000/userinfo",JSON.stringify(formdata))
        console.log(formdata);
        
    }
    return(
        <>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="h-[500px] w-[400px] bg-white rounded-2xl shadow-lg flex flex-col gap-3">
                <h1 className="text-xl font-bold text-center py-3">SIGN_UP PAGE</h1>
                <div className="flex flex-col px-8 gap-1">
                    <label>Enter Full Name:</label>
                    <input type="text" placeholder="Enter name" className="border rounded-xl p-2" name="name" value={formdata.name} onChange={HandalInputData}/>
                </div>
                
                <div className="flex flex-col px-8 ">
                    <label>Enter your email:</label>
                    <input type="email" placeholder="Enter email" className="border rounded-xl p-2" name="email" value={formdata.email} onChange={HandalInputData}/>
                </div>
                <div className="flex flex-col px-8 ">
                    <label>Create new password:</label>
                    <input type="text" placeholder="create new password" className="border rounded-xl p-2" name="password" value={formdata.password} onChange={HandalInputData}/>
                </div>
                <div className="flex flex-col px-8 ">
                    <label>Confirm password:</label>
                    <input type="text" placeholder="confirm password" className="border rounded-xl p-2"name="confirmpassword" value={formdata.confirmpassword} onChange={HandalInputData}/>
                </div>
                <div>
                <button
                        type="button"
                        className="w-[340px] mx-8 px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                        onClick={Submitdata}>Sign_up</button>
                </div>
                <p className="text-center">Already have an account? <NavLink to='/login' className="text-blue-600">Login</NavLink></p>
                
            </div>
        </div>
        </>
    )
}
export default Signup