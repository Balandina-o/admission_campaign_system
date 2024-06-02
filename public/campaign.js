const fs = require('fs')
const path = require('path');
const mkdirp = require('mkdirp');
const { Sequelize, DataTypes } = require('sequelize');

const dbPath = path.resolve(path.parse(__dirname).root, 'Database')
mkdirp.sync(dbPath)

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.resolve(dbPath, 'db.sqlite')
});

const User = sequelize.define('User', {
  nameUser: {
    type: DataTypes.STRING,
    allowNull: false
  },
  secondNameUser: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastNameUser: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
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

module.exports = class Campaign {

  constructor(logger) {
    this.logger = logger
  }

  // getReportZip() {
  //   return content;
  // }

  async connect() {
    await sequelize.authenticate();
    await sequelize.sync();
  }

  async getSpecialities() {
    await this.connect();
    const specialities = await Speciality.findAll({
      include: [{ model: Statement }]
    });
    return specialities.map(x => x.toJSON());
  }

  async getSpeciality(id) {
    await this.connect();
    this.logger.info(`Загружена специальность Id=${id}`)
    const speciality = await Speciality.findByPk(id);
    return speciality.toJSON();
  }

  async getDirections() {
    try {
      await this.connect();
      const directions = await Direction.findAll();
      return directions.map(x => x.toJSON());
    } catch (err) {
      this.logger.error(err);
      throw err;
    }
  }
  async getStatements() {
    await this.connect();
    const statements = await Statement.findAll();
    return statements.map(x => x.toJSON());
  }
  async getUsersForAuth() {
    await this.connect();
    const users = await User.findAll();
    return users.map(x => x.toJSON());
  }
  async createSpeciality(newSpec) {
    await this.connect();
    const speciality = await Speciality.create(newSpec);
    return speciality.toJSON();
  }
  async createDirection(newDir) {
    await this.connect();
    const direction = await Direction.create(newDir);
    return direction.toJSON();
  }
  async createStatement(newState) {
    await this.connect();
    const statement = await Statement.create(newState);
    return statement.toJSON();
  }

  async whiteReport(report) {
    fs.writeFileSync(path.resolve(__dirname, "output.docx"), report);
  }

  async updateCurrentSpec(spec_id, specForEdit, user) {
    console.log(user);
    this.logger.info(`Специальность Id=${spec_id} ` + specForEdit.name + `была обновлена пользователем`)
    // fs.writeFile('operations.log', new Date() + " Cообщение: Специальность " + specForEdit.name +
    //   " была обновлена пользователем " + user + "\n", { flag: "a+" }, (err) => {
    //     if (err) throw err;
    //   })
    console.log(specForEdit);
    const speciality = await Speciality.update(specForEdit, {
      where: { id: spec_id }
    });
    return speciality;
  }
  async updateCurrentDir(dir_id, dirForEdit) {
    console.log(dirForEdit);
    const direction = await Direction.update(dirForEdit, {
      where: { id: dir_id }
    });
    return direction;
  }
  async updateCurrentState(state_id, stateForEdit) {
    console.log(stateForEdit);
    const statement = await Statement.update(stateForEdit, {
      where: { id: state_id }
    });
    return statement;
  }
  async deleteExistingSpec(spec_id) {
    const speciality = await Speciality.destroy({
      where: { id: spec_id }
    })
    return speciality;
  }
  async deleteExistingDir(dir_id) {
    const direction = await Direction.destroy({
      where: { id: dir_id }
    })
    return direction;
  }
}
