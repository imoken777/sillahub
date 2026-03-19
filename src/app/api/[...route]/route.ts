import { handle } from 'hono/vercel';
import { publicFactory } from './public/factory';
import { healthRouter } from './public/health';

const basePath = '/api';

const publicApp = publicFactory.createApp().basePath(basePath);
const publicRoutes = publicApp.route('/health', healthRouter);

export const GET = handle(publicRoutes);
export type ApiType = typeof publicRoutes;
