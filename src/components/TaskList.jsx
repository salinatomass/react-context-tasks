import { useAppContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";

const TaskList = () => {
  const { tasks, removeTask, toggleTaskDone } = useAppContext();

  if (tasks.length === 0) {
    return <h1 className="text-4xl">Empty task list</h1>;
  }

  return (
    <div className="flex justify-center">
      <div className="w-6/12">
        {tasks.map((task) => (
          <div
            className="bg-gray-900 px-20 py-5 text-white shadow-2x1 mb-4 flex justify-between"
            key={task.id}
          >
            <div>
              <h1 className="text-2xl mb-2">{task.title}</h1>
              <p className="mb-2">{task.description}</p>

              <button
                className="bg-purple-600 hover:bg-purple-500 py-1 px-3 mt-2"
                onClick={() => toggleTaskDone(task.id)}
              >
                {task.done ? "Undone" : "Done"}
              </button>
            </div>
            <div className="">
              <Link
                to={`/edit/${task.id}`}
                className="inline-block bg-gray-600 hover:bg-gray-500 py-2 px-4 mr-2"
              >
                Edit
              </Link>
              <button
                className="inline-block bg-red-600 hover:bg-red-500 py-2 px-4"
                onClick={() => removeTask(task.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
