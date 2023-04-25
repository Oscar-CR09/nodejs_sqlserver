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

async function getConnection(){
    const pool = await sql.connect(dbSettings);
    const result = await pool.request().query("select 1")
    console.log(result);


}

getConnection();
