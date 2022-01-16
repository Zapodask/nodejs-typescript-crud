'use strict'
import { Model } from 'sequelize'

interface BooksAttributes {
  id: number
  title: string
  description: string
}

module.exports = (sequelize: any, DataTypes: any) => {
    class Books extends Model<BooksAttributes>
        implements BooksAttributes {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        id!: number
        title!: string
        description!: string

        static associate () {
            // define association here
        }
    }
    Books.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Books'
    })
    return Books
}
