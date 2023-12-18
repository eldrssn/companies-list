import { Company } from '@/models';

// Моковые данные для компаний
export const mockCompanies: Company[] = [
  {
    id: 1,
    name: 'ABC Corporation',
    employees: Array.from({ length: 10 }, (_, index) => ({
      id: index + 1,
      firstName: `Employee${index + 1}`,
      lastName: 'Lastname',
      position: 'Developer',
    })),
    address: '123 Main St, City1',
  },
  {
    id: 2,
    name: 'XYZ Tech Solutions',
    employees: Array.from({ length: 10 }, (_, index) => ({
      id: index + 11,
      firstName: `Employee${index + 11}`,
      lastName: 'Lastname',
      position: 'Designer',
    })),
    address: '456 Tech Blvd, City2',
  },
  {
    id: 3,
    name: 'Global Innovators Inc.',
    employees: Array.from({ length: 10 }, (_, index) => ({
      id: index + 21,
      firstName: `Employee${index + 21}`,
      lastName: 'Lastname',
      position: 'Manager',
    })),
    address: '789 Innovation Ave, City3',
  },
  {
    id: 4,
    name: 'Data Dynamics Ltd.',
    employees: Array.from({ length: 10 }, (_, index) => ({
      id: index + 31,
      firstName: `Employee${index + 31}`,
      lastName: 'Lastname',
      position: 'Data Analyst',
    })),
    address: '101 Data Street, City4',
  },
  {
    id: 5,
    name: 'Software Solutions Co.',
    employees: Array.from({ length: 10 }, (_, index) => ({
      id: index + 41,
      firstName: `Employee${index + 41}`,
      lastName: 'Lastname',
      position: 'Software Engineer',
    })),
    address: '202 Code Lane, City5',
  },
  {
    id: 6,
    name: 'EcoGreen Innovations',
    employees: Array.from({ length: 10 }, (_, index) => ({
      id: index + 51,
      firstName: `Employee${index + 51}`,
      lastName: 'Lastname',
      position: 'Environmental Scientist',
    })),
    address: '303 Green Avenue, City6',
  },
  {
    id: 7,
    name: 'Healthcare Hub Ltd.',
    employees: Array.from({ length: 10 }, (_, index) => ({
      id: index + 61,
      firstName: `Employee${index + 61}`,
      lastName: 'Lastname',
      position: 'Medical Doctor',
    })),
    address: '404 Health Plaza, City7',
  },
  {
    id: 8,
    name: 'Infinite Innovations Inc.',
    employees: Array.from({ length: 10 }, (_, index) => ({
      id: index + 71,
      firstName: `Employee${index + 71}`,
      lastName: 'Lastname',
      position: 'Innovation Strategist',
    })),
    address: '505 Innovation Street, City8',
  },
  {
    id: 9,
    name: 'Financial Wizards LLC',
    employees: Array.from({ length: 10 }, (_, index) => ({
      id: index + 81,
      firstName: `Employee${index + 81}`,
      lastName: 'Lastname',
      position: 'Financial Analyst',
    })),
    address: '606 Finance Road, City9',
  },
  {
    id: 10,
    name: 'Future Tech Trends Co.',
    employees: Array.from({ length: 10 }, (_, index) => ({
      id: index + 91,
      firstName: `Employee${index + 91}`,
      lastName: 'Lastname',
      position: 'Technology Futurist',
    })),
    address: '707 Future Lane, City10',
  },
  {
    id: 11,
    name: 'ABC Corporation',
    employees: Array.from({ length: 10 }, (_, index) => ({
      id: index + 1,
      firstName: `Employee${index + 1}`,
      lastName: 'Lastname',
      position: 'Developer',
    })),
    address: '123 Main St, City1',
  },
  {
    id: 12,
    name: 'XYZ Tech Solutions',
    employees: Array.from({ length: 10 }, (_, index) => ({
      id: index + 11,
      firstName: `Employee${index + 11}`,
      lastName: 'Lastname',
      position: 'Designer',
    })),
    address: '456 Tech Blvd, City2',
  },
  {
    id: 13,
    name: 'Global Innovators Inc.',
    employees: Array.from({ length: 10 }, (_, index) => ({
      id: index + 21,
      firstName: `Employee${index + 21}`,
      lastName: 'Lastname',
      position: 'Manager',
    })),
    address: '789 Innovation Ave, City3',
  },
  {
    id: 14,
    name: 'Data Dynamics Ltd.',
    employees: Array.from({ length: 10 }, (_, index) => ({
      id: index + 31,
      firstName: `Employee${index + 31}`,
      lastName: 'Lastname',
      position: 'Data Analyst',
    })),
    address: '101 Data Street, City4',
  },
  {
    id: 15,
    name: 'Software Solutions Co.',
    employees: Array.from({ length: 10 }, (_, index) => ({
      id: index + 41,
      firstName: `Employee${index + 41}`,
      lastName: 'Lastname',
      position: 'Software Engineer',
    })),
    address: '202 Code Lane, City5',
  },
  {
    id: 16,
    name: 'EcoGreen Innovations',
    employees: Array.from({ length: 10 }, (_, index) => ({
      id: index + 51,
      firstName: `Employee${index + 51}`,
      lastName: 'Lastname',
      position: 'Environmental Scientist',
    })),
    address: '303 Green Avenue, City6',
  },
  {
    id: 17,
    name: 'Healthcare Hub Ltd.',
    employees: Array.from({ length: 10 }, (_, index) => ({
      id: index + 61,
      firstName: `Employee${index + 61}`,
      lastName: 'Lastname',
      position: 'Medical Doctor',
    })),
    address: '404 Health Plaza, City7',
  },
  {
    id: 18,
    name: 'Infinite Innovations Inc.',
    employees: Array.from({ length: 10 }, (_, index) => ({
      id: index + 71,
      firstName: `Employee${index + 71}`,
      lastName: 'Lastname',
      position: 'Innovation Strategist',
    })),
    address: '505 Innovation Street, City8',
  },
  {
    id: 19,
    name: 'Financial Wizards LLC',
    employees: Array.from({ length: 10 }, (_, index) => ({
      id: index + 81,
      firstName: `Employee${index + 81}`,
      lastName: 'Lastname',
      position: 'Financial Analyst',
    })),
    address: '606 Finance Road, City9',
  },
  {
    id: 20,
    name: 'Future Tech Trends Co.',
    employees: Array.from({ length: 10 }, (_, index) => ({
      id: index + 91,
      firstName: `Employee${index + 91}`,
      lastName: 'Lastname',
      position: 'Technology Futurist',
    })),
    address: '707 Future Lane, City10',
  },
];
