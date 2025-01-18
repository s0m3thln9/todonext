import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { listsSlice } from '@/entities/list'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

const mainReducer = combineReducers({
  [listsSlice.name]: listsSlice.reducer,
})

export const mainStore = configureStore({
  reducer: mainReducer,
})

export type AppState = ReturnType<typeof mainStore.getState>
export type AppDispatch = typeof mainStore.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
