import { configureStore } from '@reduxjs/toolkit'

import campaignsReducer from '../features/campaigns'

export default configureStore({
    reducer: {
        campaigns: campaignsReducer,
    },
})