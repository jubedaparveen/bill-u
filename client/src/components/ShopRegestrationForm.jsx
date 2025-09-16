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
    // 👉 later: API call here
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <ShopFormOne formData={formData} setFormData={setFormData} />;
      case 2:
        return <ShopFormTwo formData={formData} setFormData={setFormData} />;
      case 3:
        return <ShopFormThree formData={formData} />;
      default:
        return null;
    }
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      handleShopData();
    }
  };

  return (
    <div className="bg-black/10 z-100 h-full w-full fixed inset-0 flex items-center justify-center">
      <div className="flex rounded-xl bg-white shadow-lg max-w-6xl h-[80vh]">
        {/* Left Step Indicator */}
        <div className="bg-yellow-400 w-[35%] h-full p-8 md:p-10 rounded-xl">
          <div className="space-y-6">
            {[
              { step: 1, title: "Basic Info" },
              { step: 2, title: "Address Details & Branding" },
              { step: 3, title: "Admin Roles" },
            ].map((stepInfo) => (
              <div key={`step-${stepInfo.step}`} className="flex items-center gap-4">
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
                  <div className="font-semibold">{stepInfo.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Form Content */}
        <div className="flex flex-col p-6 overflow-y-auto no-scrollbar w-full">
          {renderStepContent()}

          {/* Buttons row at bottom */}
          <div className="mt-auto flex items-center justify-end gap-4 w-full">
            {currentStep > 1 && (
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                className="p-3 bg-gray-200 rounded-xl w-1/4 flex justify-center items-center"
              >
                <span className="text-base font-medium text-black">Go Back</span>
              </button>
            )}

            <button
              onClick={handleNext}
              className="p-3 bg-yellow-300 rounded-xl w-1/4 flex justify-center items-center"
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
