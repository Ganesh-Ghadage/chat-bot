import React from "react";
import { BsRobot } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import Thinking from "./Thinking";
import { useAppSelector } from "../app/hooks";

const Message: React.FC = () => {
  const { message } = useAppSelector((state) => state.chatReducer);
  const { thinking } = useAppSelector((state) => state.thinkingReducer)

  return (
      <div>
            {message.map((message, index) => (
                  <div key={index} className="my-2">
                        {message.type === 'user' ? 
                              <div className="flex justify-end my-1 max-w-[250px] max-h-fit ml-auto">
                                    <div className="mr-2 p-3 bg-blue-500 text-white rounded-lg max-w-60 break-words">
                                          {message.message}
                                    </div>
                                    <div className="bg-blue-300 rounded-full min-w-8 max-h-8 mr-2">
                                          <FaUser className="text-2xl m-auto mt-1" />
                                    </div>
                              </div>
                        :
                              <div className="flex items-start my-1 max-w-[250px]">
                                    <div className="bg-gray-300 rounded-full min-w-8 h-8 ml-2 mt-auto">
                                          <BsRobot className="text-2xl m-auto mt-1" />
                                    </div>
                                    <div className="ml-2 p-3 bg-gray-100 text-gray-800 rounded-lg w-fit">
                                          { message.message }
                                    </div>
                              </div>
                        }
                        
                  </div>
            ))}
            {
                  thinking && 
                  <div>
                        <div className="flex items-start mb-4 max-w-[250px] mt-1">
                              <div className="bg-gray-300 rounded-full min-w-8 h-8 ml-2 mt-auto">
                                    <BsRobot className="text-2xl m-auto mt-1" />
                              </div>
                              <div className="ml-2 p-3 bg-gray-100 text-gray-800 rounded-lg w-fit">
                                    <Thinking />
                              </div>
                        </div>
                  </div>
            }
      </div>
)};

export default React.memo(Message);
