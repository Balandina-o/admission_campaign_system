const path = require('path');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.resolve(process.cwd(), 'db.sqlite'),
});

const User = sequelize.define('User', {
  login: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false
  }
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
  },
  async getUsers() {
    await connect();
    const users = await User.findAll();
    return users.map(x => x.toJSON());
  },
  async createSpeciality(newSpec) {
    await connect();
    const speciality = await Speciality.create(newSpec);
    return speciality.toJSON();
  },
  async updateCurrentSpec(spec_id, specForEdit) {
    console.log(specForEdit);
    const speciality = await Speciality.update(specForEdit, {
      where: { id: spec_id }
    });
    return speciality;
  },
  async deleteExistingSpec(spec_id) {
    const speciality = await Speciality.destroy({
      where: { id: spec_id }
    })
    return speciality;
  },
}