import React from 'react'

const Header:React.FC = () => {
  return (
      <div className="w-full top-0 z-10 bg-gradient-to-r from-[#00d4ff] to-[#00f5ff] px-4 py-2 rounded-t-lg shadow-lg">
            <div className="flex items-center gap-4">
                  {/* Chatbot Logo */}
                  <div className="bg-white rounded-full flex items-center justify-center p-1 shadow-md">
                        <img
                              alt="Chatbot logo"
                              src="/chatbot_icon.png"
                              className="w-10 h-10"
                        />
                  </div>

                  {/* ChatBot Title */}
                  <p className="font-bold text-2xl text-gray-900 drop-shadow-sm">
                        ChatBot
                  </p>
            </div>
      </div>

  )
}

export default Header