import { appActions } from "./appActions";

export const intialState = {
  tasks: [],
};

export const appReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case appActions.ADD_TASK:
      return { ...state, tasks: [...state.tasks, payload] };

    case appActions.REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case appActions.UPDATE_TASK: {
      const updatedTasks = state.tasks.map((task) => {
        if (task.id === payload.id) {
          task.title = payload.title;
          task.description = payload.description;
        }

        return task;
      });

      return { ...state, tasks: updatedTasks };
    }

    case appActions.TOGGLE_TASK_DONE: {
      const updatedTasks = state.tasks.map((task) =>
        task.id === payload ? { ...task, done: !task.done } : task
      );

      return { ...state, tasks: updatedTasks };
    }

    case appActions.DELETE_TASKS:
      return { ...state, tasks: [] };

    default:
      return state;
  }
};
