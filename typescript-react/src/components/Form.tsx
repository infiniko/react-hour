import { ChangeEvent, useState } from "react"
import { Task } from "./types";

type FormProps = {
    addTask: (task: Task) => void;
}
const Form = ({addTask}: FormProps) => {
    const [query,setQuery] = useState<string>("");

    const handleQuery = (e:ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!query){
            alert('please enter a task')
            return;
        }
        let newTask: Task = { id: Date.now().toString(), description: query, isCompleted: false}
        addTask(newTask);
        setQuery('');
    }
  return (
    <form className="form task-form" onSubmit={handleSubmit}>
        <input type="text" className="form-input" value={query} onChange={handleQuery} />
        <button type="submit" className="btn">Add task</button>
    </form>
  )
}

export default Form