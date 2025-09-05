export const enum TypeStatus {
  ACTIVE = 'Active',
  COMPLETED = 'Completed',
}
export type TaskType = {
  id: string;
  content: string;
  status: TypeStatus;
  createdAt: string,
}

export type TasksType = Array<TaskType>