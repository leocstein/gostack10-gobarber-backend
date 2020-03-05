import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController';
import ScheduleController from './app/controllers/ScheduleController';
import NotificationController from './app/controllers/NotificationController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

// Rota para criar usuário
routes.post('/users', UserController.store);

// Rota para criar sessão
routes.post('/sessions', SessionController.store);

// Middleware de autenticação de usuário
// A partir deste middleware, todas as rotas precisam de um usuário autenticado
routes.use(authMiddleware);

// Rota para atualizar usuário
routes.put('/users', UserController.update);

// Rota para listar usuários providers
routes.get('/providers', ProviderController.index);

// Rota para listar os agendamentos
routes.get('/appointments', AppointmentController.index);

// Rota para criar um agendamento
routes.post('/appointments', AppointmentController.store);

// Rota para listar agendamentos de um provider
routes.get('/schedule', ScheduleController.index);

// Rota para listar as notificações
routes.get('/notifications', NotificationController.index);

// Rota para atualizar a notificação com lida
routes.put('/notifications/:id', NotificationController.update);

// Rota para enviar imagem do avatar do usuário
routes.post('/files', upload.single('file'), FileController.store);

export default routes;
