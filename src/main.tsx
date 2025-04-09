import { createServer, Model } from 'miragejs';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App.tsx';

import './index.css';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Edição de vídeo',
          amount: 400,
          type: 'deposit',
          category: 'Trabalho',
          createdAt: new Date('2025-02-01 09:00:00'),
        },
        {
          id: 2,
          title: 'Renda',
          amount: 800,
          type: 'withdraw',
          category: 'Renda',
          createdAt: new Date('2025-02-05 10:00:00'),
        },
      ],
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    });
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
