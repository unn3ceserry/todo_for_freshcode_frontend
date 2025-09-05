import CreateTask from "./create/CreateTask";
import classes from "./Task.module.scss";
import TaskComponent from "@/entities/tasks/ui/TaskComponent";
import { tasksApi } from "@/entities";
import { Loader } from "@/shared";

const Task = () => {

  const {data: dataTestTask, isLoading} = tasksApi.useGetAllTasksQuery()

  return (
    <div className={classes.wrapper_tasks}>
      <div className={classes.circle}></div>

      <div className={classes.wrapper}>
        {/* title */}
        <div className={classes.wrapper_title}>
          <h1>Create tasks for yourself every day</h1>
          <hr className={classes.line} />
        </div>

        {/* new task creator */}
        <CreateTask />

        <div className={classes.wrapper_title_and_task}>
          <h3>Your tasks:</h3>

          {/* wrapper tasks */}
          {
            (isLoading || !dataTestTask) ? <Loader text="Loading data tasks" /> :
            <div className={classes.wrapper_task}>
            {dataTestTask.length ? (
              dataTestTask.map((task) => (
                <TaskComponent
                  createdAt={task.createdAt}
                  name={task.content}
                  id={task.id}
                  status={task.status}
                  key={task.id}
                />
              ))
            ) : (
              <div style={{opacity: '.7', fontSize: '.9rem'}}>Your task list is empty. Create a new task to appear in this list.</div>
            )}
          </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Task;
