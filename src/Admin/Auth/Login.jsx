import React, { useState, useEffect } from 'react';
import HelmetWrapper from '../../Config/HelmetWrapper';
import Helpers from '../../Config/Helpers';
import axios from 'axios';
import Loader from '../../layouts/Loader'; // Adjust the import as needed

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [pageLoading, setPageLoading] = useState(true);
    const [loadedImagesCount, setLoadedImagesCount] = useState(0);

    const imagesToLoad = [
        "/assets/login.jpg",
        "/assets/blacklogo.png"
    ];

    useEffect(() => {
        const handleImageLoad = () => {
            setLoadedImagesCount((prevCount) => prevCount + 1);
        };

        imagesToLoad.forEach(src => {
            const img = new Image();
            img.src = src;
            img.onload = handleImageLoad;
            img.onerror = handleImageLoad;
        });
    }, []);

    useEffect(() => {
        if (loadedImagesCount === imagesToLoad.length) {
            setPageLoading(false);
        }
    }, [loadedImagesCount]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post(`${Helpers.apiUrl}login`, {
                email,
                password,
            });
            Helpers.setItem('user', response.data.user, true);
            Helpers.setItem('token', response.data.token);
            Helpers.toast('success', 'Login Successful');
            window.location.href = '/admin/dashboard';
        } catch (error) {
            Helpers.toast('error', error.response.data.error);
            console.error('Error logging in:', error);
        } finally {
            setLoading(false);
        }
    };

    if (pageLoading) {
        return <Loader />;
    }

    return (
        <div>
            <HelmetWrapper />
            <div className="d-flex flex-column flex-lg-row flex-column-fluid">
                <div className="d-flex flex-lg-row-fluid">
                    <div className="d-flex flex-column flex-center pb-0 pb-lg-10 p-10 w-100">
                        <img className="theme-light-show mx-auto mw-100 w-150px w-lg-300px mb-10" src="/assets/login.jpg" alt="" />
                        <h1 className="text-gray-800 fs-2qx fw-bold text-center mb-7">Sign In to ClockIn</h1>
                        <div className="text-gray-600 fs-base text-center fw-semibold px-8">
                            Time tracker software boosts organization, productivity, and offers valuable insights into your time management. Align you personally with time management Ideal for hourly billing professionals & multitasking project.
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column-fluid flex-lg-row-auto justify-content-center justify-content-lg-end p-12">
                    <div className="bg-body d-flex flex-column flex-center rounded-4 w-md-600px p-10">
                        <div className="d-flex flex-center flex-column align-items-stretch h-lg-100 w-md-400px">
                            <div className="d-flex flex-center flex-column flex-column-fluid pb-15 pb-lg-20">
                                <img src='/assets/blacklogo.png' alt="Logo" />
                                <form className="form w-100" noValidate id="kt_sign_in_form" onSubmit={handleSubmit}>
                                    <div className="separator separator-content my-14">
                                        <span className="w-125px text-gray-500 fw-semibold fs-7">Sign In</span>
                                    </div>
                                    <div className="fv-row mb-8">
                                        <input type="text" placeholder="Email" name="email" autoComplete="off" className="form-control bg-transparent" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="fv-row mb-8">
                                        <input type="password" placeholder="Password" name="password" autoComplete="off" className="form-control bg-transparent" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <div className="d-grid mb-10">
                                        <button type="submit" id="kt_sign_in_submit" className="btn" style={{ background: "#FF7A50", color: "white", padding: "1rem", borderRadius: '5px' }}>
                                            <span className="indicator-label">
                                                {isLoading ? 'Please wait ...' : 'Sign In'}
                                            </span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
