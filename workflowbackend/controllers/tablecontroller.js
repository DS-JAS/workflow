import { Tablemodel } from "../models/tablemodel.js";

export const tablecontroller = {

    // This method will be responsible for fetching the tables and sending the response
    async getTablesName(req, res) {
      try {
        // Get the tables from the model
        const tables = await Tablemodel.getTables();
        
        // Log the filtered tables (optional, for debugging purposes)
        // console.log("Filtered tables:", tables);
        
        // Return the tables as a JSON response
        res.json({ tables });
      } catch (error) {
        // Catch and log any error that occurs
        console.error("Error in getTablesFrombutton:", error.message);
        
        // Send a 500 error response if something goes wrong
        res.status(500).json({ error: "Database error" });
      }
    },

    async getPersonalmappingworkflow(req,res){
try{
const getpersonalmapping=await Tablemodel.getpersonalmapping();
res.json({getpersonalmapping})
}
catch(error){
console.error("Error in getpersonalmappingworkflow controller:",error)
}
    },

    async profilingworkflow(req,res){
      try{
const getprofilingworkflow=await Tablemodel.getprofiling()
res.json({getprofilingworkflow})
      }
      catch(error){
        console.error("Error in profiling workflow:",error)
        return res.status(400).json({message:"Error in profiling workflow:",error})
      }
    },
    async stakeholderworkflow(req,res){
      try{
const stakeholder=await Tablemodel.getstakeholder()
res.json(stakeholder)
      }
      catch(error){
return res.status(400).json({message:"Error in Stakeholder Workflow:",error})
      }
    }
  
}  

