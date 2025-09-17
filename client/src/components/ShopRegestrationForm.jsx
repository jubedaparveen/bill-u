import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

import ShopFormTwo from "./ShopFormTwo";
import ShopFormThree from "./ShopeFormThree";
import ShopFormOne from "./ShopeFormOne";

const ShopRegistrationFormUI = ({ setShowForm }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    shopName: "",
    ownerFirstName: "",
    ownerLastName: "",
    email: "",
    contact: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    logo: "",
  });

  const handleShopData = () => {
    console.log("Final Submitted Data:", formData);
    // 👉 add API call here later
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <ShopFormOne
            formData={formData}
            setFormData={setFormData}
            setShowForm={setShowForm}
          />
        );
      case 2:
        return (
          <ShopFormTwo
            formData={formData}
            setFormData={setFormData}
            setShowForm={setShowForm}
          />
        );
      case 3:
        return <ShopFormThree formData={formData} setShowForm={setShowForm} />;
      default:
        return null;
    }
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep((prev) => prev + 1);
    } else {
      handleShopData();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 p-4 h-auto sm:p-6 overflow-auto">
      {/* 
        md:h-auto ensures natural height on md and smaller,
        lg:h-[80vh] applies only on large screens and up.
      */}
      <div className="flex flex-col md:flex-row rounded-xl bg-white shadow-lg w-full max-w-6xl h-auto md:h-auto lg:h-[80vh] overflow-hidden">
        {/* Left Step Indicator */}
        <div className="bg-yellow-400 w-full md:w-[35%] p-6 md:p-10 flex-shrink-0">
          <div className="space-y-6">
            {[
              { step: 1, title: "Basic Info" },
              { step: 2, title: "Address Details & Branding" },
              { step: 3, title: "Admin Roles" },
            ].map((stepInfo) => (
              <div
                key={`step-${stepInfo.step}`}
                className="flex items-center gap-4"
              >
                <div
                  className={`px-3 py-2 flex items-center justify-center rounded-md font-semibold border-2 ${
                    currentStep === stepInfo.step
                      ? "bg-black text-white border-black"
                      : "bg-yellow-400 text-black border-black"
                  }`}
                >
                  {stepInfo.step}
                </div>
                <div>
                  <div className="text-sm">Step {stepInfo.step}</div>
                  <div className="font-semibold text-sm sm:text-base">
                    {stepInfo.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Form Content */}
        <div className="flex flex-col p-4 sm:p-6 w-full overflow-y-auto">
          {renderStepContent()}

          {/* Buttons row */}
          <div className="mt-6 sm:mt-auto flex flex-col-reverse sm:flex-row items-center justify-end gap-4 w-full">
            {currentStep > 1 && (
              <button
                onClick={() => setCurrentStep((prev) => prev - 1)}
                className="w-full sm:w-1/4 p-3 bg-gray-200 rounded-xl text-center"
              >
                <span className="text-base font-medium text-black">Go Back</span>
              </button>
            )}

            <button
              onClick={handleNext}
              className="w-full sm:w-1/4 p-3 bg-yellow-300 rounded-xl text-center"
            >
              <span className="text-base font-semibold text-black">
                {currentStep === 3 ? "Submit" : "Next Step"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopRegistrationFormUI;
