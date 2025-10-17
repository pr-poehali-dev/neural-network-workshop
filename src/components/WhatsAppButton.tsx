import Icon from '@/components/ui/icon';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/message/YRBE2VIUHPMYN1"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 group"
      aria-label="Написать в WhatsApp"
    >
      <div className="relative">
        <div 
          className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer"
          style={{
            animation: 'whatsapp-pulse 2s ease-in-out infinite'
          }}
        >
          <Icon name="MessageCircle" size={28} className="text-white md:w-8 md:h-8" />
        </div>
        
        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="bg-card border border-border rounded-lg px-4 py-2 shadow-lg whitespace-nowrap">
            <p className="text-sm font-medium">Есть вопросы? Напишите нам!</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;