import { Router } from "express";
const router = Router();
import {
  renderTask,
  addTarea,
  renderEdit,
  editTarea,
  toggleTarea,
  deleteTarea,
} from "../controllers/tareas.controller";

//CONTROLADORES DE LA COLECCION TAREAS
router.get("/", renderTask); //Renderiza la página inicial
router.post("/tasks/add", addTarea); //Agregar una tarea en la BD
router.get("/tareas/:id/toggleDone", toggleTarea); //Cambia el estado de una tarea a true o false
router.get("/tareas/:id/edit", renderEdit); //renderiza la pagina Edit con los datos a editar
router.post("/tareas/:id/edit", editTarea); //Edita la tarea en la BD
router.get("/tareas/:id/delete", deleteTarea); //Elimina una tarea de la base de datos

export default router;
