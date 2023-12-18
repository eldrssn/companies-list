export interface ITask {
  id: string;
  title: string;
  completed: boolean;
}

export type TList = ITask[];

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  position: string;
}

export interface Company {
  id: number;
  name: string;
  address: string;
  employees: Employee[];
}
