import { useNavigate } from "react-router-dom";
import {
  existsInLocalStorage,
  loadFromLocalStorage,
} from "../../utils/localStorage";
import { LuMenuSquare } from "react-icons/lu";
import { FaUserPlus, FaSignInAlt } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="sticky top-0  shadow-md  bg-[#a9c1ff] max-w-5xl p-2 px-4 mx-auto md:my-1.5 rounded-md shadow-blue-100 z-50 flex items-center justify-between">
      <div
        className=" text-3xl font-bold z-30 stroke-text"
        onClick={() => {
          navigate("/");
        }}
      >
        <span className="text-blue-700">Salon</span>
        <span className="text-[#CA8A04]">Sync</span>
      </div>
      <div>
        <div className="flex justify-center">
          <nav className="flex overflow-x-auto items-center p-1 space-x-1 rtl:space-x-reverse text-sm text-gray-600 bg-gray-500/5 rounded-xl dark:bg-gray-500/20">
            {existsInLocalStorage("token") ? (
              <button
                onClick={() => {
                  loadFromLocalStorage("role") === "ROLE_CUSTOMER"
                    ? navigate("/customer-dashboard")
                    : loadFromLocalStorage("role") === "ROLE_SALON"
                    ? navigate("/salon-dashboard")
                    : loadFromLocalStorage("role") === "ROLE_ADMIN"
                    ? navigate("/admin-dashboard")
                    : navigate("/");
                }}
                type="button"
                className="flex whitespace-nowrap items-center h-8 px-3 font-medium rounded-lg outline-none bg-yellow-600 text-white"
              >
                <LuMenuSquare className="mr-2" />
                Dashboard
              </button>
            ) : (
              <button
                onClick={() => {
                  navigate("/login");
                }}
                type="button"
                className="flex whitespace-nowrap items-center h-8 px-3 font-medium rounded-lg outline-none bg-yellow-600 text-white"
              >
                <FaSignInAlt className="mr-2" />
                Log In
              </button>
            )}

            <button
              onClick={() => {
                navigate("/register");
              }}
              type="button"
              className="flex whitespace-nowrap items-center h-8 px-3 font-medium rounded-lg outline-none text-black hover:text-gray-800 "
            >
              <FaUserPlus className="mr-2" />
              Register
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
// import { useNavigate } from "react-router-dom";
// import {
//   existsInLocalStorage,
//   loadFromLocalStorage,
// } from "../../utils/localStorage";
// import { LuMenuSquare } from "react-icons/lu";
// import { FaUserPlus, FaSignInAlt } from "react-icons/fa";

// const Header = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="sticky top-0 w-full shadow-md my-header mx-auto my-1.5 rounded-md shadow-blue-100 z-50">
//       {/* container */}
//       <div className="flex justify-between max-w-5xl mx-auto cursor-pointer px-4">
//         <div
//           className="text-[2rem] font-bold my-3 z-30 stroke-text"
//           onClick={() => {
//             navigate("/");
//           }}
//         >
//           <span className="text-blue-700">Salon</span>
//           <span className="text-[#d18d32]">Sync</span>
//         </div>
//         <div className="flex space-x-1 ">
//           {existsInLocalStorage("token") ? (
//             <button
//               onClick={() => {
//                 loadFromLocalStorage("role") === "ROLE_CUSTOMER"
//                   ? navigate("/customer-dashboard")
//                   : loadFromLocalStorage("role") === "ROLE_SALON"
//                   ? navigate("/salon-dashboard")
//                   : loadFromLocalStorage("role") === "ROLE_ADMIN"
//                   ? navigate("/admin-dashboard")
//                   : navigate("/");
//               }}
//               type="button"
//               className="h-[2.2rem] text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center me-2 mt-[1rem] border-gray-800 border-2"
//             >
//               <LuMenuSquare className="me-2 h-[1.2rem]" />
//               Dashboard
//             </button>
//           ) : (
//             <button
//               onClick={() => {
//                 navigate("/login");
//               }}
//               type="button"
//               className="h-[2.2rem] text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center me-2 mt-[1rem] border-gray-800 border-2"
//             >
//               <FaSignInAlt className="me-2 h-[1.2rem]" />
//               Login
//             </button>
//           )}

//           <button
//             onClick={() => {
//               navigate("/register");
//             }}
//             type="button"
//             className="h-[2.2rem] text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center me-2 mt-[1rem] border-gray-800 border-2"
//           >
//             <FaUserPlus className="me-2 h-[1.2rem]" />
//             Register
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
