


// import mysql from 'mysql2/promise';



// const isLocal = process.env.NODE_ENV === "development";



// // const config={
// //   // host:'10.64.176.3',
// //   host:"34.93.80.107",
// //   user:"root",
// //   database:"mc",
// //   password:"data2025",
// //   port:"3306"
// // }

// const config={
//    host:'10.19.64.3',
//   //host:"34.93.75.171",
//   user:"datasolve",
//   database:"mc",
//   password:"datasolve@2025",
//   port:"3306"
// }

// // Create a connection pool
// const pool = mysql.createPool(config);

// (async () => {
//   try {
//     // Establish a connection from the pool
//     const connection = await pool.getConnection();
//     console.log(`Connected to the ${isLocal ? "localhost" : "cloud"} database successfully!`);
//     connection.release(); // Release the connection back to the pool
//   } catch (error) {
//     console.error("Error connecting to the database:", error.message);
//   }
// })();

// export default pool;



import mysql from 'mysql2/promise';


const config={
  // host:'10.64.176.3',
  host:"34.93.75.171",
  user:"datasolve",
  database:"mc",
  password:"datasolve@2025",
  port:"3306"
}

const pool = mysql.createPool(config);

(async () => {
  try {
    
    const connection = await pool.getConnection();
    console.log(`Connected to the database successfully!`);
    connection.release(); 
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
  }
})();
export default pool;

