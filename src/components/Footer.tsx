import React, { useState, FormEvent, ChangeEvent } from "react";
import { GrSend } from "react-icons/gr";
import { useAppDispatch } from "../app/hooks";
import { addMessage } from "../features/chat/chatSlice";
import { setThinking } from "../features/thinking/thinkingSlice";
import generateAIReply from "../utills/botReplyGenerater";

const Footer: React.FC = () => {
  const [userInput, setUserInput] = useState<string>("");
  const dispatch = useAppDispatch()

  const handleUserMsg = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    if (userInput.trim()) { 
      const userMessage = userInput;
      setUserInput("");
      dispatch(addMessage({type: 'user', message: userMessage}))
      dispatch(setThinking(true))
      
      const botReply = await generateAIReply(userInput)
      dispatch(addMessage( {type: 'bot', message: botReply} ));
      dispatch(setThinking(false))
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setUserInput(event.target.value);
  };

  return (
    <div
      className="
        absolute 
        bottom-0 
        w-full 
        bg-[#6df1f7]/90 
        backdrop-blur-md 
        p-2 
        shadow-lg 
        rounded-t-lg
        rounded-bl-lg
      "
    >
      <form
        className="flex gap-4 items-center"
        onSubmit={handleUserMsg}
      >
        <input
          name="msg-input"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Write your query..."
          className="
            bg-white 
            rounded-full 
            px-4 
            py-2 
            text-sm 
            w-full 
            shadow-sm 
            focus:outline-none 
            focus:ring-2 
            focus:ring-[#00c3ff] 
            focus:border-transparent
          "
        />
        <button
          type="submit"
          className="
            w-12 
            h-9 
            flex 
            items-center 
            justify-center 
            bg-white 
            rounded-full 
            shadow-md 
            hover:bg-[#e0f7ff] 
            hover:scale-105 
            transition-transform 
            duration-200 
            ease-in-out
          "
        >
          <GrSend className="text-xl text-[#00c3ff]" />
        </button>
      </form>
    </div>
  );
};

export default Footer;
