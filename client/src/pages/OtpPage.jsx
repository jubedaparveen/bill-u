// src/pages/OtpPage.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LogoImage from "../images/Group 106.svg";
import BgImage from "../images/Group 145.svg";
import { useVerifyOtpMutation, useGenerateOtpMutation } from "../features/auth/authService";

const OtpPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const emailFromState = location.state?.email || "";
  const [email, setEmail] = useState(emailFromState);

  const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(60); // 1 minute
  const [isResending, setIsResending] = useState(false);

  const [verifyOtp, { isLoading: verifying, error: verifyError }] = useVerifyOtpMutation();
  const [generateOtp, { isLoading: generating, error: generateError }] = useGenerateOtpMutation();

  useEffect(() => {
    // If nobody passed email, redirect back to forgot page
    if (!email) {
      navigate("/forgot-password");
    }
  }, [email, navigate]);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev <= 1 ? 0 : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleOtpChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtpValues = [...otpValues];
      newOtpValues[index] = value;
      setOtpValues(newOtpValues);

      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otp = otpValues.join("");
    if (!email || otp.length !== 6) return;
    try {
      await verifyOtp({ email, otp }).unwrap();
      // on success navigate to reset password
      navigate("/reset-password", { state: { email } });
    } catch (err) {
      console.error("OTP verification failed:", err);
    }
  };

  const handleResendOtp = async () => {
    if (!email) return;
    try {
      setIsResending(true);
      setOtpValues(["", "", "", "", "", ""]);
      setTimeLeft(60);
      await generateOtp({ email }).unwrap();
      // small delay to show sending
      setTimeout(() => {
        setIsResending(false);
      }, 700);
    } catch (err) {
      console.error("Failed to resend OTP:", err);
      setIsResending(false);
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
          <div className="bg-neutral-900 rounded-xl text-white py-20 px-10 flex-shrink-0 w-[45%] flex flex-col justify-center items-center">
          </div>

          {/* Right Form Section */}
          <div className="py-16 px-12 w-[55%]">
            <div className="">
              <div className="flex justify-center mb-4">
                <div className=" rounded-md px-3 py-3 shadow-[0_0_5px_rgba(0,0,0,0.15)]">
                  <img src={LogoImage} alt="logo" />
                </div>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 text-center mb-2">Verify your OTP.</h2>
              <p className="text-xs text-gray-600 text-center mb-6">Enter the OTP we sent u on your <br/> email</p>
              
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-medium text-gray-700 uppercase">OTP</label>
                    <div className="text-sm text-gray-500 font-mono">
                      {formatTime(timeLeft)}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {otpValues.map((value, index) => (
                      <input
                        key={index}
                        id={`otp-${index}`}
                        type="text"
                        maxLength={1}
                        value={value}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        className="w-9.5 h-10 text-center border border-gray-300 rounded-lg text-lg font-semibold focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                        placeholder=""
                      />
                    ))}
                  </div>
                </div>
                
                <div className="text-center">
                  <button
                    type="button"
                    onClick={handleResendOtp}
                    disabled={timeLeft > 0 || isResending || generating}
                    className="text-xs hover:underline focus:outline-none disabled:text-gray-400 disabled:cursor-not-allowed"
                  >
                    {isResending || generating ? "Sending..." : "Resend OTP"}
                  </button>
                  {(generateError || verifyError) && (
                    <div className="text-red-500 text-xs mt-1">
                      {generateError?.data?.message || verifyError?.data?.message || "Something went wrong"}
                    </div>
                  )}
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="w-[35%] py-2.5 bg-yellow-400 text-xs text-gray-900 rounded-xl shadow-sm hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50"
                    disabled={verifying || otpValues.join("").length !== 6}
                  >
                    {verifying ? 'Verifying...' : 'Verify'}
                  </button>
                </div>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpPage;
