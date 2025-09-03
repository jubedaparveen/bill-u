import React from 'react'

const EditAdmin = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white rounded-2xl shadow-lg max-w-5xl w-full p-6 md:p-10">
        {/* Header */}
        <h1 className="text-2xl font-bold text-gray-900">Edit Admin</h1>
        <p className="text-gray-500 text-sm mt-1">
          Update shop details and you can also assign admin here.
        </p>

        {/* Profile Image */}
        <div className="flex justify-center mt-6 relative">
          <img
            src="https://via.placeholder.com/100"
            alt="Admin"
            className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md"
          />
          <div className="absolute bottom-2 right-[calc(50%-3.2rem)] bg-yellow-400 p-1.5 rounded-full border border-white cursor-pointer hover:bg-yellow-500 transition">
            <FaEdit className="text-white text-xs" />
          </div>
        </div>

        {/* Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {/* Row 1 */}
          <div>
            <label className="text-sm font-semibold text-gray-700">
              Admin ID
            </label>
            <input
              type="text"
              className="w-full mt-1 p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value="#65165151"
              readOnly
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-700">
              Username
            </label>
            <input
              type="text"
              className="w-full mt-1 p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value="Murlidhar store"
            />
          </div>

          {/* Row 2 */}
          <div>
            <label className="text-sm font-semibold text-gray-700">
              Admin First Name
            </label>
            <input
              type="text"
              className="w-full mt-1 p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value="Murlidhar"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-700">
              Admin Last Name
            </label>
            <input
              type="text"
              className="w-full mt-1 p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value="Shukla"
            />
          </div>

          {/* Row 3 */}
          <div>
            <label className="text-sm font-semibold text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              className="w-full mt-1 p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value="Murlidhar7987@mail.com"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-700">
              Contact Number
            </label>
            <input
              type="text"
              className="w-full mt-1 p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value="+91 989 238 344"
            />
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="text-sm font-semibold text-gray-700">
              Address
            </label>
            <textarea
              rows="2"
              className="w-full mt-1 p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value="123 Vijay Nagar Main Road, Opposite C21 Mall, Indore, Madhya Pradesh"
            />
          </div>

          {/* City, State, Country, Postal */}
          <div>
            <label className="text-sm font-semibold text-gray-700">City</label>
            <input
              type="text"
              className="w-full mt-1 p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value="Indore"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-700">State</label>
            <input
              type="text"
              className="w-full mt-1 p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value="Madhya Pradesh"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-700">
              Country
            </label>
            <input
              type="text"
              className="w-full mt-1 p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value="India"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-700">
              Postal Code
            </label>
            <input
              type="text"
              className="w-full mt-1 p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value="452010"
            />
          </div>
        </div>

        {/* Roles */}
        <div className="mt-6">
          <label className="text-sm font-semibold text-gray-700">Roles</label>
          <div className="mt-3 space-y-2">
            {[
              {
                role: "Manager",
                desc: "Operations + team oversight, no settings control",
                checked: true,
              },
              {
                role: "Inventory Manager",
                desc: "Stock management manages inventory.",
                checked: true,
              },
              {
                role: "Campaign Creator",
                desc: "Can create and manage marketing campaigns, discount offers, and coupon codes.",
                checked: false,
              },
              {
                role: "Customer Manager",
                desc: "Can add, edit, and delete customer records, and view purchase history.",
                checked: true,
              },
            ].map((item, index) => (
              <label
                key={index}
                className="flex items-start space-x-2 text-gray-700"
              >
                <input
                  type="checkbox"
                  defaultChecked={item.checked}
                  className="mt-1 accent-yellow-400"
                />
                <span>
                  <strong>{item.role}</strong> — {item.desc}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Status */}
        <div className="mt-6">
          <label className="text-sm font-semibold text-gray-700">Status</label>
          <div className="flex space-x-6 mt-2">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="status"
                defaultChecked
                className="accent-green-500"
              />
              <span className="text-green-600 font-medium flex items-center gap-1">
                <span className="text-lg">●</span> Active
              </span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="status"
                className="accent-red-500"
              />
              <span className="text-red-600 font-medium flex items-center gap-1">
                <span className="text-lg">●</span> Inactive
              </span>
            </label>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-4 mt-10">
          <button className="px-6 py-2 border border-gray-200 rounded-lg hover:bg-gray-100 transition">
            Cancel
          </button>
          <button className="px-6 py-2 bg-yellow-400 rounded-lg text-white font-semibold hover:bg-yellow-500 transition">
            Save Changes
          </button>
        </div>
      </div>
    </div>
      )
}

export default EditAdmin
