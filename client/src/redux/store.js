import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import userSlice from './reduceSlice/userSlice';

export default configureStore({
    reducer: {
      user: userSlice
    },
    middleware: ()=>[logger]
  });