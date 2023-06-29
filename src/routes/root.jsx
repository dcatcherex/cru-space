import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const root = () => {
  return (
    <div>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <h1>Kru Space</h1>
        </Link>

        <Link
          to="/create-post"
          className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
        >
          Create
        </Link>
      </header>

      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Outlet />
      </main>
    </div>
  );
};

export default root;
