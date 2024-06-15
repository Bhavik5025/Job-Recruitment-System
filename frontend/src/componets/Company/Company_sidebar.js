import { useEffect, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Company_profile from "./Company_profile";
import axios from "axios";
import Profile from "./Profile";
import AddVacancies from "./AddVacancies";
import Jobber_Request from "./Jobber_Request";
import Visit_Request from "../Job_Seeker/Visit_request";
import Jobber_Visit_Request from "./Jobber_Visit_request";
import ApproveList from "./approvelist";
import Loading from "../Lottie/Loading";
export default function Company_SideBar() {
  var [visible, setVisible] = useState();
  var [visible1, setVisible1] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [loading,setLoading]=useState(false);
  
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [selectedField, setSelectedField] = useState('Dashboard');

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (field) => {
    setSelectedField(field);
    // sendSelectedFieldToParent();
  };

  const navigate = useNavigate(); // Initialize the navigate function
  
  useEffect(() => {
    setLoading(true);
    axios.post("https://backend-testing-1rgv.onrender.com/company_dashboard_data", {
      email: window.localStorage.getItem("email")
    }).then((obj) => {
      setLoading(false);
      console.log(obj);
      if (obj.data.data == true) {
        setVisible(true);
      }
      else {
        setVisible(false);
      }

    }).finally(()=>{
      setLoading(false);
    })
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsOpen(window.innerWidth > 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const handledata = (data) => {
    setVisible(data);

  };



  function logout() {
    console.log("hha");
    handleItemClick('Sign Out');
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("type");
    navigate('/'); // Use navigate to navigate to the desired route
  }
  return (<>
   

    {!isOpen && (
      <div>
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

      </div>
    )}

    {isOpen && (
      <aside
        id="sidebar-multi-level-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-full transition-transform sm:w-90 lg:w-64 translate-x-0 bg-blue-600"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto dark:bg-gray-800 bg-blue-600">

          <div className="relative flex flex-col">
            {isMobile && (
              <button
                type="button"
                onClick={toggleSidebar}
                className="absolute top-5 right-0 z-50 inline-flex items-center p-2 text-sm text-gray-500 rounded-lg bg-white shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Close sidebar</span>
                <i className="fa fa-window-close ml-2" aria-hidden="true"></i>
              </button>
            )}
            <div className="flex items-center">
              <i className="fa fa-building px-2 py-1 rounded-md bg-blue-600 text-gray-200"></i>
              <h1 className="font-bold text-gray-200 text-[15px] ml-3 whitespace-nowrap">Job Recruitment System</h1>
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
              className={selectedField === 'Add Vacancies' ? 'active' : ''}
              onClick={() => handleItemClick('Add Vacancies')}
            >
              <div
                className={`flex items-center rounded-md px-4 duration-300 cursor-pointer`}
              >
                <i className={`fa fa-plus ${selectedField === 'Add Vacancies' ? 'text-black' : 'text-gray-200'
                  }`}></i>
                <span
                  className={`text-[15px] ml-4 font-bold ${selectedField === 'Add Vacancies' ? 'text-black' : 'text-gray-200'
                    }`}
                  style={{ fontFamily: 'Poppins' }}
                >
                  Add Vacancies
                </span>
              </div>
            </li>
            <li
              className={selectedField === 'Appliers' ? 'active' : ''}
              onClick={() => handleItemClick('Appliers')}
            >
              <div
                className={`flex items-center rounded-md px-4 duration-300 cursor-pointer`}
              >
                <i className={`fa fa-tasks ${selectedField === 'Appliers' ? 'text-black' : 'text-gray-200'
                  }`}></i>
                <span
                  className={`text-[15px] ml-4 font-bold ${selectedField === 'Appliers' ? 'text-black' : 'text-gray-200'
                    }`}
                  style={{ fontFamily: 'Poppins' }}
                >
                  Appliers
                </span>
              </div>
            </li>
            <li
              className={selectedField === 'Visit Requests' ? 'active' : ''}
              onClick={() => handleItemClick('Visit Requests')}
            >
              <div
                className={`flex items-center rounded-md px-4 duration-300 cursor-pointer`}
              >
                <i className={`fa fa-clock-o ${selectedField === 'Visit Requests' ? 'text-black' : 'text-gray-200'
                  }`}></i>
                <span
                  className={`text-[15px] ml-4 font-bold ${selectedField === 'Visit Requests' ? 'text-black' : 'text-gray-200'
                    }`}
                  style={{ fontFamily: 'Poppins' }}
                >
                  Visit Requests
                </span>
              </div>
            </li>

            <li
              className={selectedField === 'approve Requests' ? 'active' : ''}
              onClick={() => handleItemClick('approve Requests')}
            >
              <div
                className={`flex items-center rounded-md px-4 duration-300 cursor-pointer`}
              >
                <i className={`fa fa-check ${selectedField === 'approve Requests' ? 'text-black' : 'text-gray-200'
                  }`}></i>
                <span
                  className={`text-[15px] ml-4 font-bold ${selectedField === 'approve Requests' ? 'text-black' : 'text-gray-200'
                    }`}
                  style={{ fontFamily: 'Poppins' }}
                >
                  approve Requests
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
   {loading?<Loading/>:<>{selectedField === "Dashboard" && visible === false ? (
      <Company_profile visible={handledata} />
    ) : null}

    {selectedField === "Dashboard" && visible === true ? (
      <Profile />
    ) : null}
    {selectedField === "Add Vacancies" ? (
      <AddVacancies />
    ) : null}
    {selectedField === "Appliers" ? <Jobber_Request /> : null}
    {selectedField === "Visit Requests" ? <Jobber_Visit_Request /> : null}
    {selectedField === "approve Requests" ? <ApproveList /> : null}</>}
    
  </>)

}