import { useState } from "react";
import { stages } from "./data";

function App() {
  const [columns, setColumns] = useState(stages);

  const [newTask, setNewTask] = useState("");
  const [draggedItem, setDragedItem] = useState(null);

  //add or remove tasks
  const addNewTask = () => {
    if (!newTask.trim()) return;

    const updatedCols = { ...columns };
    updatedCols["todo"].items.push({ id: Date.now(), content: newTask });
    setColumns(updatedCols);
    setNewTask("");
  };

  const removeTask = (columnId, taskId) => {
    const updatedCols = { ...columns };
    updatedCols[columnId].items = updatedCols[columnId].items.filter(
      (item) => item.id !== taskId,
    );
    setColumns(updatedCols);
  };

  //drag & drop fns
  const handleDragStart = (columnId, item) => {
    setDragedItem({ columnId, item });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, columnId) => {
    e.preventDefault();

    if (!draggedItem) return;
    const { columnId: sourceColumnId, item } = draggedItem;

    if (sourceColumnId === columnId) return;

    const updatedCols = { ...columns };
    updatedCols[sourceColumnId].items = updatedCols[
      sourceColumnId
    ].items.filter((i) => i.id !== item.id);
    updatedCols[columnId].items.push(item);
    setColumns(updatedCols);
    setDragedItem(null);
  };

  const columnStyles = {
    todo: {
      header: "bg-gradient-to-r from-blue-600 to-blue-400",
      border: "border-blue-400",
    },
    inProgress: {
      header: "bg-gradient-to-r from-yellow-600 to-yellow-400",
      border: "border-yellow-400",
    },
    testing: {
      header: "bg-gradient-to-r from-emerald-600 to-emerald-400",
      border: "border-emerald-400",
    },
    resolved: {
      header: "bg-gradient-to-r from-green-600 to-green-400",
      border: "border-green-400",
    },
  };
  console.log(columns);
  console.log(Object.keys(columns));
  return (
    <>
      <div className="p-6 w-full min-h-screen bg-linear-to-b from-zinc-900 to-zinc-800 flex items-center justify-center">
        <div className="flex items-center justify-center flex-col gap-4 w-full max-w-6xl">
          <h1 className="text-6xl font-bold mb-8 text-transparent bg-clip-text bg-linear-to-r from-yellow-400 via-amber-500 to-rose-400">
            Kanban board
          </h1>
          <div className="mb-8 flex w-full max-w-lg shadow-lg rounded-lg overflow-hidden">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="add a new task..."
              className="grow p-3 bg-zinc-700 text-white"
              onKeyDown={(e) => e.key === "Enter" && addNewTask()}
            />
            <button
              onClick={addNewTask}
              className="px-6 bg-linear-to-r from-yellow-600 to-amber-500 text-white font-medium hover:from-yellow-500 hover:to-amber-500 transition-all duration-200 cursor-pointer"
            >
              Add
            </button>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-6">
            {Object.keys(columns).map((columnId) => (
              <div
                key={columnId}
                className={`shrink-0 w-80 bg-zinc-800 rounded-lg shadow-xl border-t-4 ${columnStyles[columnId.border]}`}
                onDragOver={(e) => handleDragOver(e, columnId)}
                onDrop={(e) => handleDrop(e, columnId)}
              >
                <div
                  className={`p-4 text-white font-bold text-xl rounded-t-md ${columnStyles[columnId].header}`}
                >
                  {columns[columnId].name}
                  <span className="ml-2 px-2 py-1 bg-zinc-800 backdrop-opacity-30 rounded-full text-sm">
                    {columns[columnId].items.length}
                  </span>
                </div>

                <div className="p-3 min-h-80">
                  {columns[columnId].items.length === 0 ? (
                    <div className="text-center py-10 text-zinc-500 italic text-sm">
                      Drop tasks here
                    </div>
                  ) : (
                    columns[columnId].items.map((item) => (
                      <div
                        key={item.id}
                        className="p-4 mb-3 bg-zin-700 text-white rounded-lg shadow-md cursor-move flex items-center justify-between transform transition-all duration-200 hover:scale-105 hover:shadow-lg"
                        draggable
                        onDragStart={() => handleDragStart(columnId, item)}
                      >
                        <span className="mr-2">{item.content}</span>
                        <button
                          onClick={() => removeTask(columnId, item.id)}
                          className="text-zinc-400 hover:text-red-400 transition-colors duration-200 w-6 h-6 flex items-center justify-center rounded-full hover:bg-zinc-600"
                        >
                          <span className="text-lg cursor-pointer">x</span>
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
