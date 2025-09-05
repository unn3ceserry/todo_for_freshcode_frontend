import type { FC } from "react";
import classes from "./TaskComponent.module.scss";
import { Button } from "@/shared";
import type { TypeStatus } from "../model";
import { tasksApi } from "../api";

export interface ITaskComponent {
  name: string;
  createdAt: string;
  status: TypeStatus;
  id: string;
}

const TaskComponent: FC<ITaskComponent> = ({createdAt, name, status, id}) => {

  const [deleteTask] = tasksApi.useDeleteTaskMutation()
  const [setCompletedTask] = tasksApi.useCompletedTaskMutation()
  
  const handleDelete = async (id: string) => {
    await deleteTask(id)
  }

  const handleSetCompleted = async (id: string) => {
    const res = await setCompletedTask(id)
    console.log(res)
  }

  return (
    <div className={classes.wrapper}>
      
      {/* about task */}
      <div className={classes.wrapper_info}>
        <p>{name}</p>
        {/* desc */}
        <div className={classes.wrapper_description}>
          <p className={classes.data}>Creation date: {new Date(createdAt).toLocaleDateString('ru')}</p>
          <p className={classes.status}>Status: <span>{status}</span></p>
        </div>
      </div>

      {/* actions */}
      <div className={classes.wrapper_actions}>
        <Button onClick={() => handleSetCompleted(id)}>Completed</Button>
        <Button onClick={() => handleDelete(id)}>Delete</Button>
      </div>
    </div>
  );
};
export default TaskComponent;
