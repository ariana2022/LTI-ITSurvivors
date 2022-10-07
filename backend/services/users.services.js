const faker = require('faker');

const pool = require('../libs/postgres.pool');

class UsersService {
  constructor() {
    this.users = [];
    this.pool = pool;
    this.pool.on('error', (err) => {
      console.error(err);
    });
  }

  generate() {
    const users = 100;
    for (let index = 0; index < users; index++) {
      users.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        email: 'algo@gmail.com',
      });
    }
  }
  async create(data) {
    const newUser = {
      id: faker.datatype.uuid(),
      ...data,
    };
    this.users.push(newUser);
    return newUser;
  }

  async find() {
    const query = 'SELECT * FROM users';
    const rta = await this.pool.query(query);
    return rta.rows;
  }

  async findeOne(id) {
    return this.users.find((item) => item.id === id);
  }

  async update(id, changes) {
    const index = this.users.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('User not found');
    }
    const user = this.users[index];
    this.users[index] = {
      ...user,
      ...changes,
    };
    return this.users[index];
  }

  async delete(id) {
    const index = this.users.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('User not found');
    }
    this.users.splice(index, 1);
    return { id };
  }
}

module.exports = UsersService;
