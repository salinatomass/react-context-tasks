import { useState, useEffect } from "react";
import { useAppContext } from "../context/GlobalContext";
import { useHistory, useParams } from "react-router-dom";

const TaskForm = () => {
  const { tasks, addTask, updateTask } = useAppContext();
  const history = useHistory();
  const params = useParams();

  const [task, setTask] = useState({
    id: "",
    title: "",
    description: "",
  });

  const handleChange = (e) =>
    setTask({ ...task, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.id) {
      updateTask(task);
    } else {
      addTask(task);
    }
    history.push("/");
  };

  useEffect(() => {
    const taskFound = tasks.find((task) => task.id === params.id);

    if (taskFound) {
      setTask(taskFound);
    }
  }, [params, tasks]);

  return (
    <div className="flex justify-center items-center h-3/4">
      <form className="bg-gray-900 p-10" onSubmit={handleSubmit}>
        <h2 className="mb-7 text-3xl">
          {task.id ? "Editing a task" : "Creating a task"}
        </h2>
        <div className="mb-5">
          <input
            type="text"
            name="title"
            value={task.title}
            placeholder="Write a title"
            className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full"
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <textarea
            name="description"
            rows="2"
            value={task.description}
            placeholder="Write a description"
            className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full"
            onChange={handleChange}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-green-600 w-full hover:bg-green-500 py-2 px-5 mt-5"
        >
          {task.id ? "Edit task" : "Create task"}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
