import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Status = 'connected' | 'disconnected' | 'made choice'

interface IInitialState {
    name: string
    score: number
    status: Status
}

const initialState: IInitialState = {
    name: '',
    score: 0,
    status: 'disconnected',
}

const opponentSlice = createSlice({
    name: 'opponent',
    initialState,
    reducers: {
        changeOpponentName: (state, action: PayloadAction<string>) => {
            state.name = action.payload
        },
        changeOpponentScore: (state, action: PayloadAction<number>) => {
            state.score = action.payload
        },
        changeOpponentStatus: (state, action: PayloadAction<Status>) => {
            state.status = action.payload
        },
    },
})

export const opponentReducer = opponentSlice.reducer
export const { changeOpponentName, changeOpponentScore, changeOpponentStatus } =
    opponentSlice.actions
