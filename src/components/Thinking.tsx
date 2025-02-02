import React from "react";

const Thinking: React.FC = () => {
  return (
      <div className="flex items-center gap-1">
      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-500"></div>
      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-1000"></div>
    </div>
  );
};

export default Thinking;
