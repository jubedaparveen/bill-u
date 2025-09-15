

const AddShope = ({handleCreateShop}) => {
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
              <span className="w-6 h-6 rounded-md border border-black flex items-center justify-center text-xs">
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
              Basic Information
            </h1>
            <button
            onClick={handleCreateShop}
              className="text-gray-500 cursor-pointer hover:text-gray-700 text-xl leading-none"
            >
              ×
            </button>
          </div>

          <p className="text-gray-600 mb-5 text-sm">
            Please provide your shop name, owner name, email address and contact number.
          </p>

          <form className="space-y-4 text-sm">
            <div>
              <label className="block mb-1 font-medium text-gray-700">Shop Name</label>
              <input
                type="text"
                placeholder="e.g. Murlidhar store"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium text-gray-700">Owner First Name</label>
                <input
                  type="text"
                  placeholder="e.g. Murlidhar"
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-700">Owner Last Name</label>
                <input
                  type="text"
                  placeholder="e.g. Shukla"
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                placeholder="e.g. Murlidhar798@gmail.com"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">Contact Number</label>
              <input
                type="tel"
                placeholder="e.g. +91 989 238 344"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Next Step Button aligned right */}
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
    </div>
  )
}

export default AddShope

