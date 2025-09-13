// src/pages/ResetPasswordPage.jsx
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LogoImage from "../images/Group 106.svg";
import BgImage from "../images/Group 145.svg";
import { useResetPasswordMutation } from "../features/auth/authService"

const ResetPasswordPage = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";

  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    setStatus("pending");
    setError("");
    try {
      await resetPassword({ email, newPassword }).unwrap();
      setStatus("success");
      navigate("/login");
    } catch (err) {
      setStatus("idle");
      setError(err?.data?.message || "Failed to reset password. Please try again.");
    }
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundColor: "#F6C90E",
        backgroundImage: `url(${BgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "100% auto",
      }}
    >
      <div className="relative flex justify-center items-center min-h-screen">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden flex w-full max-w-[41rem]">
          {/* Left Dark Section */}
          <div className="bg-neutral-900 rounded-xl text-white py-20 px-10 flex-shrink-0 w-[45%] hidden md:flex flex-col justify-center items-center"></div>

          {/* Right Form Section */}
          <div className="py-16 px-6 md:px-12 w-full md:w-[55%]">
            <div>
              <div className="flex justify-center mb-4">
                <div className="rounded-md px-3 py-3 shadow-[0_0_5px_rgba(0,0,0,0.15)]">
                  <img src={LogoImage} alt="logo" />
                </div>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 text-center mb-2">
                Reset Password
              </h2>
              <p className="text-xs text-gray-600 text-center mb-6">
                Enter your new password below
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="newPassword" className="block text-sm font-semibold text-gray-700 uppercase">
                    New Password
                  </label>
                  <div className="relative mt-1">
                    <input
                      type="password"
                      id="newPassword"
                      placeholder="Enter new password"
                      required
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="w-full pl-4 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-yellow-400 focus:border-yellow-400 text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 uppercase">
                    Confirm Password
                  </label>
                  <div className="relative mt-1">
                    <input
                      type="password"
                      id="confirmPassword"
                      placeholder="Confirm new password"
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full pl-4 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-yellow-400 focus:border-yellow-400 text-xs"
                    />
                  </div>
                </div>

                <div className="flex justify-center pt-2">
                  <button
                    type="submit"
                    className="w-[45%] py-2 bg-yellow-400 text-xs text-gray-900 rounded-lg shadow-sm hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50"
                  >
                    {isLoading || status === 'pending' ? 'Resetting...' : 'Reset Password'}
                  </button>
                </div>

                {error && (
                  <div className="text-red-500 text-center text-sm">
                    {error}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
