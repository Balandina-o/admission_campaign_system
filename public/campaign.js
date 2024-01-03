const path = require('path');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.resolve(process.cwd(), 'db.sqlite'),
});

const Direction = sequelize.define('Direction', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cypher: {
    type: DataTypes.STRING
  },
  acronym: {
    type: DataTypes.STRING
  }
});

const Speciality = sequelize.define('Speciality', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cypher: {
    type: DataTypes.STRING
  },
  type: {
    type: DataTypes.STRING
  }
});

const Statement = sequelize.define('Statement', {
  fullName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  group: {
    type: DataTypes.STRING
  }
});

Statement.belongsTo(Direction);
Direction.hasMany(Statement);
Statement.belongsTo(Speciality);
Speciality.hasMany(Statement);

const connect = async () => {
  await sequelize.authenticate();
  await sequelize.sync();
}

module.exports = {
  async getSpecialities() {
    await connect();

    const specialities = await Speciality.findAll({
      include: [{ model: Statement }]
    });

    return specialities.map(x => x.toJSON());
  },
  async getDirections() {
    await connect();
    const directions = await Direction.findAll();
    return directions.map(x => x.toJSON());
  }
}