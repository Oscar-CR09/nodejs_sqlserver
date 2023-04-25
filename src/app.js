import express from 'express';
import config from './config';    

const app = express();

// let port;
//setting 
// app.set('port', config.port || 3000);
app.set('port', config.port);

export default app;
