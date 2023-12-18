import { configureStore } from '@reduxjs/toolkit';

import companiesReducer from './companies/companiesSlice';
import employeesReducer from './employees/employeesSlice';

const store = configureStore({
  reducer: {
    companies: companiesReducer,
    employees: employeesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
