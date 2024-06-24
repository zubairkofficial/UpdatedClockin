import React, { useState } from 'react'
import HelmetWrapper from '../../Config/HelmetWrapper'
import Helpers from '../../Config/Helpers'
import axios from "axios";
function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isloading, setLoading] = useState(false)
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true)
        try {
            setLoading(true)
            const response = await axios.post(`${Helpers.apiUrl}login`, {
                email,
                password,
            });
            Helpers.setItem('user', response.data.user, true);
            Helpers.setItem('token', response.data.token);
            Helpers.toast("success", 'Login Successful')
            window.location.href = '/admin/dashboard'
            setLoading(false)
        } catch (error) {
            setLoading(false)
            Helpers.toast("error",error.response.data.error)
            console.error('Error logging in:', error);
        }
    };
    return (
        <div>
            <HelmetWrapper />
            <div class="d-flex flex-column flex-lg-row flex-column-fluid">
                <div class="d-flex flex-lg-row-fluid">
                    <div class="d-flex flex-column flex-center pb-0 pb-lg-10 p-10 w-100">

                        <img class="theme-light-show mx-auto mw-100 w-150px w-lg-300px mb-10 " src="/assets/login.jpg" alt="" />

                        <h1 class="text-gray-800 fs-2qx fw-bold text-center mb-7">
                            Sign In to ClockIn
                        </h1>
                        <div class="text-gray-600 fs-base text-center fw-semibold px-8">
                        Time tracker software boosts organization, productivity, and offers valuable insights into your time management. Align you personally with time management Ideal for hourly billing professionals & multitasking project.
                        </div>
                    </div>
                </div>
                <div class="d-flex flex-column-fluid flex-lg-row-auto justify-content-center justify-content-lg-end p-12">

                    <div class="bg-body d-flex flex-column flex-center rounded-4 w-md-600px p-10">
                        <div class="d-flex flex-center flex-column align-items-stretch h-lg-100 w-md-400px">
                            <div class="d-flex flex-center flex-column flex-column-fluid pb-15 pb-lg-20">
                            <img src='/assets/blacklogo.png'/>

                                <form class="form w-100" novalidate="novalidate" id="kt_sign_in_form" onSubmit={handleSubmit}>
                                    {/* <div class="text-center mb-11">
                                        <h1 class="text-gray-900 fw-bolder mb-3">
                                            
                                        </h1>
                                    </div> */}
                                    <div class="separator separator-content my-14">
                                        <span class="w-125px text-gray-500 fw-semibold fs-7">Sign In</span>
                                    </div>
                                    <div class="fv-row mb-8">
                                        <input type="text" placeholder="Email" name="email" autocomplete="off" class="form-control bg-transparent" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>

                                    <div class="fv-row mb-8">
                                        <input type="password" placeholder="Password" name="password" autocomplete="off" class="form-control bg-transparent" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>

                                    <div class="d-grid mb-10">
                                        <button type="submit" id="kt_sign_in_submit" class="btn" style={{ background: "#222626", color: "white", padding: "1rem", borderRadius: '5px' }}>

                                            <span class="indicator-label">
                                                {isloading ? 'Please    wait ...' : 'Sign In'}</span>

                                        </button>
                                    </div>
                                    {/* <div class="text-gray-500 text-center fw-semibold fs-6">
                                        Not a Member yet?

                                        <a href="/admin/signup" class="link-primary">
                                            Sign up
                                        </a>
                                    </div> */}
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login