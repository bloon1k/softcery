import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IInitialState {
    message: string
    showModal: boolean
}

const initialState: IInitialState = {
    message: '',
    showModal: false,
}

const resultsSlice = createSlice({
    name: 'results',
    initialState,
    reducers: {
        changeShowModal: (state, action: PayloadAction<boolean>) => {
            state.showModal = action.payload
        },
        changeMessage: (state, action: PayloadAction<string>) => {
            state.message = action.payload
        },
    },
})

export const resultsReducer = resultsSlice.reducer
export const { changeShowModal, changeMessage } = resultsSlice.actions
