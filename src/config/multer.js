import multer from 'multer';
import crypto from 'crypto';
import { extname, resolve } from 'path';

// Configuração do multer
export default {
  storage: multer.diskStorage({
    // Caminho onde salva a imagem do avatar
    destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    filename: (req, file, callback) => {
      crypto.randomBytes(16, (err, res) => {
        if (err) return callback(err);

        return callback(null, res.toString('hex') + extname(file.originalname));
      });
    },
  }),
};
