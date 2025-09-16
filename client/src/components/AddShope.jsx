import React from 'react'

const AddShope = ({showCreateShop , handleCreateShope}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 lg:pl-64 bg-black/40">
      {/* Outer Card with custom desktop size */}
      <div 
              className="relative z-10 w-[1035px] h-[550px] bg-white rounded-xl overflow-hidden shadow-xl flex flex-col md:flex-row"
>
        {/* Left Sidebar Steps */}
        <div className="bg-yellow-400 md:w-1/3 w-full p-6 md:p-10 md: rounded-r-xl">
          <div className="space-y-6 text-black font-medium">
            <div className="flex items-center space-x-3">
              <span className="w-8 h-8 rounded-md bg-black text-white flex items-center justify-center">
                1
              </span>
              <span>Basic Info</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="w-8 h-8 rounded-md border border-black flex items-center justify-center">
                2
              </span>
              <span>Address Details & Branding</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="w-8 h-8 rounded-md border border-black flex items-center justify-center">
                3
              </span>
              <span>Review & Confirm</span>
            </div>
          </div>
        </div>

        {/* Right Content */}
         <div className="md:w-2/3 w-full flex px-8 py-4 flex-col h-full">
         <div className='flex items-start justify-between'>
                    <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
            Basic Information
          </h1>

                     <button
               className=" text-gray-500 hover:text-black p-2 rounded-md"
             >
               ✕
             </button>


         </div>
          <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
            Please provide your shop name, owner name, email address and contact number
          </p>


          <form className="space-y-5">
            <div>
              <label className="block mb-1 font-medium text-gray-700">Shop Name</label>
              <input
                type="text"
                placeholder="e.g. Murlidhar store"
                className="w-full border rounded-md px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block mb-1 font-medium text-gray-700">Owner First Name</label>
                <input
                  type="text"
                  placeholder="e.g. Murlidhar"
                  className="w-full border rounded-md px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-700">Owner Last Name</label>
                <input
                  type="text"
                  placeholder="e.g. Shukla"
                  className="w-full border rounded-md px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                placeholder="e.g. Murlidhar798@gmail.com"
                className="w-full border rounded-md px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">Contact Number</label>
              <input
                type="tel"
                placeholder="e.g. +91 989 238 344"
                className="w-full border rounded-md px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="submit"
                className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-md hover:bg-yellow-500 transition-colors text-sm sm:text-base"
              >
                Next Step
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddShope


