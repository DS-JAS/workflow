

//original layout
// const Dashboard = () => {

//     return (
//       <div className="container-fluid">
//         <div className="row">
//           {/* Sidebar */}
//           <nav className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
//             <div
//               className="offcanvas-md offcanvas-end bg-body-tertiary"
//               tabIndex="-1"
//               id="sidebarMenu"
//               aria-labelledby="sidebarMenuLabel"
//             >
//               <div className="offcanvas-header">
//                 <h5 className="offcanvas-title" id="sidebarMenuLabel">Company Name</h5>
//                 <button
//                   type="button"
//                   className="btn-close"
//                   data-bs-dismiss="offcanvas"
//                   data-bs-target="#sidebarMenu"
//                   aria-label="Close"
//                 ></button>
//               </div>
//               <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
//                 <ul className="nav flex-column">
//                   <li className="nav-item">
//                     <a className="nav-link active" href="#">Dashboard</a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link" href="#">Orders</a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link" href="#">Products</a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link" href="#">Customers</a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link" href="#">Reports</a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link" href="#">Integrations</a>
//                   </li>
//                 </ul>
//                 <hr className="my-3" />
//                 <ul className="nav flex-column mb-auto">
//                   <li className="nav-item">
//                     <a className="nav-link" href="#">Settings</a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link" href="#">Sign out</a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </nav>
  
//           {/* Main Content */}
//           <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
//             <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
//               <h1 className="h2">Workflow</h1>
//               <div className="btn-toolbar mb-2 mb-md-0">
//                 <div className="btn-group me-2">
//                   <button type="button" className="btn btn-sm btn-outline-secondary">Move to Drive<i class="bi bi-arrow-bar-right"></i></button>
                  
//                 </div>
//               </div>
//             </div>
            
//             <h2>Section Title</h2>
//             <div className="table-responsive small">
//               <table className="table table-striped table-sm">
//                 <thead>
//                   <tr>
//                     <th scope="col">#</th>
//                     <th scope="col">Header</th>
//                     <th scope="col">Header</th>
//                     <th scope="col">Header</th>
//                     <th scope="col">Header</th>
//                     <th scope="col">Header</th>
//                     <th scope="col">Header</th>
//                     <th scope="col">Header</th>
//                     <th scope="col">Header</th>
//                     <th scope="col">Header</th>
//                     <th scope="col">Header</th>
//                     <th scope="col">Header</th>
//                     <th scope="col">Header</th>
//                     <th scope="col">Header</th>
//                     <th scope="col">Header</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {[...Array(15)].map((_, index) => (
//                     <tr key={index}>
//                       <td>{1001 + index}</td>
//                       <td>Random</td>
//                       <td>Data</td>
//                       <td>Placeholder</td>
//                       <td>Text</td>
//                        <td>{1001 + index}</td>
//                       <td>Random</td>
//                       <td>Data</td>
//                       <td>Placeholder</td>
//                       <td>Text</td>
//                       <td>Text</td>
//                        <td>{1001 + index}</td>
//                       <td>Random</td>
//                       <td>Data</td>
//                       <td>Placeholder</td>
//                       <td>Text</td>
//                     </tr>
                    
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </main>
//         </div>
//       </div>
//     );
//   };
  
//   export default Dashboard;




// import { useEffect,useState } from "react";
// import axios from 'axios';


// const apiurl=import.meta.env.VITE_BACKENDAPIURL;

// export const Mainbar = ({title}) => {

//   const[tablenames,setTablenames]=useState([])
//   const[profiling,setProfiling]=useState([])
//   const[personalmapping,setPersonalmapping]=useState([])
//   const [selectedtable,setSelectedtable]=useState("")
//   // console.log("title is:",title)


//   useEffect(()=>{
//     document.title=title
//   })
// useEffect(()=>{
//   const handlegettablesname=async()=>{

//     const response =await axios.get(`${apiurl}/tables/gettablesbutton`)
//     console.log("Fetched tablesname:",response.data.tables)
//     setTablenames(response.data.tables)
//   }
//   handlegettablesname()
// },[])


