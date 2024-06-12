// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import Company_List from './Company_List';
// import { useEffect } from 'react';
// import Verified_Company from './Verified_company_list';

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//     const toggleSidebar = () => {
//         setIsOpen(!isOpen);
//     };
//   const [selectedField, setSelectedField] = useState('Dashboard');
//   const navigate = useNavigate(); // Initialize the navigate function

//   const handleItemClick = (field) => {
//     setSelectedField(field);
//   };
//   const dropdown = () => {
//     const submenu = document.querySelector("#submenu");
//     const arrow = document.querySelector("#arrow");

//     if (submenu && arrow) {
//         submenu.classList.toggle("hidden");
//         arrow.classList.toggle("rotate-180");
//     }
// };



// useEffect(() => {
//     const handleResize = () => {
//         if (window.innerWidth <= 768) {
//             setIsOpen(false);
//         } else {
//             setIsOpen(true);
//         }
//     };

//     handleResize(); // Call the resize handler once to set the initial state

//     window.addEventListener('resize', handleResize);

//     return () => window.removeEventListener('resize', handleResize);
// }, []);


//   function logout() {
//     console.log("hha");
//     handleItemClick('Sign Out');
//     window.localStorage.removeItem("token");
//     window.localStorage.removeItem("type");
//     navigate('/'); // Use navigate to navigate to the desired route
//   }

//   return (
//     <>
//                     <button
//                     type="button"
//                     onClick={toggleSidebar}
//                     className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//                 >
//                     <span className="sr-only">{isOpen ? 'Close sidebar' : 'Open sidebar'}</span>
//                     <svg
//                         className="w-6 h-6"
//                         aria-hidden="true"
//                         fill="currentColor"
//                         viewBox="0 0 20 20"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path
//                             clipRule="evenodd"
//                             fillRule="evenodd"
//                             d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
//                         ></path>
//                     </svg>
//                 </button>

//     {/* <div className="sidebar">
//       <div className="sidebar-header">
//         <i className="fa-solid fa-apartment"></i>
//         <span>Job Recruitment System</span>
//       </div>
//       <ul className="sidebar-menu">
//         <li
//           className={selectedField === 'Dashboard' ? 'active' : ''}
//           onClick={() => handleItemClick('Dashboard')}
//         >
//           <i className="fa fa-home"></i>
//           <span>Dashboard</span>
//         </li>
//         <li
//           className={selectedField === 'Verified Company' ? 'active' : ''}
//           onClick={() => handleItemClick('Verified Company')}
//         >
//           <i className="fa fa-check-circle"></i>
//           <span>Verified Company</span>
//         </li>
//         <li
//           className={selectedField === 'Sign Out' ? 'active' : ''}
//           onClick={logout}
//         >
//           <i class="fa fa-sign-out" aria-hidden="true"></i>
//           <span>Sign Out</span>
//         </li>
//       </ul>
//     </div>
//     {selectedField=="Dashboard"?<Company_List/>:<Verified_Company/>}
//      */}
//            {isOpen && typeof window !== 'undefined' && ( // Only render if isOpen is true and window is defined
//                     <aside
//                         id="sidebar-multi-level-sidebar"
//                         className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform sm:w-80 lg:w-64 translate-x-0`}
//                         aria-label="Sidebar"
//                     >
//                         {/* Close button for the sidebar on mobile */}
//                         {window.innerWidth <= 768 && (
//                             <button
//                                 type="button"
//                                 onClick={toggleSidebar}
//                                 className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-600 focus:outline-none"
//                             >
//                                 <span className="sr-only">Close sidebar</span>
//                                 <svg
//                                     className="w-6 h-6"
//                                     aria-hidden="true"
//                                     fill="none"
//                                     viewBox="0 0 24 24"
//                                     stroke="currentColor"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         d="M6 18L18 6M6 6l12 12"
//                                     />
//                                 </svg>
//                             </button>
//                         )}



//                         <div className="h-full px-3 py-4 overflow-y-auto  dark:bg-gray-800 bg-gray-900">
//                             <ul className="space-y-2 font-medium">
//                                 {/* Sidebar items */}
//                                 {/* Replace this section with your sidebar content */}
//                                 <div className="text-gray-100 text-xl">
//                                     <div className="p-2.5 mt-1 flex items-center">
//                                         <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600"></i>
//                                         <h1 className="font-bold text-gray-200 text-[15px] ml-3">Job Recruitment System</h1>

//                                     </div>
//                                     <div className="my-2 bg-gray-600 h-[1px]"></div>
//                                 </div>
//                                 <li onClick={() => handleItemClick('Dashboard')}><div
//                                     className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white${selectedField === 'Dashboard' ? 'active' : ''}`}
//                                 >
//                                     <i className="bi bi-person-fill"></i>
//                                     <span className="text-[15px] ml-4 text-gray-200 font-bold">Dashboard</span>
//                                 </div></li>
//                                 <li href="" onClick={() => handleItemClick('Verified Company')}><div
//                                     className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white  ${selectedField === 'Verified Company' ? 'active' : ''}`}
//                                 >
//                                     <i className="bi bi-bookmark-fill"></i>

