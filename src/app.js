import express from "express";
import { create } from "express-handlebars";
import indexRoutes from "./routes/index.routes";
import path from "path"; //Para hacer que la direccion que establezco sea multiplataforma
import morgan from "morgan";
import favicon from "serve-favicon";
//import exphbs from 'express-handlebars';

const servidor = express();

//Favicon
servidor.use(favicon(path.join(__dirname, './Public/images', '167.ico')));

//VISTAS
//Definimos donde esta la carpeta views - se ayuda de path
servidor.set("views", path.join(__dirname, "views"));

//Midlewares
servidor.use(morgan("dev"));
servidor.use(express.urlencoded({ extended: false })); //para poder leer objetos enviados desde POST en la web

//RUTAS
servidor.use(indexRoutes);

//STATIC FILES
servidor.use(express.static(path.join(__dirname, "public")));

//HandleBars - Le dice a express cual motor de plantillas vamos a utilizar
//configuracion del motor de plantillas
//Forma que si funcionó de StackOverflow
const exphbs = create({
  extname: ".hbs",
  layoutsDir: path.join(servidor.get("views"), "layouts"),
  partialsDir: path.join(servidor.get("views"), "partials"),
  defaultLayout: "main",
});
servidor.engine(".hbs", exphbs.engine);
servidor.set("view engine", ".hbs");

export default servidor;

/*
//Forma de Fazt que no funcionó
servidor.engine(
  ".hbs",
  exphbs({
    layoutDir: path.join(servidor.get('views'), 'layouts'),
    defaultLayout: 'main',
    extname: ".hbs",
  })
);
*/
