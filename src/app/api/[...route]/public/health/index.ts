import { publicFactory } from '../factory';

export const healthRouter = publicFactory.createApp().get('/', (c) =>
  c.json(
    {
      status: 'ok',
      timestamp: new Date().toISOString(),
    },
    200,
  ),
);
