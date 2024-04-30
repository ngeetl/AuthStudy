import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { FLUSH, PAUSE, PERSIST, REHYDRATE, persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage' // defaults to localStorage for web
import userReducer from './userSlice'
import persistStore from 'redux-persist/es/persistStore';

const persistConfig = {
  key: 'user',
  storage: storageSession,
  debug: true,
  whitelist: ["user"], 
};

const rootReducer = combineReducers({
  user: userReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;




