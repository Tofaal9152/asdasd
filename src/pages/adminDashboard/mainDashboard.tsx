import Header from "../../components/header/Header";
import NavigationBar from "../../components/navigationMenu/NavigationMenu";
import { RiLoginCircleLine, RiMenu2Fill } from "react-icons/ri";
import { useEffect, useState } from "react";
import bg from "../../assets/logRegBG.svg";
import { useNavigate } from "react-router-dom";
import { removeFromLocalStorage } from "../../utils/localStorage";
import ManageSalons from "./manageSalons";
import ManageCustomer from "./manageCustomer";
import { BsShop } from "react-icons/bs";
import { IoPeopleCircleOutline } from "react-icons/io5";

export function MainDashboard() {
  const [pageIndex, setPageIndex] = useState(0);
  const navigate = useNavigate();
  const [toggle, settoggle] = useState(false);
  console.log(toggle);

  useEffect(() => {
    // logout
    if (pageIndex == 3) {
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
                    title: "Manage Salons",
                    icon: <BsShop className="w-6 h-6" />,
                  },
                  {
                    title: "Manage Customers",
                    icon: <IoPeopleCircleOutline className="w-6 h-6" />,
                  },
                  {
                    title: "Appointments",
                    icon: <RiLoginCircleLine className="w-6 h-6" />,
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
                    title: "Manage Salons",
                    icon: <BsShop className="w-6 h-6" />,
                  },
                  {
                    title: "Manage Customers",
                    icon: <IoPeopleCircleOutline className="w-6 h-6" />,
                  },
                  {
                    title: "Appointments",
                    icon: <RiLoginCircleLine className="w-6 h-6" />,
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
            <div
              className="md:h-[86vh] h-screen w-full flex-1 md:border-[#272727a2] md:border-2 md:rounded-xl relative md:mt-4"
              style={{
                background: `url(${bg})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
              }}
            >
              {/* Container */}
              <div
                className="glass-bg flex-1 h-full overflow-y-scroll no-scrollbar"
                style={{
                  backgroundColor: "#aac1ff21",
                }}
              >
                <span
                  onClick={() => settoggle((e) => !e)}
                  className="absolute top-2 left-2 p-2 md:hidden block cursor-pointer bg-[#3C5997] rounded-full shadow-lg z-50 text-white font-bold transition duration-300 ease-in-out"
                >
                  <RiMenu2Fill size={18} />
                </span>
                {pageIndex == 0 ? (
                  <ManageSalons />
                ) : pageIndex == 1 ? (
                  <ManageCustomer />
                ) : (
                  // pageIndex == 2 ?
                  //     <SalonAppointments /> :
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
// import { useEffect, useState } from "react";
// import bg from "../../assets/logRegBG.svg";
// import { useNavigate } from "react-router-dom";
// import { removeFromLocalStorage } from "../../utils/localStorage";
// import ManageSalons from "./manageSalons";
// import ManageCustomer from "./manageCustomer";
// import { BsShop } from "react-icons/bs";
// import { IoPeopleCircleOutline } from "react-icons/io5";

// export function MainDashboard() {
//   const [pageIndex, setPageIndex] = useState(0);
//   const navigate = useNavigate();
//   const [toggle, settoggle] = useState(false);

//   useEffect(() => {
//     // logout
//     if (pageIndex == 3) {
//       removeFromLocalStorage("token");
//       removeFromLocalStorage("role");
//       removeFromLocalStorage("id");
//       navigate("/");
//     }
//   }, [pageIndex]);

//   return (
//     <>
//       <Header />

//       <div className="md:px-[4%]">
//         <div className="relative w-[80vw] m-auto">
//           <div className="flex flex-row space-x-4">
//             <NavigationBar
//               navMenuContents={[
//                 {
//                   title: "Manage Salons",
//                   icon: <BsShop className="w-6 h-6" />,
//                 },
//                 {
//                   title: "Manage Customers",
//                   icon: <IoPeopleCircleOutline className="w-6 h-6" />,
//                 },
//                 {
//                   title: "Appointments",
//                   icon: <RiLoginCircleLine className="w-6 h-6" />,
//                 },
//                 {
//                   title: "Logout",
//                   icon: <RiLoginCircleLine className="w-6 h-6" />,
//                 },
//               ]}
//               setIndex={setPageIndex}
//               index={pageIndex}
//             />
//             <div
//               className="h-[86vh] flex-grow border-[#272727a2] border-2 rounded-xl relative mt-4"
//               style={{
//                 background: `url(${bg})`,
//                 backgroundSize: "contain",
//                 backgroundPosition: "center",
//               }}
//             >
//               {/* Container */}
//               <div
//                 className="glass-bg h-full overflow-y-scroll no-scrollbar"
//                 style={{
//                   backgroundColor: "#aac1ff21",
//                 }}
//               >
//                 {pageIndex == 0 ? (
//                   <ManageSalons />
//                 ) : pageIndex == 1 ? (
//                   <ManageCustomer />
//                 ) : (
//                   // pageIndex == 2 ?
//                   //     <SalonAppointments /> :
//                   <></>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
