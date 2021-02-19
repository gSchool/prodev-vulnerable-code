import { Person } from '../db/index.mjs';
import Router from '@koa/router';
import jwt from 'jsonwebtoken';

export const router = new Router({
  prefix: '/badlogin',
});

router.post('/', async ctx => {
  const { username, password } = ctx.request.body;
  const person = await Person.findOne({ username, password });
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
