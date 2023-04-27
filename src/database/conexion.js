import sql from "mssql";

const dbSettings={
    user: 'oscar',
    password: 'password',
    server: "localhost",
    database: "webstore",
    options:{
        encrypt: true,
        trustServerCertificate: true,
    },
};

export async function getConnection(){
    try {
        const pool = await sql.connect(dbSettings);
        return pool;
    
    } catch (error) {
        console.error(error);
    }

}

;


// const result = await pool.request().query("SELECT 1")
// console.log(result);