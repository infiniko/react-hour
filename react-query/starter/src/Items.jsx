import SingleItem from "./SingleItem";
import { useFetchTasks } from "./reactQueryCustomHooks";
const Items = () => {
  const { isLoading, data, isError, error } = useFetchTasks();

  if (isLoading) {
    return <p style={{ marginTop: "1rem" }}>data is loading...</p>;
  }

  if (isError) {
    return <p>there was an error...</p>;
  }
  return (
    <div className="items">
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