// useEffect(()=>{
// const handlegetprofilingworkflow=async()=>{
//   const response =await axios.get(`${apiurl}/tables/getprofilingworkflow`)
//   console.log("Fetched Profiling Workflow:",response.data.getprofilingworkflow)
//   setProfiling(response.data.getprofilingworkflow)
// }
// handlegetprofilingworkflow()
// },[])
 
// useEffect(()=>{

//   const handlegetpersonalmappingworkflow=async()=>{
//     const response=await axios.get(`${apiurl}/tables/getpersonalmappingworkflow`)
//     console.log("Fetched Personal Mapping Workflow:",response.data.getpersonalmapping)
//     setPersonalmapping(response.data.getpersonalmapping)
//   }
//   handlegetpersonalmappingworkflow()
// },[])


// const handleclick=(tablename)=>{
//   setSelectedtable(tablename)
  
// }

// useEffect(()=>{
//   console.log("Updated Selected Table:", selectedtable);

// },[selectedtable])

//     return (
//       <div className="container-fluid mt-5 ">
//         <div className="row">
//           {/* Sidebar */}
//           <nav className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
//             <div
//               className="offcanvas-md offcanvas-end bg-body-tertiary"
//               tabIndex="-1"
//               id="sidebarMenu"
//               aria-labelledby="sidebarMenuLabel"
//             >
//               <div className="offcanvas-header">
//                 <h5 className="offcanvas-title" id="sidebarMenuLabel">Company Name</h5>
//                 <button
//                   type="button"
//                   className="btn-close btn-dark"
//                   data-bs-dismiss="offcanvas"
//                   data-bs-target="#sidebarMenu"
//                   aria-label="Close"
//                 ></button>
//               </div>
//               <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
//               <h4 className="text-center m-2">Workflows</h4>
//                 <ul className="nav flex-column container ">
// {tablenames.map((button,index)=>(
//   <button type="button" className="btn btn-sm btn-outline-dark m-2" key={index} onClick={()=>handleclick(button)}>
// {button}
//   </button>
// ))}
                  
               
               
//                 </ul>
//                 <hr className="my-3" />
//                 <ul className="nav flex-column mb-auto">
                
//                   {/* <li className="nav-item">
//                   <a className="nav-link text-dark" href="#">Settings</a>
//                     <a className="nav-link text-dark" href="#">Sign out</a>
//                   </li> */}
//                 </ul>
//               </div>
//             </div>
//           </nav>
  
//           {/* Main Content */}
//           <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-2">
//             <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
//               <h3 className="h2 text-secondary">{title}</h3>
//               <div className="btn-toolbar mb-2 mb-md-0 ">
//                 <div className="btn-group me-2">
//                   {/* <button type="button" className="btn btn-sm btn-outline-dark">Move to Drive<i class="bi bi-arrow-bar-right"></i></button> */}
                  
//                 </div>
//               </div>
//             </div>
            
//             <h2>{selectedtable}</h2>
//            <div className="table-responsive small" style={{ maxHeight: "400px", overflowY: "auto" }}>
//   <table className="table table-bordered table-sm">
//     <thead className="table-light" style={{ position: "sticky", top: 0, zIndex: 1020 }}>
//       <tr>
      
//         {selectedtable && profiling.length>0 &&Object.keys(profiling[0]).map((col,index)=>(
//           <th key={index}>{col}</th>
//         ))}
//       </tr>
//     </thead>
//     <tbody>
    

    

// {selectedtable && profiling.map((profile, index) => (
//   <tr key={index}>
  
//     {Object.values(profile).map((value,row)=>(
// <td key={row}>{value}</td>
//     ))}
//   </tr>
// ))}

//     </tbody>
//   </table>
// </div>

//           </main>
//         </div>
//       </div>
//     );
//   };


// tomorrow changed line 471,494 form onsubmit, display them as new lines in the table.

