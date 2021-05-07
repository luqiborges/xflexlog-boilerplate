import { combineReducers } from '@reduxjs/toolkit';

import teste from './teste/slice';

const rootReducer = combineReducers({ teste });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
