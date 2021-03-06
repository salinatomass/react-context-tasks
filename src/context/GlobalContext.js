import { createContext, useContext, useEffect, useReducer } from "react";
import { appReducer, initializer, initialState } from "./appReducer";
import { appActions } from "./appActions";
import { v4 as uuid } from "uuid";

const GlobalContext = createContext(initialState);

export const useAppContext = () => {
  const context = useContext(GlobalContext);
  if (!context)
    throw new Error("useAppContext must be used within a ContextProvider");
  return context;
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState, initializer);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state));
  }, [state]);

  const addTask = (task) =>
    dispatch({ type: appActions.ADD_TASK, payload: { ...task, id: uuid() } });

  const removeTask = (id) =>
    dispatch({ type: appActions.REMOVE_TASK, payload: id });

  const updateTask = (task) =>
    dispatch({ type: appActions.UPDATE_TASK, payload: task });

  const deleteTasks = () => dispatch({ type: appActions.DELETE_TASKS });

  const toggleTaskDone = (id) =>
    dispatch({ type: appActions.TOGGLE_TASK_DONE, payload: id });

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        addTask,
        removeTask,
        updateTask,
        deleteTasks,
        toggleTaskDone,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
