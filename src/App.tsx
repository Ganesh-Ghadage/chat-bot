import { useState, useRef, useEffect } from 'react'
import './App.css'
import Chatbot from './components/Chatbot'
import { FaChevronDown } from "react-icons/fa";


function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const chatboxRef = useRef<HTMLDivElement| null>(null)

  // toogle chatbot box
  const tooglePopup = (): void => {
    setIsOpen(!isOpen)
  }

  // to close chatbot box when we click outside of it
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent): void => {
      if(chatboxRef.current && !chatboxRef.current.contains(e.target as Node)){
        setIsOpen(false)
      }
    }

    if(isOpen){
      document.addEventListener("mousedown", handleOutsideClick)
    }else {
      document.removeEventListener("mousedown", handleOutsideClick)
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
    }
    
  }, [isOpen])

  return (
    <>
      {/* // chatbot button */}
      <button onClick={tooglePopup} className='w-12 h-12 absolute bottom-8 right-12 hover:scale-105 bg-[#2ed7fa] rounded-[50%] cursor-pointer transition-transform duration-200 ease-in-out '>
        {
          isOpen
          ?  <FaChevronDown className='m-auto text-2xl mt-1 text-white' />
          :  <img alt='chatbot logo' src='/chatbot_icon.png' className='p-1' />
        }
      </button>

      {/* // chatbot box */}
      {
        isOpen && 
        <div className='absolute right-12 bottom-22' ref={chatboxRef}>
          <Chatbot />
        </div>
      }
      
    </>
  )
}

export default App
