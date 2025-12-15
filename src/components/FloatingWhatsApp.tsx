import { MessageCircle } from 'lucide-react';
import { openWhatsApp } from '@/lib/whatsapp';

const FloatingWhatsApp = () => {
  return (
    <button
      onClick={() => openWhatsApp()}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
      aria-label="Contato via WhatsApp"
      data-gtm-section="floating"
      data-gtm-action="whatsapp-click"
    >
      <MessageCircle className="h-7 w-7" />
    </button>
  );
};

export default FloatingWhatsApp;
