// WhatsApp contact configuration
// TODO: Replace with actual WhatsApp number
const WHATSAPP_NUMBER = '5511941837634';
const DEFAULT_MESSAGE = 'Olá! Gostaria de agendar uma consulta.';

// Input validation and sanitization for security
const sanitizeMessage = (message: string): string => {
  // Remove any potentially malicious characters and limit length
  return message
    .trim()
    .slice(0, 500) // Limit message length
    .replace(/[<>]/g, ''); // Remove HTML tags
};

export const openWhatsApp = (customMessage?: string) => {
  const sanitizedMessage = sanitizeMessage(customMessage || DEFAULT_MESSAGE);
  const message = encodeURIComponent(sanitizedMessage);
  // Use noopener and noreferrer for security
  const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  window.open(link, '_blank', 'noopener,noreferrer');
};

export const getWhatsAppLink = (customMessage?: string) => {
  const sanitizedMessage = sanitizeMessage(customMessage || DEFAULT_MESSAGE);
  const message = encodeURIComponent(sanitizedMessage);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
};
