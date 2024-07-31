import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/pageStyle/Registration.css';
import { registerUser } from '../redux/authSlice';
import signUpUser from "../models/signUpUser";

const Registration = () => {
    const newUser = useRef(new signUpUser())
    const dispatch = useDispatch();
    const error = useSelector(state => state.auth.error)
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(registerUser({
          UserName: newUser.current.UserName.value,
          Email: newUser.current.Email.value,
          Password: newUser.current.Password.value,
          ConfirmPassword: newUser.current.Password.value}));

        if (error) {
          alert(error)
        }
        navigate("/login")
    }

    return (
      <div className="flex w-full h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md px-6 py-6 bg-white rounded-3xl shadow-lg border-2 border-gray-100">
        <h1 className="text-3xl font-semibold text-center">Register</h1>
        <p className="font-medium text-base text-gray-500 mt-2 text-center">Welcome! Please enter your details.</p>
        <div className="mt-4">
          <div className="flex flex-col mb-3">
            <label className="text-base font-medium">Username</label>
            <input 
              ref={(u) => (newUser.current.UserName = u)}
              className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent"
              placeholder="Enter your username"
            />
          </div>
          <div className="flex flex-col mb-3">
            <label className="text-base font-medium">Email</label>
            <input 
              ref={(e) => newUser.current.Email = e}
              className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col mb-3">
            <label className="text-base font-medium">Password</label>
            <input 
              ref={(p) => newUser.current.Password = p}
              className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent"
              placeholder="Enter your password"
              type="password"
            />
          </div>
          <div className="flex flex-col mb-3">
            <label className="text-base font-medium">Confirm Password</label>
            <input 
              ref={(cp) => newUser.current.ConfirmPassword = cp}
              className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent"
              placeholder="Confirm Password"
              type="password"
            />
          </div>
          <div className="mt-4 flex justify-between items-center">
            <div>
              <input type="checkbox" id="remember" />
              <label className="ml-2 font-medium text-base" htmlFor="remember">Remember for 30 days</label>
            </div>
            <button className="font-medium text-base text-violet-500">Forgot password</button>
          </div>
          <div className="mt-4 flex flex-col gap-y-3">
            <button
              onClick={handleSubmit}
              className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-3 bg-violet-500 rounded-xl text-white font-bold text-lg"
            >
              Register
            </button>
            <button 
              className="flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-3 rounded-xl text-gray-700 font-semibold text-lg border-2 border-gray-100"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fillRule="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.26644 9.76453C6.19903 6.93863 8.85469 4.90909 12.0002 4.90909C13.6912 4.90909 15.2184 5.50909 16.4184 6.49091L19.9093 3C17.7821 1.14545 15.0548 0 12.0002 0C7.27031 0 3.19799 2.6983 1.24023 6.65002L5.26644 9.76453Z" fillRule="#EA4335"/>
                <path d="M16.0406 18.0142C14.9508 18.718 13.5659 19.0926 11.9998 19.0926C8.86633 19.0926 6.21896 17.0785 5.27682 14.2695L1.2373 17.3366C3.19263 21.2953 7.26484 24.0017 11.9998 24.0017C14.9327 24.0017 17.7352 22.959 19.834 21.0012L16.0406 18.0142Z" fillRule="#34A853"/>
                <path d="M19.8342 20.9978C22.0292 18.9503 23.4545 15.9019 23.4545 11.9982C23.4545 11.2891 23.3455 10.5255 23.1818 9.81641H12V14.4528H18.4364C18.1188 16.0119 17.2663 17.2194 16.0407 18.0108L19.8342 20.9978Z" fillRule="#4A90E2"/>
                <path d="M5.27698 14.2663C5.03833 13.5547 4.90909 12.7922 4.90909 11.9984C4.90909 11.2167 5.03444 10.4652 5.2662 9.76294L1.23999 6.64844C0.436587 8.25884 0 10.0738 0 11.9984C0 13.918 0.444781 15.7286 1.23746 17.3334L5.27698 14.2663Z" fillRule="#FBBC05"/>
              </svg>
              Sign in with Google
            </button>
          </div>
          <div className="mt-4 flex justify-center items-center">
            <p className="font-medium text-base">Already have an account?</p>
            <Link to="/login" className="ml-2 font-medium text-base text-violet-500">Sign in</Link>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Registration;
