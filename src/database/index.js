import Sequelize from 'sequelize';
import mongoose from 'mongoose';

import User from '../app/models/User';
import File from '../app/models/File';
import Appointment from '../app/models/Appointment';

import databaseConfig from '../config/database';

// Carrega os models
const models = [User, File, Appointment];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    // Cria a conexão com o banco de dados postgre
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      // Carrega os relacionamentos entre as models
      .map(model => model.associate && model.associate(this.connection.models));
  }

  // Cria a conexão com o banco de dados mongoDB
  mongo() {
    this.mongoConnection = mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    });
  }
}

export default new Database();
