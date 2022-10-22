import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from './redux/index.ts'

export const useTypedSelector: TypedUseSelectorHook<typeof RootState> = useSelector
export const useTypedDispatch = () => useDispatch<typeof AppDispatch>()
