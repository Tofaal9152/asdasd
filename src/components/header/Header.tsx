import { useNavigate } from "react-router-dom";
import {
  existsInLocalStorage,
  loadFromLocalStorage,
} from "../../utils/localStorage";
import { LuMenuSquare } from "react-icons/lu";
import { FaUserPlus } from "react-icons/fa";
import { useState } from "react";
import { RiLoginCircleLine } from "react-icons/ri";

const Header = () => {
  const [color, setColor] = useState(0);
  const navigate = useNavigate();

  //   const handleBgToggle = () => {
  //     setColor((e) => !e);
  //   };
  // bg-[#5770B652] bg-[#a9c1ff]
  return (
    <div className="md:px-[4%]">
      <div className="sticky border border-black  top-0 shadow-md   md:max-w-4xl lg:max-w-5xl p-3 px-4 md:mx-auto md:my-1.5 md:rounded-md  z-50 flex items-center justify-between">
        {/* Logo Section */}
        <div
          className="text-3xl font-bold cursor-pointer z-30 stroke-text"
          onClick={() => {
            navigate("/");
          }}
        >
          <span className="text-[#3f72df]">Salon</span>
          <span className="text-[#CA8A04]">Sync</span>
        </div>

        {/* Navigation */}
        <div>
          <div className="flex justify-center">
            <div className="flex overflow-x-auto items-center p-1 space-x-1 rtl:space-x-reverse text-sm text-gray-600 bg-[#3C5997] shadow-sm shadow-slate-200 rounded-xl ">
              {existsInLocalStorage("token") ? (
                <div>
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
                    className={`flex whitespace-nowrap text-white items-center h-8 px-3 font-medium rounded-lg outline-none ${
                      color
                        ? "bg-yellow-600 text-white transition duration-300 "
                        : "text-black transition duration-300 hover:text-gray-800"
                    } `}
                  >
                    <LuMenuSquare className="mr-2" />
                    Dashboard
                  </button>
                </div>
              ) : (
                <div>
                  <button
                    onClick={() => {
                      navigate("/login");
                    }}
                    type="button"
                    className={`flex text-white whitespace-nowrap font-semibold items-center h-8 px-2 rounded-lg outline-none ${
                      color
                        ? "bg-yellow-600 text-white transition duration-300 "
                        : "text-black transition duration-300 hover:text-gray-800"
                    } `}
                  >
                    <RiLoginCircleLine size={18} className="mr-2" />
                    Log In
                  </button>
                </div>
              )}
              <div>
                <button
                  onClick={() => {
                    navigate("/register");
                  }}
                  type="button"
                  className={`flex text-white whitespace-nowrap items-center h-8 px-3 font-medium rounded-lg outline-none ${
                    !color
                      ? "bg-yellow-600 text-white transition duration-300 "
                      : "text-black transition duration-300 hover:text-gray-800"
                  } `}
                >
                  <FaUserPlus className="mr-2" />
                  Register
                </button>
              </div>
            </div>
          </div>
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
