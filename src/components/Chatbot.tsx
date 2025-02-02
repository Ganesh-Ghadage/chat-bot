import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Chatbox from './Chatbox'

const Chatbot: React.FC = () => {
  return (
    <div className='w-[300px] h-[500px] bg-[rgb(198,255,255)] bg-[linear-gradient(0deg, rgba(198,255,255,1) 0%, rgba(189,189,189,1) 100%);] rounded-t-lg rounded-bl-lg shadow-2xl'>
      <Header />
      <div className='max-h-96  flex flex-col justify-end'>
        <Chatbox />
      </div>
      <Footer />
    </div>
  )
}

export default Chatbot