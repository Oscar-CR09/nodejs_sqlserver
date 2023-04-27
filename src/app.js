import express from 'express';
import config from './config';    

import productsRoutes from './routes/products.routes';

const app = express();

// let port;
//setting 
// app.set('port', config.port || 3000);
app.set('port', config.port);


app.use(productsRoutes);

export default app;
