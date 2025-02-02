import React, { useEffect, useRef } from 'react'
import Message from './Message'
import { useAppSelector } from '../app/hooks'

const Chatbox:React.FC = () => {
      const divRef = useRef<HTMLDivElement | null>(null)
      const { message } = useAppSelector((state) => state.chatReducer);

      // to automatically scroll chat window to bottom
      useEffect(() => {
            if(divRef.current){
                  divRef.current.scrollIntoView({behavior: "smooth"})
            }
      }, [message])

  return (
      <div className='overflow-y-auto'
            style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
            }}
      >

            <Message />

            {/* // ref div to automatically scroll chat window to bottom */}
            <div ref={divRef}></div>
      </div>
  )
}

export default Chatbox