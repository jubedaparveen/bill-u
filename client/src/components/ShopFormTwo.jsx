import React from "react";

const ShopFormTwo = ({ formData, setFormData }) => {
    // Handle image selection
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setFormData({ ...formData, logo: url });
        }
    };

    return (
        <div>
                  <div className="flex items-center justify-between ">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 mt-2">
          Address & Branding
        </h2>
        <button
          className="text-gray-500 hover:text-black p-2 rounded-md"
        >
          ✕
        </button>

      </div>

            <p className="text-base text-gray-500 mb-4">
                Please provide the shop’s full address, city, state, postal code, <br />
                country, and upload the shop logo.
            </p>

            <div className="flex w-full items-center justify-around p-6 gap-4">
                <div>
                    {/* Address */}
                    <div className="mb-2">
                        <label className="block text-base font-semibold text-gray-900 mb-2">
                            Address
                        </label>
                        <input
                            type="text"
                            className=" w-full bg-white border border-gray-300 rounded-md px-4 py-6 text-gray-900"
                            value={formData.address}
                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                            placeholder="Enter your full address"
                        />
                    </div>

                    {/* City & State */}
                    <div className="flex gap-2 mb-2">
                        <div className="flex-1">
                            <label className="block text-base font-semibold text-gray-900 mb-2">
                                City
                            </label>
                            <input
                                type="text"
                                className="p-2 w-full bg-white border border-gray-300 rounded-md px-4 text-base text-gray-900"
                                value={formData.city}
                                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                placeholder="e.g. Indore"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block text-base font-semibold text-gray-900 mb-2">
                                State
                            </label>
                            <input
                                type="text"
                                className="p-2 w-full bg-white border border-gray-300 rounded-md px-4 text-base text-gray-900"
                                value={formData.state}
                                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                                placeholder="e.g. Madhya Pradesh"
                            />
                        </div>
                    </div>

                    {/* Postal Code & Country */}
                    <div className="flex gap-2 mb-2">
                        <div className="flex-1">
                            <label className="block text-base font-semibold text-gray-900 mb-2">
                                Postal Code
                            </label>
                            <input
                                type="text"
                                className="p-2 w-full bg-white border border-gray-300 rounded-md px-4 text-base text-gray-900"
                                value={formData.postalCode}
                                onChange={(e) =>
                                    setFormData({ ...formData, postalCode: e.target.value })
                                }
                                placeholder="e.g. 452010"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block text-base font-semibold text-gray-900 mb-2">
                                Country
                            </label>
                            <input
                                type="text"
                                className="p-2 w-full bg-white border border-gray-300 rounded-md px-4 text-base text-gray-900"
                                value={formData.country}
                                onChange={(e) =>
                                    setFormData({ ...formData, country: e.target.value })
                                }
                                placeholder="e.g. India"
                            />
                        </div>
                    </div>


                </div>

                <div>
                    {/* Logo Upload */}
                    <div className="mb-4">
                        <label className="block text-base font-semibold text-gray-900 mb-2">
                            Logo
                        </label>
                        <label
                            className="border border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center cursor-pointer  py-25 text-center"
                        >
                            {formData.logo ? (
                                <img
                                    src={formData?.logo}
                                    alt="Shop logo"
                                    className="w-16 h-16 object-cover"
                                />
                            ) : (
                                <>
                                    {/* <img src={cloudImg} alt="" className="w-8 h-8 mb-2" /> */}
                                    <span className="text-gray-400 text-base">
                                        Drop your LOGO here or click to upload
                                    </span>
                                </>
                            )}
                            <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleImageChange}
                            />
                        </label>
                    </div>

                </div>

            </div>



        </div>
    );
};

export default ShopFormTwo;

