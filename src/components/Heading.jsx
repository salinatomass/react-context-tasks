import { Link } from "react-router-dom";
import { GrAdd } from "react-icons/gr";

const Heading = () => {
  return (
    <>
      <div className="flex item-center mb-10">
        <Link
          to="/"
          className="flex items-center text-gray-100 font-bold text-2xl"
        >
          Task App
        </Link>
        <div className="flex-grow text-right px-4 py-2 m-2">
          <Link to="/add">
            <button className="bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded inline-flex items-center">
              <GrAdd className="mr-2" />
              <span>Add Task</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Heading;
