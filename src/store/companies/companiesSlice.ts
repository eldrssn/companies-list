import { mockCompanies } from '@/mockData';
import { createSlice } from '@reduxjs/toolkit';

const companySlice = createSlice({
  name: 'companies',
  initialState: mockCompanies,
  reducers: {
    addCompany: (state, action) => {
      const { name, address } = action.payload;
      const newCompany = {
        id: state.length + 1,
        name: name,
        address: address,
        employees: [],
      };
      return [...state, newCompany];
    },
    editCompany: (state, action) => {
      const { id, name, address } = action.payload;
      return state.map((company) =>
        company.id === id ? { ...company, name, address } : company
      );
    },
    deleteCompanies: (state, action) => {
      const selectedIds = action.payload;
      return state.filter((item) => !selectedIds.includes(item.id));
    },
    deleteEmployeesFromCompany: (state, action) => {
      const { companyId, employeeIds } = action.payload;

      return state.map((company) => {
        if (company.id === companyId) {
          return {
            ...company,
            employees: company.employees.filter(
              (employee) => !employeeIds.includes(employee.id)
            ),
          };
        } else {
          return company;
        }
      });
    },

    editEmployeeInCompany: (state, action) => {
      const { companyId, newData } = action.payload;

      return state.map((company) => {
        if (company.id === companyId) {
          return {
            ...company,
            employees: company.employees.map((employee) =>
              employee.id === newData.id ? newData : employee
            ),
          };
        } else {
          return company;
        }
      });
    },

    addEmployeeInCompany: (state, action) => {
      const { companyId, newData } = action.payload;

      return state.map((company) => {
        if (company.id === companyId) {
          return {
            ...company,
            employees: [
              ...company.employees,
              { id: company.employees.length + 1, ...newData },
            ],
          };
        } else {
          return company;
        }
      });
    },
  },
});

export const {
  deleteCompanies,
  deleteEmployeesFromCompany,
  addCompany,
  editCompany,
  editEmployeeInCompany,
  addEmployeeInCompany,
} = companySlice.actions;
export default companySlice.reducer;
