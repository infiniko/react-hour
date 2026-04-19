import { useState } from "react";
import { useCreateTask } from "./reactQueryCustomHooks";

const Form = () => {
  const [newItemName, setNewItemName] = useState("");

  const { mutateTask, isLoading } = useCreateTask(newItemName, setNewItemName);
  const handleSubmit = (e) => {
    e.preventDefault();
    mutateTask(newItemName);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>task bud</h4>
      <div className="form-control">
        <input
          type="text "
          className="form-input"
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type="submit" className="btn" disabled={isLoading}>
          add task
        </button>
      </div>
    </form>
  );
};
export default Form;
