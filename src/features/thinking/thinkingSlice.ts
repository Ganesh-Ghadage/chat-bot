import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface thinkingState {
      thinking: boolean
}

const initialState: thinkingState = {
      thinking: false
}

const thinkingSlice = createSlice({
      name: "thinking",
      initialState,
      reducers: {
            setThinking: (state, action: PayloadAction<boolean>) => {
                  state.thinking = action.payload
            }
      }
})

export const { setThinking } = thinkingSlice.actions
export default thinkingSlice.reducer