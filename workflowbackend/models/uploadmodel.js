import express from 'express';
import pool from '../config/database.js';
// export const insertexceldata=async(table,data)=>{

//     try{

//         const columns=Object.keys(data[0]).map(col=>`\`${col}\``).join(",")
//         const values=data.map((row)=>Object.values(row))
//         const placeholders=values.map(()=>`(${new Array(values[0].length).fill("?").join(", ")})`).join(', ')
//         const sqlquery=`insert into ${table} (${columns}) values ${placeholders}`
//         console.log("Sql query:",sqlquery)
//         await pool.query(sqlquery,values.flat())
//         return {sucess:true,message:"Data inserted Successfully"}
//     }
//     catch(error){
// console.error("Database error:",error)
// return ({sucess:false,error:"Failed to insert data"})
//     }
// }


export const insertexceldata = async (table, data) => {
    try {
        if (!data || data.length === 0) {
            return { success: false, error: "No data to insert" };
        }

        // Get column names, excluding 'id' if it's auto-increment
        let columns = Object.keys(data[0]).filter(col => col.toLowerCase() !== 'id');  
        let values = data.map(row => columns.map(col => row[col])); 

        // Wrap column names in backticks
        const columnsSQL = columns.map(col => `\`${col}\``).join(", ");
        const placeholders = values.map(() => `(${new Array(columns.length).fill("?").join(", ")})`).join(", ");
        const sqlquery = `INSERT INTO \`${table}\` (${columnsSQL}) VALUES ${placeholders}`;

        // console.log("SQL Query:", sqlquery);
        // console.log("Values:", values.flat());

        await pool.query(sqlquery, values.flat());
        return { success: true, message: "Data inserted successfully" };
    } catch (error) {
        console.error("Database error:", error);
        return { success: false, error: "Failed to insert data" };
    }
};
