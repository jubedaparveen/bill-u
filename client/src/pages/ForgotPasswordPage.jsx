// src/pages/ForgotPasswordPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoImage from "../images/Group 106.svg";
import BgImage from "../images/Group 145.svg";
import MailImage from "../images/material-symbols_mail.svg";
import { useGenerateOtpMutation } from "../features/auth/authService";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("idle");
  const navigate = useNavigate();

  const [generateOtp, { isLoading }] = useGenerateOtpMutation();

 const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("pending");
  setError("");

  try {
    const res = await generateOtp({ email }).unwrap();
  

    setStatus("success");

    // ✅ navigate after success
    navigate("/otp", { state: { email } });
  } catch (err) {

    setStatus("idle");
    setError(err?.data?.message || "An error occurred. Please try again.");
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
                Reset your password.
              </h2>
              <p className="text-xs text-gray-600 text-center mb-6">
                Enter your email to reset your password
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 uppercase"
                  >
                    EMAIL
                  </label>
                  <div className="relative mt-1">
                    <img
                      src={MailImage}
                      alt="mail icon"
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-5 text-gray-400"
                    />
                    <input
                      type="email"
                      id="email"
                      placeholder="e.g. murlidhar867@gmail.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-yellow-400 focus:border-yellow-400 text-xs"
                    />
                  </div>
                </div>

                <div className="flex justify-center pt-2">
                  <button
                    type="submit"
                    className="w-[35%] py-2 bg-yellow-400 text-xs text-gray-900 rounded-lg shadow-sm hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50"
                    disabled={isLoading}
                  >
                    {isLoading ? "Sending OTP..." : "Get OTP"}
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

export default ForgotPasswordPage;
