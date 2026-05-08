import { useEffect, useState } from "react";
import { Task } from "./types";
import Form from "./Form";
import List from "./List";

function loadTasks(): Task[] {
  const storedTasks = localStorage.getItem("tasks");
  return storedTasks ? JSON.parse(storedTasks) : [];
}

function updateStorage(tasks: Task[]): void {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function Component() {
  const [tasks, setTasks] = useState<Task[]>(() => loadTasks());

  useEffect(() => {
    updateStorage(tasks);
  }, [tasks]);
  const addTask = (task: Task): void => {
    setTasks([...tasks, task]);
  };
  const toggleTask = (id: string): void => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        } else {
          return task;
        }
      }),
    );
  };
  return (
    <section>
      <Form addTask={addTask} />
      <List tasks={tasks} toggleTask={toggleTask}></List>
    </section>
  );
}
export default Component;
