import {getConnection} from "../database/conexion";

export const getProducts = async (req,res) => {

    const pool = await getConnection();
    const result = await pool.request().query('select * from products');
    console.log(result);
    res.json(result.recordset);

};

export const createNewProducts = async (req,res) =>{
    res.json('new products');
    
}