import pool from '../config/database.js';


export const Tablemodel = {
    getTables: async () => {
      const allowedTables = ['Stakeholder_Workflow', "Personnel_Mapping_Workflow","Profiling_Workflow"];
      const query = "SHOW TABLES FROM mc";
  
      try {
        const [results] = await pool.execute(query);
        // console.log(results);
        
        // Extract table names from the result and filter by allowed tables
        const tables = results
          .map((row) => Object.values(row)[0])  // Extract table name
          .filter((table) => allowedTables.includes(table));  // Filter allowed tables
        return tables;
      } catch (error) {
        console.error("Error fetching tables in TableModel:", error);
        throw new Error("Database error");
      }
    },
   
  getpersonalmapping:async()=>{

    const query="select * from Personnel_Mapping_Workflow"
    
    try{
const [results]=await pool.execute(query)
// console.log("Fetched results :",results)
return results;

    }
    catch(error){
console.error("Error fetching tables in Tablemodel getpersonalmapping :",error)
throw new error("Database error")
    }
  },
  getprofiling:async()=>{
    const query='select * from Profiling_Workflow';
    try{
const [results]=await pool.execute(query);
// console.log("Fetched results :",results)
return results;
    }
    catch(error){
console.error("Error in fetching getprofiling error:",error)
throw new error("Database error")
    }
  },
  getstakeholder:async()=>{
const query="select * from Stakeholder_Workflow";
try{
const [results]=await pool.execute(query)
return results
}
catch(error){
throw new Error("Database error")
}
  }
    
}