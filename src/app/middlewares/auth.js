import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authConfig from '../../config/auth';

// Middleware de autenticação de usuário
export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Valida se o token foi inserido na request
  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  // Descontrução, pegando somente o token
  const [, token] = authHeader.split(' ');

  // Verifica se é um token válido
  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);
    req.userId = decoded.id;

    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token invalid' });
  }
};
