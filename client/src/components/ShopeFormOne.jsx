import React from "react";
// import "../no-scrollbar.css"; // adjust the path

const ShopFormOne = ({ formData, setFormData, setShowForm }) => {
  return (
    <div className="w-full max-w-lg mx-auto px-4 sm:px-6 overflow-hidden no-scrollbar">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
          Basic Information
        </h2>
        <button
          onClick={() => setShowForm(false)}
          className="text-gray-500 hover:text-black p-2 rounded-md"
        >
          ✕
        </button>
      </div>

      <p className="text-sm sm:text-base text-gray-500 mb-6 leading-6">
        Please provide your shop name, owner name, email address and contact
        number.
      </p>

      {/* Shop Name */}
      <div className="mb-5">
        <label className="block text-sm sm:text-base font-semibold text-gray-900 mb-2">
          Shop Name
        </label>
        <input
          type="text"
          className="py-2 w-full bg-white border border-gray-300 rounded-md px-4 text-sm sm:text-base text-gray-900"
          value={formData.shopName}
          onChange={(e) =>
            setFormData({ ...formData, shopName: e.target.value })
          }
          placeholder="e.g. Murlidhar store"
        />
      </div>

      {/* Owner Name */}
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <div className="flex-1">
          <label className="block text-sm sm:text-base font-semibold text-gray-900 mb-2">
            Owner First Name
          </label>
          <input
            type="text"
            className="p-2 w-full bg-white border border-gray-300 rounded-md px-4 text-sm sm:text-base text-gray-900"
            value={formData.ownerFirstName}
            onChange={(e) =>
              setFormData({ ...formData, ownerFirstName: e.target.value })
            }
            placeholder="e.g. Murlidhar"
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm sm:text-base font-semibold text-gray-900 mb-2">
            Owner Last Name
          </label>
          <input
            type="text"
            className="p-2 w-full bg-white border border-gray-300 rounded-md px-4 text-sm sm:text-base text-gray-900"
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
        <label className="block text-sm sm:text-base font-semibold text-gray-900 mb-2">
          Email Address
        </label>
        <input
          type="email"
          className="p-2 w-full bg-white border border-gray-300 rounded-md px-4 text-sm sm:text-base text-gray-900"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="e.g. Murlidhar7987@mail.com"
        />
      </div>

      {/* Contact */}
      <div className="mb-5">
        <label className="block text-sm sm:text-base font-semibold text-gray-900 mb-2">
          Contact Number
        </label>
        <input
          type="tel"
          className="p-2 w-full bg-white border border-gray-300 rounded-md px-4 text-sm sm:text-base text-gray-900"
          value={formData.contact}
          onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
          placeholder="e.g. +91 989 238 344"
        />
      </div>
    </div>
  );
};

export default ShopFormOne;
