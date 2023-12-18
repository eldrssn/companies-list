import { Employee } from '@/models';
import { createSlice } from '@reduxjs/toolkit';

const employeeSlice = createSlice({
  name: 'employees',
  initialState: [] as Employee[],
  reducers: {
    addEmployees: (_, action) => {
      return action.payload;
    },
    deleteEmployeers: (state, action) => {
      const selectedIds = action.payload;

      return state.filter((item) => !selectedIds.includes(item.id));
    },
    resetEmployees: () => {
      return [];
    },
    editEmployee: (state, action) => {
      const { id, firstName, lastName, position } = action.payload;
      return state.map((employee) =>
        employee.id === id
          ? { ...employee, firstName, lastName, position }
          : employee
      );
    },
    addEmployee: (state, action) => {
      const newData = action.payload;
      state.push({ id: state.length + 1, ...newData });
      return state;
    },
  },
});

export const {
  addEmployees,
  deleteEmployeers,
  resetEmployees,
  editEmployee,
  addEmployee,
} = employeeSlice.actions;
export default employeeSlice.reducer;
