import SecureStoreStorage from './storage'
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import {authReducer} from "./auth.slice";

const authPersistConfig = {
    key: 'root',
    storage: SecureStoreStorage,
    whitelist: ['auth']
}

const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, authReducer)
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({serializableCheck: false}),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;