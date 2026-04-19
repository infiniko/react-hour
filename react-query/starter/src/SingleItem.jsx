import { toast } from "react-toastify";
import { useEditTask, useDeleteTask } from "./reactQueryCustomHooks";

const SingleItem = ({ item }) => {
  const handleEdit = (id) => {};

  const { editMutate } = useEditTask();
  const { deleteMutate, isDeleting } = useDeleteTask();
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.isDone}
        onChange={() => editMutate({ taskId: item.id, isDone: !item.isDone })}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.isDone && "line-through",
        }}
      >
        {item.title}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        disabled={isDeleting}
        onClick={() => deleteMutate(item.id)}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
