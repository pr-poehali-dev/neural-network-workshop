import { Send } from 'lucide-react';

const TelegramButton = () => {
  const handleClick = () => {
    window.open('https://t.me/GPTchernikov_bot', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-24 right-6 z-50 bg-[#0088cc] hover:bg-[#006ba3] text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 group"
      aria-label="Написать в Telegram"
    >
      <Send className="w-6 h-6" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Написать в Telegram
      </span>
    </button>
  );
};

export default TelegramButton;
