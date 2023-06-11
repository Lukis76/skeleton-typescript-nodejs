import { sequelize } from '@/lib/db'
import { DataTypes } from 'sequelize'
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

export const recipeModel = sequelize.define('recipe', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  summary: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  healthScore: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
  img: {
    type: DataTypes.STRING,
  },
  createdb: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
})
