import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import campaignsReducer from '../features/campaignSlice'
import searchReducer from '../features/searchSlice'

export default configureStore({
    reducer: {
        campaigns: campaignsReducer,
        search: searchReducer 
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})