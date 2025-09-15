import React from 'react'

const ShopAddress = () => {
  return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      {/* Modal Box */}
      <div className="flex flex-col md:flex-row w-full max-w-2xl rounded-lg overflow-hidden bg-white shadow-xl">

        {/* Left Sidebar Steps */}
        <div className="bg-yellow-400 w-full md:w-48 p-4 flex flex-col">
          <div className="space-y-4 text-black font-medium text-sm">
            <div className="flex items-center space-x-2">
              <span className="w-6 h-6 rounded-md bg-black text-white flex items-center justify-center text-xs">
                1
              </span>
              <span>Basic Info</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-6 h-6 rounded-md bg-black text-white flex items-center justify-center text-xs">
                2
              </span>
              <span>Address & Branding</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-6 h-6 rounded-md border border-black flex items-center justify-center text-xs">
                3
              </span>
              <span>Review & Confirm</span>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 p-5 sm:p-6">
          <div className="flex justify-between items-start mb-3">
            <h1 className="text-lg sm:text-xl font-bold text-gray-900">
              Address Details & Branding
            </h1>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-xl leading-none"
            >
              ×
            </button>
          </div>

          <p className="text-gray-600 mb-5 text-sm">
            Please provide the shop’s full address, city, state, postal code, country, and upload the shop logo.
          </p>

          <form className="space-y-4 text-sm">
            {/* Address & Logo */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <label className="block mb-1 font-medium text-gray-700">Address</label>
                <textarea
                  placeholder="Enter full address"
                  className="w-full border rounded-md px-3 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-700">Logo</label>
                <div className="border-2 border-dashed border-gray-300 rounded-md h-24 flex items-center justify-center text-gray-400 text-xs">
                  Drop your LOGO here
                </div>
              </div>
            </div>

            {/* City / State */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium text-gray-700">City</label>
                <input
                  type="text"
                  placeholder="e.g. Indore"
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-700">State</label>
                <input
                  type="text"
                  placeholder="e.g. Madhya Pradesh"
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
            </div>

            {/* Postal / Country */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium text-gray-700">Postal Code</label>
                <input
                  type="text"
                  placeholder="e.g. 452010"
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-700">Country</label>
                <input
                  type="text"
                  placeholder="e.g. India"
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
            </div>

            {/* Next Step Button */}
            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                className="bg-yellow-400 text-black font-semibold px-5 py-2 rounded-md hover:bg-yellow-500 transition-colors"
              >
                Next Step
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>  )
}

export default ShopAddress
