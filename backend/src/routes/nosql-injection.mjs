import { Person } from '../db/index.mjs';
import Router from '@koa/router';
import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET;

export const router = new Router({
  prefix: '/badlogin',
});

if (await Person.findOne({ username: 'admin'}).exec() === null) {
  console.log('is this thing on?');
  new Person({ username: 'admin', password: 'p455w0rd' }).save();
  new Person({ username: 'user', password: 'password123.' }).save();
}

router.post('/', async ctx => {
  const { username, password } = ctx.request.body;
  console.log({ username, password });
  const person = await Person.findOne({ username, password }).exec();
  console.log('person', person);
  if (person) {
    const token = jwt.sign({ name: person.name, roles: person.roles, }, secret);
    ctx.status = 201;
    ctx.body = { token };
  } else {
    ctx.status = 404;
    ctx.body = {
      message: 'Could not log in with those credentials.',
    };
  }
});
