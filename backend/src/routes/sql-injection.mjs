import { pool } from '../db/index.mjs';
import Router from '@koa/router';

export const router = new Router({
  prefix: '/students',
});

router.post('/', async ctx => {
  const { name } = ctx.request.body;
  const { rows } = await pool.query(`
    INSERT INTO students (name)
    VALUES ('${name}')
    RETURNING id
  `);
  ctx.body = {
    id: rows[0].id,
    name
  };
});
