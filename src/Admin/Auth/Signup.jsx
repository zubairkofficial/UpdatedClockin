import React, { useState } from 'react'
import HelmetWrapper from '../../Config/HelmetWrapper'
import Helpers from '../../Config/Helpers'
import axios from "axios";
function Signup() {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password,setPassword] = useState('')
    const [password_confirmation,setConfirmPassword] = useState('')
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await axios.post(`${Helpers.apiUrl}register`, {
            name,
            email,
            password,
            password_confirmation
          });
          Helpers.setItem('user', response.data.user, true);
          Helpers.setItem('token', response.data.token);
          window.location.href = '/admin/dashboard'
        } catch (error) {
          console.error('Error logging in:', error);
        }
      };
  return (
    <div>
    <HelmetWrapper/>
    <div class="d-flex flex-column flex-lg-row flex-column-fluid">
        <div class="d-flex flex-lg-row-fluid">
            <div class="d-flex flex-column flex-center pb-0 pb-lg-10 p-10 w-100">

                <img class="theme-light-show mx-auto mw-100 w-150px w-lg-300px mb-10 mb-lg-20" src="/media/auth/agency.png" alt="" />

                <h1 class="text-gray-800 fs-2qx fw-bold text-center mb-7">
                    Fast, Efficient and Productive
                </h1>
                <div class="text-gray-600 fs-base text-center fw-semibold">
                    In this kind of post, <a href="#" class="opacity-75-hover text-primary me-1">the blogger</a>

                    introduces a person they’ve interviewed <br /> and provides some background information about

                    <a href="#" class="opacity-75-hover text-primary me-1">the interviewee</a>
                    and their <br /> work following this is a transcript of the interview.
                </div>
            </div>
        </div>
        <div class="d-flex flex-column-fluid flex-lg-row-auto justify-content-center justify-content-lg-end p-12">

            <div class="bg-body d-flex flex-column flex-center rounded-4 w-md-600px p-10">
                <div class="d-flex flex-center flex-column align-items-stretch h-lg-100 w-md-400px">
                    <div class="d-flex flex-center flex-column flex-column-fluid pb-15 pb-lg-20">

                        <form class="form w-100" novalidate="novalidate" id="kt_sign_in_form" onSubmit={handleSubmit}>
                            <div class="text-center mb-11">
                                <h1 class="text-gray-900 fw-bolder mb-3">
                                    Sign In
                                </h1>
                                <div class="text-gray-500 fw-semibold fs-6">
                                    Your Social Campaigns
                                </div>
                            </div>
                            <div class="separator separator-content my-14">
                                <span class="w-125px text-gray-500 fw-semibold fs-7">Email</span>
                            </div>
                            <div class="fv-row mb-8">
                                <input type="text" placeholder="Name" name="name" autocomplete="off" class="form-control bg-transparent" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div class="fv-row mb-8">
                                <input type="email" placeholder="Email" name="email" autocomplete="off" class="form-control bg-transparent" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>

                            <div class="fv-row mb-8">
                                <input type="password" placeholder="Password" name="password" autocomplete="off" class="form-control bg-transparent" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            
                            <div class="fv-row mb-3">
                                <input type="password" placeholder="Confirm Password" name="password_confirmation" autocomplete="off" class="form-control bg-transparent" value={password_confirmation} onChange={(e) => setConfirmPassword(e.target.value)} />
                            </div>

                            <div class="d-grid mb-10">
                                <button type="submit" id="kt_sign_in_submit" class="btn" style={{background:"#222626",color:"white", padding:"1rem",borderRadius:'5px'}}>

                                    <span class="indicator-label">
                                        Sign In</span>
                                    <span class="indicator-progress">
                                        Please wait...    <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
                                    </span>
                                </button>
                            </div>
                            <div class="text-gray-500 text-center fw-semibold fs-6">
                                Have an Account?

                                <a href="/admin/login" class="link-primary">
                                    Login
                                </a>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
  )
}

export default Signup