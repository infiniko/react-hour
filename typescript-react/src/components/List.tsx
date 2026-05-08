import { Task } from "./types";

type ListProps = {
  tasks: Task[];
  toggleTask: (id: string) => void;
};

const List = ({ tasks, toggleTask }: ListProps) => {
  return (
    <ul className="list">
      {tasks.map((task) => {
        return (
          <li key={task.id}>
            <p className="task-text"> {task.description} </p>
            <input
              type="checkbox"
              checked={task.isCompleted}
              onChange={() => toggleTask(task.id)}
            ></input>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
