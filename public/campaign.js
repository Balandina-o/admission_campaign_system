const path = require('path');
const { Sequelize, DataTypes } = require('sequelize');
const fs = require('fs')

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
  },
  exam: {
    type: DataTypes.STRING
  }
});

const Statement = sequelize.define('Statement', {
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  firstName: {
    type: DataTypes.STRING
  },
  secondName: {
    type: DataTypes.STRING
  },
  gender: {
    type: DataTypes.STRING
  },
  birthday: {
    type: DataTypes.STRING
  },
  group: {
    type: DataTypes.STRING
  },
  moCat: {
    type: DataTypes.STRING
  },
  ppo: {
    type: DataTypes.STRING
  },
  pp: {
    type: DataTypes.STRING
  },
  au: {
    type: DataTypes.STRING
  },
  auDec: {
    type: DataTypes.STRING
  },
  indPoints: {
    type: DataTypes.STRING
  },
  fpS: {
    type: DataTypes.STRING
  },
  fpB: {
    type: DataTypes.STRING
  },
  fpV: {
    type: DataTypes.STRING
  },
  fpSDec: {
    type: DataTypes.STRING
  },
  fpBDec: {
    type: DataTypes.STRING
  },
  fpVDec: {
    type: DataTypes.STRING
  },
  fpSum: {
    type: DataTypes.STRING
  },
  fpFinal: {
    type: DataTypes.STRING
  },
  totalScore: {
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
  async getStatements() {
    await connect();
    const statements = await Statement.findAll();
    return statements.map(x => x.toJSON());
  },
  async getUsersForAuth() {
    await connect();
    const users = await User.findAll();
    return users.map(x => x.toJSON());
  },
  async createSpeciality(newSpec) {
    await connect();
    const speciality = await Speciality.create(newSpec);
    return speciality.toJSON();
  },
  async createDirection(newDir) {
    await connect();
    const direction = await Direction.create(newDir);
    return direction.toJSON();
  },
  async createStatement(newState) {
    await connect();
    const statement = await Statement.create(newState);
    return statement.toJSON();
  },
  async updateCurrentSpec(spec_id, specForEdit, user) {
    console.log(user);
    fs.writeFile('operations.log', new Date() + " Cообщение: Специальность " + specForEdit.name +
      " была обновлена пользователем " + user + "\n", { flag: "a+" }, (err) => {
        if (err) throw err;
      })

    console.log(specForEdit);
    const speciality = await Speciality.update(specForEdit, {
      where: { id: spec_id }
    });
    return speciality;
  },
  async updateCurrentDir(dir_id, dirForEdit) {
    console.log(dirForEdit);
    const direction = await Direction.update(dirForEdit, {
      where: { id: dir_id }
    });
    return direction;
  },
  async updateCurrentState(state_id, stateForEdit) {
    console.log(stateForEdit);
    const statement = await Statement.update(stateForEdit, {
      where: { id: state_id }
    });
    return statement;
  },
  async deleteExistingSpec(spec_id) {
    const speciality = await Speciality.destroy({
      where: { id: spec_id }
    })
    return speciality;
  },
  async deleteExistingDir(dir_id) {
    const direction = await Direction.destroy({
      where: { id: dir_id }
    })
    return direction;
  },
}