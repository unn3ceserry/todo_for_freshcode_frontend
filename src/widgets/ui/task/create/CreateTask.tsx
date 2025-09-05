import { Button, Input } from "@/shared";
import classes from "./CreateTask.module.scss";
import { ClipboardList } from "lucide-react";
import { tasksApi } from "@/entities";
import { useState, type ChangeEvent } from "react";

const CreateTask = () => {
  const [createTask] = tasksApi.useCreateTaskMutation();
  const [deleteAllTasks] = tasksApi.useDeleteAllTasksMutation();
  const [deleteCompletedTasks] = tasksApi.useDeleteCompletedTasksMutation();

  const [value, setValue] = useState("");

  const handleCreateTask = async (content: string) => {
    if (!value.length) return;
    await createTask(content);
    setValue("");
  };

  const handleDeleteTasks = async (all: boolean) => {
    const mutation = all ? deleteAllTasks : deleteCompletedTasks;
    await mutation(undefined);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.wrapper_title}>
        <h4>New Task</h4>
        <Input
          icon={<ClipboardList />}
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
          type="text"
          placeholder="Typing here..."
        />
      </div>
      <Button onClick={() => handleCreateTask(value)}>Create new task</Button>
      <Button onClick={() => handleDeleteTasks(false)}>
        Delete completed tasks
      </Button>
      <Button onClick={() => handleDeleteTasks(true)}>Delete all tasks</Button>
    </div>
  );
};

export default CreateTask;
