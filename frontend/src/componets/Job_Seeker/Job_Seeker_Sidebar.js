import { useEffect, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Resume_View from "./Resume_View"; 
import axios from "axios";
import News from "./News";
import Vacancies from "./Vacancies";
import Company_response from "./Company_response";
import Visit_Request from "./Visit_request";

export default function Job_Seeker_SideBar()
{
    var [user,setUser]=useState({});
    const [isOpen, setIsOpen] = useState(false);
    const email=window.localStorage.getItem("email");
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
  
    useEffect(()=>{
        axios.get(`https://backend-testing-1rgv.onrender.com/jobber_details?email=${email}`,).then((data)=>{
            setUser(data.data);
            console.log(data.data)
            console.log(user);
        }).catch((err)=>{
            console.log(err);
        })
        console.log(window.localStorage.getItem("email"));
        const handleResize = () => {
          setIsOpen(window.innerWidth > 768);
        };
    
        handleResize();
        window.addEventListener('resize', handleResize);
    
        return () => window.removeEventListener('resize', handleResize);
    },[]);
    const [selectedField, setSelectedField] = useState('Dashboard');
    var [visible,setVisible]=useState();
  
    const navigate = useNavigate(); // Initialize the navigate function
   
    
    const handleItemClick = (field) => {
        setSelectedField(field);
      };
      function logout() {
        console.log("hha");
        handleItemClick('Sign Out');
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("type");
        navigate('/'); // Use navigate to navigate to the desired route
      }
   return(<>
   {/* <div className="sidebar">
      <div className="sidebar-header">
        <i className="fa-solid fa-apartment"></i>
        <span>Job Recruitment System</span>
      </div>
      <ul className="sidebar-menu">
        <li
          className={selectedField === 'Dashboard' ? 'active' : ''}
          onClick={() => handleItemClick('Dashboard')}
        >
          <i className="fa fa-home"></i>
          <span>Dashboard</span>
        </li>
        <li
          className={selectedField === 'Profile' ? 'active' : ''}
          onClick={() => handleItemClick('Profile')}
        >
          <i className="fa fa-user" aria-hidden="true"></i>
          <span>Profile</span>
        </li>
        <li
          className={selectedField === 'Appliers' ? 'active' : ''}
          onClick={() => handleItemClick('Appliers')}
        >
          <i className="fa fa-tasks" aria-hidden="true"></i>
          <span>Vacancies</span>
        </li>
        <li
          className={selectedField === 'Visit Request' ? 'active' : ''}
          onClick={() => handleItemClick('Visit Request')}
        >
          <i className="fa fa-user" aria-hidden="true"></i>
          <span>Visit Request</span>
        </li>
        <li
          className={selectedField === 'Company Response' ? 'active' : ''}
          onClick={() => handleItemClick('Company Response')}
        >
          <i className="fa fa-tasks" aria-hidden="true"></i>
          <span>Company Response</span>
        </li>
        <li
          className={selectedField === 'Sign Out' ? 'active' : ''}
          onClick={logout}
        >
          <i className="fa fa-sign-out" aria-hidden="true"></i>
          <span>Sign Out</span>
        </li>
      </ul>
    </div> */}
    
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
                className={selectedField === 'Profile' ? 'active' : ''}
                onClick={() => handleItemClick('Profile')}
              >
                <div
                  className={`flex items-center rounded-md px-4 duration-300 cursor-pointer`}
                >
                  <i className={`fa fa-user ${selectedField === 'Profile' ? 'text-black' : 'text-gray-200'
                    }`}></i>
                  <span
                    className={`text-[15px] ml-4 font-bold ${selectedField === 'Profile' ? 'text-black' : 'text-gray-200'
                      }`}
                    style={{ fontFamily: 'Poppins' }}
                  >
                    Profile
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
                className={selectedField === 'Visit Request' ? 'active' : ''}
                onClick={() => handleItemClick('Visit Request')}
              >
                <div
                  className={`flex items-center rounded-md px-4 duration-300 cursor-pointer`}
                >
                  <i className={`fa fa-clock-o ${selectedField === 'Visit Request' ? 'text-black' : 'text-gray-200'
                    }`}></i>
                  <span
                    className={`text-[15px] ml-4 font-bold ${selectedField === 'Visit Request' ? 'text-black' : 'text-gray-200'
                      }`}
                    style={{ fontFamily: 'Poppins' }}
                  >
                    Visit Request
                  </span>
                </div>
              </li>

              <li
                className={selectedField === 'Company Response' ? 'active' : ''}
                onClick={() => handleItemClick('Company Response')}
              >
                <div
                  className={`flex items-center rounded-md px-4 duration-300 cursor-pointer`}
                >
                  <i className={`fa fa-check ${selectedField === 'Company Response' ? 'text-black' : 'text-gray-200'
                    }`}></i>
                  <span
                    className={`text-[15px] ml-4 font-bold ${selectedField === 'Company Response' ? 'text-black' : 'text-gray-200'
                      }`}
                    style={{ fontFamily: 'Poppins' }}
                  >
                    Company Response
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

    {selectedField=="Dashboard"?<News/>:null}
   
    {selectedField=="Profile"?({user}?<Resume_View user={user}/>:null):null}
    {selectedField=="Appliers"?({user}?<Vacancies user={user}/>:null):null}
    {selectedField=="Company Response"?({user}?<Company_response user={user}/>:null):null}
    
    {selectedField=="Visit Request"?({user}?<Visit_Request user={user}/>:null):null}
    </>)
}