import { createServer } from 'miragejs';
import { todoGenerator } from '../faker';

export function makeServer () {
  createServer({
    environment: 'development',
    routes() {
      this.namespace = 'api';
      this.get('/reminders', () => ({
        reminders: todoGenerator(5),
      }));

      this.namespace = '';
      this.passthrough();
    },
  });
}
