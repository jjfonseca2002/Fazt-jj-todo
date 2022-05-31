import { Schema, model } from "mongoose";

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  {
    //mongoose crea dos campos automaticos, createAt y updateAt con la funcion timesTamps
    timestamps: true,
    versionKey: false //para que mongoose no agregue una clave propia de él
  }
);

export default model("Tarea", taskSchema);
