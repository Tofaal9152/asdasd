import Header from "../../components/header/Header";
import NavigationBar from "../../components/navigationMenu/NavigationMenu";
import { RiLoginCircleLine } from "react-icons/ri";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { removeFromLocalStorage } from "../../utils/localStorage";
import SalonInfo from "./salonInfo";
import BarberInfo from "./barberInfo";
import SalonAppointments from "./appointments";
import { MdInsertComment } from "react-icons/md";
import { PiCallBellBold } from "react-icons/pi";
import { RiInformation2Line } from "react-icons/ri";
import { Reviews } from "./reviews";
import { RiMenu2Fill } from "react-icons/ri";
import bg from "../../assets/logRegBG.svg";
export function MainDashboard() {
  const [pageIndex, setPageIndex] = useState(0);
  const [toggle, settoggle] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Logout functionality
    if (pageIndex == 4) {
      removeFromLocalStorage("token");
      removeFromLocalStorage("role");
      removeFromLocalStorage("id");
      navigate("/");
    }
  }, [pageIndex]);

  return (
    <>
      <Header />
      <div className="md:px-[4%]">
        <div className="relative w-full max-w-full md:max-w-6xl mx-auto">
          <div className="flex items-start justify-center space-x-0 md:space-x-4">
            {/* mobile */}
            <div
              className={`${
                toggle
                  ? "absolute left-0 translate-x-0 duration-300 ease-in-out z-50"
                  : "left-[-100rem] absolute -translate-x-full duration-300  ease-in-out"
              } bg-[#F6EAE0] md:bg-transparent`}
            >
              <span
                onClick={() => settoggle((e) => !e)}
                className="m-2 ml-4 p-2 md:hidden block w-fit cursor-pointer bg-[#3C5997] rounded-full shadow-lg z-50 text-white font-bold transition duration-300 ease-in-out"
              >
                <RiMenu2Fill size={18} />
              </span>
              <div onClick={() => settoggle(false)}>
                <NavigationBar
                  navMenuContents={[
                    {
                      title: "Salon Info",
                      icon: <FaArrowAltCircleRight className="w-6 h-6" />,
                    },
                    {
                      title: "Barber Info",
                      icon: <RiInformation2Line className="w-6 h-6" />,
                    },
                    {
                      title: "Appointments",
                      icon: <PiCallBellBold className="w-6 h-6" />,
                    },
                    {
                      title: "Reviews",
                      icon: <MdInsertComment className="w-6 h-6" />,
                    },
                    {
                      title: "Logout",
                      icon: <RiLoginCircleLine className="w-6 h-6" />,
                    },
                  ]}
                  setIndex={setPageIndex}
                  index={pageIndex}
                />
              </div>
            </div>
            {/* pc */}
            <div className="md:block hidden">
              <NavigationBar
                navMenuContents={[
                  {
                    title: "Salon Info",
                    icon: <FaArrowAltCircleRight className="w-6 h-6" />,
                  },
                  {
                    title: "Barber Info",
                    icon: <RiInformation2Line className="w-6 h-6" />,
                  },
                  {
                    title: "Appointments",
                    icon: <PiCallBellBold className="w-6 h-6" />,
                  },
                  {
                    title: "Reviews",
                    icon: <MdInsertComment className="w-6 h-6" />,
                  },
                  {
                    title: "Logout",
                    icon: <RiLoginCircleLine className="w-6 h-6" />,
                  },
                ]}
                setIndex={setPageIndex}
                index={pageIndex}
              />
            </div>

            {/* Content Area */}
            <div
              className="md:h-[86vh] h-screen w-full flex-1 md:border-[#272727a2] md:border-2 md:rounded-xl relative md:mt-4"
              style={{
                background: `url(${bg})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
              }}
            >
              <div
                className="glass-bg flex-1 h-full overflow-y-scroll no-scrollbar"
                style={{
                  backgroundColor: "#aac1ff21",
                }}
              >
                {/* Toggle Button for Mobile */}
                <span
                  onClick={() => settoggle((e) => !e)}
                  className="absolute top-2 left-2 p-2 md:hidden block cursor-pointer bg-[#3C5997] rounded-full shadow-lg z-50 text-white font-bold transition duration-300 ease-in-out"
                >
                  <RiMenu2Fill size={18} />
                </span>

                {/* Conditional Rendering of Content */}
                {pageIndex == 0 ? (
                  <SalonInfo />
                ) : pageIndex == 1 ? (
                  <BarberInfo />
                ) : pageIndex == 2 ? (
                  <SalonAppointments />
                ) : pageIndex == 3 ? (
                  <Reviews />
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// import Header from "../../components/header/Header";
// import NavigationBar from "../../components/navigationMenu/NavigationMenu";
// import { RiLoginCircleLine } from "react-icons/ri";
// import { FaArrowAltCircleRight } from "react-icons/fa";
// import { useEffect, useState } from "react";
// import bg from "../../assets/logRegBG.svg";
// import { useNavigate } from "react-router-dom";
// import { removeFromLocalStorage } from "../../utils/localStorage";
// import SalonInfo from "./salonInfo";
// import BarberInfo from "./barberInfo";
// import SalonAppointments from "./appointments";
// import { MdInsertComment } from "react-icons/md";
// import { PiCallBellBold } from "react-icons/pi";
// import { RiInformation2Line } from "react-icons/ri";
// import { Reviews } from "./reviews";
// import { RiMenu2Fill } from "react-icons/ri";

// export function MainDashboard() {
//   const [pageIndex, setPageIndex] = useState(0);
//   const [toggle, settoggle] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // logout
//     if (pageIndex == 4) {
//       removeFromLocalStorage("token");
//       removeFromLocalStorage("role");
//       removeFromLocalStorage("id");
//       navigate("/");
//     }
//   }, [pageIndex]);

//   return (
//     <>
//       <Header />
//       <div className="relative w-full  md:max-w-6xl mx-auto">
//         <div className="flex items-center justify-center md:space-x-4">
//           <div className={`${toggle?"":"hidden"} md:block`}>
//             <NavigationBar
//               navMenuContents={[
//                 {
//                   title: "Salon Info",
//                   icon: <FaArrowAltCircleRight className="w-6 h-6" />,
//                 },
//                 {
//                   title: "Barber Info",
//                   icon: <RiInformation2Line className="w-6 h-6" />,
//                 },
//                 {
//                   title: "Appointments",
//                   icon: <PiCallBellBold className="w-6 h-6" />,
//                 },
//                 {
//                   title: "Reviews",
//                   icon: <MdInsertComment className="w-6 h-6" />,
//                 },
//                 {
//                   title: "Logout",
//                   icon: <RiLoginCircleLine className="w-6 h-6" />,
//                 },
//               ]}
//               setIndex={setPageIndex}
//               index={pageIndex}
//             />
//           </div>

//           <div
//             className="h-[86vh] flex-1 border-[#272727a2] border-2 rounded-xl relative mt-4"
// style={{
//   background: `url(${bg})`,
//   backgroundSize: "contain",
//   backgroundPosition: "center",
// }}
//           >
//             {/* Container */}
//             <div
//               className="glass-bg flex-1 h-full overflow-y-scroll no-scrollbar"
//               style={{
//                 backgroundColor: "#aac1ff21",
//               }}
//             >
//               <span
//                 onClick={() => settoggle((e) => !e)}
//                 className="absolute top-2 left-2 p-2 md:hidden block cursor-pointer bg-[#3C5997] rounded-full shadow-lg text-white font-bold transition duration-300 ease-in-out"
//               >
//                 <RiMenu2Fill size={18} />
//               </span>
//               {pageIndex == 0 ? (
//                 <SalonInfo />
//               ) : pageIndex == 1 ? (
//                 <BarberInfo />
//               ) : pageIndex == 2 ? (
//                 <SalonAppointments />
//               ) : pageIndex == 3 ? (
//                 <Reviews />
//               ) : (
//                 <></>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
