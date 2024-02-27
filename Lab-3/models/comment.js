const { DataTypes, Model } = require("sequelize");
const dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class Comment extends Model {}
Comment.init(
  {
    postID: {
      type: DataTypes.INTEGER,
      references: {
        model: Posts,
        key: "id",
      },
      required: true,
    },
    authorID: {
      type: DataTypes.INTEGER,
      references: {
        model: Users,
        key: "id",
      },
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
  },
  {
    sequelize: sequelizeInstance,
    modelName: "users", // use lowercase plural format
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = Comment;
