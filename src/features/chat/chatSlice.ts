import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface message {
  type: "bot" | "user",
  message: string
}

interface ChatState {
  message: message[]
}

const initialState: ChatState = {
  message: [
    {
      type: 'bot',
      message: "Hi, There..! 🙋‍♂️"
    },
    {
      type: 'bot',
      message: "How may I help you?"
    },
  ]
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<message>) => {
      state.message.push(action.payload); 
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;