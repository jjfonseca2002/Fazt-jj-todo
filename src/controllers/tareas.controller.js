import Tarea from "../models/Task";

export const renderTask = async (req, res) => {
  const tareas = await Tarea.find().lean(); //lean()para que en vez de devolver objetos de mongodb devuelva objetos sencillos de JS
  res.render("index.hbs", { RsTarea: tareas });
};

export const addTarea = async (req, res) => {
  try {
    const tareas = Tarea(req.body);
    await tareas.save();
    res.redirect("/");
    //console.log(tareas);
  } catch (error) {
    console.error(error);
  }
};

export const renderEdit = async (req, res) => {
  try {
    const tareas = await Tarea.findById(req.params.id).lean();
    res.render("edit", { tareas });
  } catch (error) {
    console.log(error.message);
  }
};

export const editTarea = async (req, res) => {
  /*Proceso Update - estas 2 lineas es otra forma de hacerlo
    const {id} = req.params
    await Tarea.findByIdAndUpdate(id, req.body)
    */
  await Tarea.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/");
};

export const toggleTarea = async (req, res) => {
  const tareas = await Tarea.findById(req.params.id);
  tareas.done = !tareas.done;
  await tareas.save();
  res.redirect("/");
};

export const deleteTarea = async (req, res) => {
  const { id } = req.params;
  await Tarea.findByIdAndDelete(id);
  res.redirect("/");
};
