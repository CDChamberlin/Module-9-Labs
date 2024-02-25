const { DataTypes, Model } = require("sequelize");
const dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class Post extends Model {}
Post.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  image: {
    type: DataTypes.BLOB,
  },
  authorID: {
    type: DataTypes.INTEGER,
    references: {
      model: Users,
      key: "id",
    },
    required: true,
  },
});
