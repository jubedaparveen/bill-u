import React from "react";

const ShopFormOne = ({ formData, setFormData }) => {
  return (
    <div className="">
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
      <p className="text-base text-gray-500 mb-8 leading-6">
        Please provide your shop name, owner name, email address and contact
        number
      </p>

      {/* Shop Name */}
      <div className="mb-5">
        <label className="block text-base font-semibold text-gray-900 mb-2">
          Shop Name
        </label>
        <input
          type="text"
          className="py-2 w-full bg-white border border-gray-300 rounded-md px-4 text-base text-gray-900"
          value={formData.shopName}
          onChange={(e) =>
            setFormData({ ...formData, shopName: e.target.value })
          }
          placeholder="e.g. Murlidhar store"
        />
      </div>

      {/* Owner Name */}
      <div className="flex gap-3 mb-5">
        <div className="flex-1">
          <label className="block text-base font-semibold text-gray-900 mb-2">
            Owner First Name
          </label>
          <input
            type="text"
            className="p-2 w-full bg-white border border-gray-300 rounded-md px-4 text-base text-gray-900"
            value={formData.ownerFirstName}
            onChange={(e) =>
              setFormData({ ...formData, ownerFirstName: e.target.value })
            }
            placeholder="e.g. Murlidhar"
          />
        </div>
        <div className="flex-1">
          <label className="block text-base font-semibold text-gray-900 mb-2">
            Owner Last Name
          </label>
          <input
            type="text"
            className="p-2 w-full bg-white border border-gray-300 rounded-md px-4 text-base text-gray-900"
            value={formData.ownerLastName}
            onChange={(e) =>
              setFormData({ ...formData, ownerLastName: e.target.value })
            }
            placeholder="e.g. Shukla"
          />
        </div>
      </div>

      {/* Email */}
      <div className="mb-5">
        <label className="block text-base font-semibold text-gray-900 mb-2">
          Email Address
        </label>
        <input
          type="email"
          className="p-2 w-full bg-white border border-gray-300 rounded-md px-4 text-base text-gray-900"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="e.g. Murlidhar7987@mail.com"
        />
      </div>

      {/* Contact */}
      <div className="mb-5">
        <label className="block text-base font-semibold text-gray-900 mb-2">
          Contact Number
        </label>
        <input
          type="tel"
          className="p-2 w-full bg-white border border-gray-300 rounded-md px-4 text-base text-gray-900"
          value={formData.contact}
          onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
          placeholder="e.g. +91 989 238 344"
        />
      </div>
    </div>
  );
};

export default ShopFormOne;
