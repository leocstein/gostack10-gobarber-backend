// Configuração conexão com Mailtrap

export default {
  host: 'smtp.mailtrap.io',
  port: 25,
  secure: false,
  auth: {
    user: '3f280fedccebfb',
    pass: '8bf036a8c65840',
  },
  default: {
    from: 'Equipe GoBarber <noreplay@gobarber.com>',
  },
};

/**
 * Amazon SES
 * Mailgun
 * Sparkpost
 * Mandril (mailchimp)
 * Maltrap (ambiente de desenvolvimento)
 */
