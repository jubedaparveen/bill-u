import React from "react";
import { IoCreateOutline } from "react-icons/io5"; // Ionicons equivalent

const ShopFormThree = ({ formData, onEdit }) => {
    return (
        <div className="flex-1 overflow-y-auto pb-5">
            <div className="flex items-center justify-between ">
                <h2 className="text-2xl font-bold text-gray-900 mb-2 mt-2">
                    Basic Information
                </h2>
                <button
                    className="text-gray-500 hover:text-black p-2 rounded-md"
                >
                    ✕
                </button>

            </div>

            <p className="text-base text-gray-500 mb-4">
                Please review all the details you have entered, verify that the
                information is correct, and confirm before submitting.
            </p>

            <div className="flex-1 ">
                {/* Information Section */}
                {(formData.shopName ||
                    formData.ownerFirstName ||
                    formData.ownerLastName ||
                    formData.email ||
                    formData.contact) && (
                        <>
                            <h3 className="text-lg font-semibold mb-2">Information</h3>
                            <div className="relative gap-2 p-4 border border-gray-400 rounded-xl bg-white mb-2 max-w-4xl">
                                {formData.shopName && (
                                    <p className="text-lg">Shop Name : {formData.shopName}</p>
                                )}

                                {(formData.ownerFirstName || formData.ownerLastName) && (
                                    <p className="text-base text-[#626262]">
                                     Full Name :  {formData.ownerFirstName} {formData.ownerLastName}
                                    </p>
                                )}

                                {formData.email && (
                                    <p className="text-base text-[#626262]">E-mail : {formData.email}</p>
                                )}

                                {formData.contact && (
                                    <p className="text-base text-[#626262] mt-1">
                                       Contact :  {formData.contact}
                                    </p>
                                )}

                                <button
                                    onClick={() => onEdit(1)}
                                    className="absolute top-2 right-2 text-yellow-400 hover:text-yellow-500"
                                    aria-label="Edit Information"
                                >
                                    <IoCreateOutline size={24} />
                                </button>
                            </div>
                        </>
                    )}

                {/* Address Section */}
                {(formData.city ||
                    formData.country ||
                    formData.state ||
                    formData.postalCode ||
                    formData.address) && (
                        <>
                            <h3 className="text-lg font-semibold mb-2">Address</h3>
                            <div className="relative gap-2 p-4 border border-gray-400 rounded-xl bg-white mb-2">
                                {formData.city && <p className="text-xl">City : {formData.city}</p>}

                                {formData.country && (
                                    <p className="text-[#626262]">Country : {formData.country}</p>
                                )}

                                {formData.state && (
                                    <p className="text-base text-[#626262] mt-2">
                                       State :  {formData.state}
                                    </p>
                                )}

                                {formData.postalCode && (
                                    <p className="text-base text-[#626262]">
                                        PostalCode : {formData.postalCode}
                                    </p>
                                )}

                                {formData.address && (
                                    <p className="text-base text-[#626262] mt-1">
                                        Address : {formData.address}
                                    </p>
                                )}

                                <button
                                    onClick={() => onEdit(2)}
                                    className="absolute top-2 right-2 text-yellow-400 hover:text-yellow-500"
                                    aria-label="Edit Address"
                                >
                                    <IoCreateOutline size={24} />
                                </button>
                            </div>
                        </>
                    )}

                {/* Logo Section */}
                {formData.logo && (
                    <div className="gap-2 p-4 border border-gray-400 rounded-xl bg-white mb-2">
                        <h3 className="text-lg font-semibold mb-2">Shop Logo</h3>
                        <img
                            src={formData.logo}
                            alt="Shop logo"
                            className="w-20 h-20 object-cover"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ShopFormThree;
