import './config'
import servidor from "./app";
import './database';

servidor.listen(3000);
console.log("Server on port", 3000);


