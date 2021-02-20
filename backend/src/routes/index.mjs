import Router from '@koa/router';
import { router as sessionRouter } from './session.mjs';
import { router as sqlInjectionRouter } from './sql-injection.mjs';

export const router = new Router();

router.use('/api', sessionRouter.routes(), sessionRouter.allowedMethods());
router.use('/api', sqlInjectionRouter.routes(), sqlInjectionRouter.allowedMethods());

router.get('/api/ok', ctx => ctx.body = { message: 'ok', timestamp: JSON.stringify(new Date()) });
