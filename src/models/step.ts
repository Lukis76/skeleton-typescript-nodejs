import { sequelize } from "@/lib/db";
import { DataTypes } from "sequelize";
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

export const stepModel = sequelize.define("steps", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  number: {
    type: DataTypes.INTEGER,
  },
  step: {
    type: DataTypes.TEXT,
  },
});
