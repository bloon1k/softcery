import { configureStore } from '@reduxjs/toolkit'
import { playerReducer, opponentReducer, resultsReducer } from '../index.ts'

export const store = configureStore({
    reducer: {
        player: playerReducer,
        opponent: opponentReducer,
        results: resultsReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
