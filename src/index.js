import './config'
import servidor from "./app";
import './database';

servidor.listen(process.env.PORT || 3000);
console.log("Server on port", process.env.PORT || 3000);


