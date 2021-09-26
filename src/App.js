import { Route, Switch } from "react-router-dom";

import { ContextProvider } from "./context/GlobalContext";

import Heading from "./components/Heading";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <div className="h-screen text-white p-10">
      <div className="container mx-auto h-full">
        <ContextProvider>
          <Heading />
          <Switch>
            <Route path="/" exact component={TaskList} />
            <Route path="/add" component={TaskForm} />
            <Route path="/edit/:id" component={TaskForm} />
          </Switch>
        </ContextProvider>
      </div>
    </div>
  );
}

export default App;
