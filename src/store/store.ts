import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authApi } from './Api/AuthApi'
import { footballApi } from './Api/FootballApi';
import userSlice from '../store/userSlice'
import { 
    persistStore, 
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
    user: userSlice,
    [authApi.reducerPath]: authApi.reducer,
    [footballApi.reducerPath]: footballApi.reducer,
})

const persistConfig = {
    key: "root",
    storage,
    whitelish:['api']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({

    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                
            },
}).concat([authApi.middleware, footballApi.middleware]),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store)