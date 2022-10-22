import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Status = 'connected' | 'disconnected' | 'made choice'
type Choice = 'rock' | 'paper' | 'scissors' | null

interface IInitialState {
    name: string
    score: number
    status: Status
    currentChoice: Choice
}

const initialState: IInitialState = {
    name: '',
    score: 0,
    status: 'connected',
    currentChoice: null,
}

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        changePlayerName: (state, action: PayloadAction<string>) => {
            state.name = action.payload
        },
        changePlayerScore: (state, action: PayloadAction<number>) => {
            state.score = action.payload
        },
        changePlayerStatus: (state, action: PayloadAction<Status>) => {
            state.status = action.payload
        },
        changeChoice: (state, action: PayloadAction<Choice>) => {
            state.currentChoice = action.payload
        },
    },
})

export const playerReducer = playerSlice.reducer
export const { changePlayerName, changePlayerScore, changePlayerStatus, changeChoice } =
    playerSlice.actions
