import express from 'express';
import { tablecontroller } from '../controllers/tablecontroller.js';

const tableRouter = express.Router();



tableRouter.get("/gettablesbutton",tablecontroller.getTablesName)
tableRouter.get("/getpersonalmappingworkflow",tablecontroller.getPersonalmappingworkflow)
tableRouter.get("/getprofilingworkflow",tablecontroller.profilingworkflow)
tableRouter.get("/getstakeholderworkflow",tablecontroller.stakeholderworkflow)

export default tableRouter;