import { useState, useEffect,useRef } from "react";
import axios from "axios";

 const apiurl=import.meta.env.VITE_BACKENDAPIURL;

export const Mainbar = ({ title }) => {
  const [tablenames, setTablenames] = useState([]);
  const [Profiling_Workflow, setProfiling] = useState([]);
  const [Personnel_Mapping_Workflow, setPersonalmapping] = useState([]);
  const [Stakeholder_Workflow, setStakeholder] = useState([]);
  const [selectedtable, setSelectedtable] = useState("");
  const [showmodal,setShowModal]=useState(false)
  const[selectedfile,setSelectedfile]=useState(null)
  const[errormessage,setErrorMessage]=useState("")
  const [successMessage, setSuccessMessage] = useState("");

  const tableRef = useRef(null);


  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    const handleGetTablesName = async () => {
      const response = await axios.get(`${apiurl}/tables/gettablesbutton`);
      // console.log("Fetched tables name:", response.data.tables);
      setTablenames(response.data.tables);
    };
    handleGetTablesName();
  }, []);

  useEffect(() => {
    const handleGetProfilingWorkflow = async () => {
      const response = await axios.get(`${apiurl}/tables/getprofilingworkflow`);
      // console.log("Fetched Profiling Workflow:", response.data.getprofilingworkflow);
      setProfiling(response.data.getprofilingworkflow);
    };
    handleGetProfilingWorkflow();
  }, []);

  useEffect(() => {
    const handleGetPersonalMappingWorkflow = async () => {
      const response = await axios.get(`${apiurl}/tables/getpersonalmappingworkflow`);
      // console.log("Fetched Personal Mapping Workflow:", response.data.getpersonalmapping);
      setPersonalmapping(response.data.getpersonalmapping);
    };
    handleGetPersonalMappingWorkflow();
  }, []);

  useEffect(() => {
    const handleGetWorkflow = async () => {
      const response = await axios.get(`${apiurl}/tables/getstakeholderworkflow`);
      // console.log("Fetched Workflow:", response.data);
      setStakeholder(response.data);
    };
    handleGetWorkflow();
  }, []);

  const handleClick = (tablename) => {
    setSelectedtable(tablename);
    setErrorMessage(""); // Clear error message when changing the table
    setSuccessMessage(""); // Optionally clear success message as well
    setSelectedfile(null);
  };

  // Determine which dataset to display based on the selected table
  const getSelectedData = () => {
    if (selectedtable === "Profiling_Workflow") return Profiling_Workflow;
    if (selectedtable === "Personnel_Mapping_Workflow") return Personnel_Mapping_Workflow;
    if (selectedtable === "Stakeholder_Workflow") return Stakeholder_Workflow;
    return [];
  };

  const selectedData = getSelectedData();


  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const validTypes = [
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "application/vnd.ms-excel",
      ];

      if (validTypes.includes(file.type)) {
        setSelectedfile(file);
        setErrorMessage(""); // Clear any previous error
      } else {
        setSelectedfile(null);
        setErrorMessage("Please upload a valid Excel file (.xlsx or .xls)");
      }
    }
  };

  const uploaddata=async(e)=>{
    e.preventDefault();
    if(!selectedtable ||!selectedfile){
      setErrorMessage("Please upload a valid file")
      return;
    }
    const formdata=new FormData()
    formdata.append("table",selectedtable)
    formdata.append("file",selectedfile)

    try{
const response =await axios.post(`${apiurl}/upload/file`,formdata,{
  headers:{
    "Content-Type":"multipart/form-data"
  }
})
setSuccessMessage("Inserted Data Successfully");
setErrorMessage(""); // Clear any previous errors
    setSelectedfile(null);
    setTimeout(() => {
      setShowModal(false);
      setSuccessMessage("");  // Reset after modal closes
    }, 3000); 

    }
    catch(error){
      console.error("Error uploading excel file:", error.response ? error.response.data : error.message);
      setErrorMessage(error.response ? error.response.data.error : "Failed to upload file. Please try again.");
    }
    
  }

  useEffect(() => {
    if (tableRef.current) {
      tableRef.current.scrollTop = 0;
    }
  }, [selectedtable]);
  


 
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        {/* Sidebar */}
        <nav className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
          <div className="offcanvas-md offcanvas-end bg-body-tertiary" tabIndex="-1" id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="sidebarMenuLabel">Datasolve Analytics</h5>
              <button type="button" className="btn-close btn-dark" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body d-md-flex flex-column vh-100 p-0 pt-lg-3 overflow-y-auto">
              {/* <h4 className="text-center m-3">Workflows</h4> */}
              <ul className="nav flex-column container mt-4">
                {["Profiling_Workflow", "Personnel_Mapping_Workflow", "Stakeholder_Workflow"].map((tablename, index) => (
                  <button type="button" className="btn btn-sm btn-outline-dark m-2" style={{ padding: ".25rem .5rem", 
                    }} key={index} onClick={() => handleClick(tablename)}>
                    {tablename}
                  </button>
                ))}
                   
              </ul>
              <hr className="my-3" />
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-2">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h3 className="h3 text-secondary mt-3">{title}</h3>
            <div className="btn-toolbar mb-2 mb-md-0 ">
                <div className="btn-group mt-2">  
                   <button type="button" className="btn btn-sm btn-outline-dark" onClick={()=>setShowModal(true)} disabled={!selectedtable}>Upload Data<i className="bi bi-arrow-bar-right"></i></button>
                 </div>
              </div>
          </div>
{!selectedtable ?
(<div className="text-start mt-4">
  <h4 className="text-secondary ">Welcome! Select a workflow and upload data effortlessly.</h4>
</div>):
(<div>
<h4>{selectedtable.toUpperCase()}</h4>
          {/* <div className="table-responsive small" style={{ maxHeight: "500px",overflowY: "auto" }} ref={tableRef}>
            <table className="table table-bordered table-sm ">
              <thead className="table-light " style={{ position: "sticky", top: 0, zIndex: 1020 ,textAlign:"center" }}> */}
                <div className="table-responsive small overflow-auto" style={{ maxHeight: "500px" }} ref={tableRef}>
  <table className="table table-bordered table-sm" >
    <thead className="table-light position-sticky top-0 text-center" style={{ zIndex: 1020 }}>                
                <tr>
                  {selectedData.length > 0 && Object.keys(selectedData[0]).map((col, index) => (
                    <th key={index}>{col}</th>
                  ))}
                </tr>
              </thead>
              {/* <tbody>
                {selectedData.map((row, index) => (
                  <tr key={index}>
                    {Object.values(row).map((value, colIndex) => (
                      <td key={colIndex}>{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody> */}
              <tbody>
                {selectedData.map((row,index)=>(
                  <tr key={index}>
                    {Object.values(row).map((value,colIndex)=>(
                      <td key={colIndex}>
                        {typeof value ==="string" ? value.split("\n").map((line,i)=>(
<span key={i}>{line}<br/></span>
                        )):value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
  </div>)}

          
        </main>
      </div>



   {showmodal && (
  <div className="modal fade show d-block" tabIndex="-1" role="dialog">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">{selectedtable} Upload Data</h5>
        <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
      </div>
      <div className="modal-body">
         <form onSubmit={uploaddata}> 
       {/* <form> */}
          <div className="mb-3">
          
            <label className="form-label">Upload Excel File</label>
            <input type="file" className="form-control mt-2" onChange={handleFileChange} />
            {errormessage && <p className="text-danger mt-2">{errormessage}</p>}
          </div>
          <div className="d-flex justify-content-start">
          {successMessage && <p className="text-success text-start">{successMessage}</p>} 
          </div>
          <div  className="d-flex justify-content-end">
          <button type="submit" className="btn btn-dark" >Upload</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
   )}
{showmodal && <div className="modal-backdrop show fade"  onClick={()=>setShowModal(false)}/>}

    </div>
  );
};

  
