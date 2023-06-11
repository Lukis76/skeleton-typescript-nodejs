import { sequelize } from "@/lib/db";
import { DataTypes } from 'sequelize'
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

export const dietModel = sequelize.define('diet', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
})