//                                     <span className="text-[15px] ml-4 text-gray-200 font-bold">Verified Company</span>
//                                 </div></li>
//                                 <div className="my-4 bg-gray-600 h-[1px]"></div>

//                                 <div
//                                     className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white selectedField === 'Sign Out' ? 'active' : ''"
//                                     onClick={logout}>
//                                     <i className="bi bi-box-arrow-in-right"></i>
//                                     <span className="text-[15px] ml-4 text-gray-200 font-bold">Logout</span>
//                                 </div>
//                             </ul>
//                         </div>
//                     </aside>
//                 )}
//                  {selectedField=="Dashboard"?<Company_List/>:<Verified_Company/>}
//     </>
//   );
// };

// export default Sidebar;import React, { useState, useEffect } from 'react';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Company_List from './Company_List';

import Verified_Company from './Verified_company_list';

const Sidebar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedField, setSelectedField] = useState('Dashboard');
  const navigate = useNavigate();
  const sendSelectedFieldToParent = () => {
    // Call the callback function passed from the parent with the selectedField data
    props.sendSelectedFieldToParent(selectedField);
  };
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (field) => {
    setSelectedField(field);
    sendSelectedFieldToParent();
  };

  const logout = () => {
    setSelectedField('Sign Out');
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("type");
    navigate('/');
  };

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth > 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {!isOpen && (
        <button
          type="button"
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-50 inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden bg-white shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">{isOpen ? 'Close sidebar' : 'Open sidebar'}</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
      )}

      {isOpen && (
        <aside
          id="sidebar-multi-level-sidebar"
          className="fixed top-0 left-0 z-40 w-64 h-full transition-transform sm:w-90 lg:w-64 translate-x-0 bg-blue-600"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto dark:bg-gray-800 bg-blue-600">
            {/* Close button for the sidebar on mobile */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {window.innerWidth <= 768 && (
                <button
                  type="button"
                  onClick={toggleSidebar}
                  className="absolute top-4 right-2 z-50 inline-flex items-center p-2 text-sm text-gray-500 rounded-lg bg-white shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                  <span className="sr-only">Close sidebar</span>
                  <i className="fa fa-window-close ml-2" aria-hidden="true"></i>
                </button>
              )}
              <div className="flex items-center">
                <i className="fa fa-building px-2 py-1 rounded-md bg-blue-600 text-gray-200"></i>
                <h1 className="font-bold text-gray-200 text-[15px] ml-3">Job Recruitment System</h1>


              </div>
            </div>

            <ul className="sidebar-menu space-y-2 font-medium">
              <div className="text-gray-100 text-xl">
                <div style={{ display: 'flex', flexDirection: 'column' }}>


                </div>

                <div className="my-2 bg-gray-600 h-[1px]"></div>
              </div>
              <li
                className={selectedField === 'Dashboard' ? 'active' : ''}
                onClick={() => handleItemClick('Dashboard')}
              >
                <div
                  className={`flex items-center rounded-md px-4 duration-300 cursor-pointer`}
                >
                  <i className={`fa fa-home ${selectedField === 'Dashboard' ? 'text-black' : 'text-gray-200'
                    }`}></i>
                  <span
                    className={`text-[15px] ml-4 font-bold ${selectedField === 'Dashboard' ? 'text-black' : 'text-gray-200'
                      }`}
                    style={{ fontFamily: 'Poppins' }}
                  >
                    Dashboard
                  </span>
                </div>
              </li>

              <li
                className={selectedField === 'Verified Company' ? 'active' : ''}
                onClick={() => handleItemClick('Verified Company')}
              >
                <div
                  className={`flex items-center rounded-md px-4 duration-300 cursor-pointer`}
                >
                  <i className={`fa fa-check-circle ${selectedField === 'Verified Company' ? 'text-black' : 'text-gray-200'
                    }`}></i>
                  <span
                    className={`text-[15px] ml-4 font-bold ${selectedField === 'Verified Company' ? 'text-black' : 'text-gray-200'
                      }`}
                    style={{ fontFamily: 'Poppins' }}
                  >
                    Verified Company
                  </span>
                </div>
              </li>

              <div className="my-4 bg-gray-600 h-[1px]"></div>

              <li
                className={selectedField === 'Sign Out' ? 'active' : ''}
                onClick={logout}
              >
                <div
                  className={`flex items-center rounded-md px-4 duration-300 cursor-pointer`}
                >
                  <i className={`fa fa-sign-out ${selectedField === 'Sign Out' ? 'text-black' : 'text-gray-200'
                    }`}></i>
                  <span
                    className={`text-[15px] ml-4 font-bold ${selectedField === 'Sign Out' ? 'text-black' : 'text-gray-200'
                      }`}
                    style={{ fontFamily: 'Poppins' }}
                  >
                    Logout
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </aside>
      )}
    </>
  );
};

export default Sidebar;
