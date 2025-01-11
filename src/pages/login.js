import React, { useState } from "react";

const LoginModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
            {/* Close Button */}
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Logo */}
            <div className="flex justify-center">
              <img
                src={
                  "https://www.olx.com.pk/assets/brandIconLogin_noinline.93e8a1a9cf50902ba5250814f57810ff.svg"
                }
                alt="OLX Logo"
                className="h-12"
              />
            </div>

            {/* Heading */}
            <h2 className="text-xl font-bold text-center text-gray-800 mt-4">
              Login into your OLX account
            </h2>

            {/* Login Buttons */}
            <div className="space-y-4 mt-6">
              <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100">
                <img
                  src="https://cdn-icons-png.flaticon.com/256/2875/2875404.png"
                  alt="Google"
                  className="w-5 h-5 mr-2"
                />
                Login with Google
              </button>
              <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6w14wJrdpA667CAKGl0te4ImPQ5er5VplVw&s"
                  alt="Facebook"
                  className="w-8 h-8 mr-2"
                />
                Login with Facebook
              </button>

              {/* Divider */}
              <div className="flex items-center justify-center">
                <span className="text-gray-500 text-sm">OR</span>
              </div>

              <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  class="dddd161c"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M4 18V7.41l6.88 6.88h2.24L20 7.42V18H4zM18.59 6l-6.3 6.3h-.58L5.4 6H18.6zM21 4H3L2 5v14l1 1h18l1-1V5l-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                &nbsp; Login with Email
              </button>
              <button className="w-full flex items-center justify-center px-4 py-2 border border-black rounded-lg text-gray-700 hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  class="dddd161c"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M18.39 19.98A15.07 15.07 0 0 1 4.02 5.6l3.52-1.4 2.15 4.3-1.67.83v.62a6.03 6.03 0 0 0 6.02 6.02h.62l.28-.56.56-1.1 4.3 2.14-1.41 3.52zm3.13-4.9l-6.02-3.01-1.35.45-.7 1.4a4.02 4.02 0 0 1-3.38-3.37l1.41-.7.45-1.35-3.01-6.02L7.65 2 2.63 4 2 4.95C2 14.34 9.65 22 19.06 22l.93-.63L22 16.35l-.48-1.27z"
                    clip-rule="evenodd"
                  ></path>
                </svg>&nbsp;
                Login with Phone
              </button>
            </div>

            {/* Signup Link */}
            <p className="text-sm text-center text-blue-500 mt-6 cursor-pointer">
              New to OLX? Create an account
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginModal;
