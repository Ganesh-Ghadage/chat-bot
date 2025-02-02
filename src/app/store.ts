import { configureStore } from '@reduxjs/toolkit'
import chatReducer from '../features/chat/chatSlice'
import thinkingReducer from '../features/thinking/thinkingSlice'

export const store = configureStore({
  reducer: {
    chatReducer: chatReducer,
    thinkingReducer: thinkingReducer
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch