import xlsx from 'xlsx'
import { insertexceldata } from '../models/uploadmodel.js';
export const uploadexcelfile = async (req, res) => {
    try {
      // console.log("Request received:", req.body);
      // console.log("Received file:", req.file);
  
      const { table } = req.body;
      const fileBuffer = req.file?.buffer;
  
      if (!table) {
        return res.status(400).json({ error: "Table name is required." });
      }
  
      if (!req.file) {
        return res.status(400).json({ error: "No file uploaded." });
      }
  
      // console.log("File buffer length:", fileBuffer?.length);
  
      // Parse Excel file
      const workbook = xlsx.read(fileBuffer, { type: "buffer" });
      const sheetName = workbook.SheetNames[0];
      const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
  
      if (sheetData.length === 0) {
        return res.status(400).json({ error: "Excel file is empty." });
      }
  
      // Insert into database
      const result = await insertexceldata(table, sheetData);
  
      if (!result.success) {
        return res.status(500).json({ error: result.error });
      }
  
      res.status(200).json({ message: result.message });
    } catch (error) {
      // console.error("Upload error:", error);
      res.status(500).json({ error: "Failed to process file." });
    }
  };
  