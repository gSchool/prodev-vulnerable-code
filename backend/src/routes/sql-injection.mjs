import { pool } from '../db/index.mjs';
import Router from '@koa/router';

export const router = new Router({
  prefix: '/fruits',
});

router.get('/', async ctx => {
  const { name } = ctx.request.query;
  try {

    const { rows } = await pool.query(`
      SELECT quantity
      FROM fruits
      WHERE name = '${name}'
    `); //              ↑
        //              +--- Injection point

    rows[0] = rows[0] || { quantity: 0 };
    ctx.body = rows[0].quantity;
  } catch (e) {
    ctx.status = 500;
    ctx.body = { message: e.message };
  }
});
