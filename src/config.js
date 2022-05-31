//import { config } from "dotenv";
//config();
import 'dotenv/config'; //Aqui hago los 2 pasos simultaneamente - ES6

//si no pongo algún console.log de process.env la primera vez se cae el proceso
//console.log('Desde config.js', process.env.MONGODB_URI);
export const BDMONGO_URI = process.env.MONGODB_URI
//console.log('Desde config.js', BDMONGO_URI);
