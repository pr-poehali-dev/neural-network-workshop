import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="py-12 bg-card/30 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Brain" className="text-primary" size={32} />
              <span className="text-xl font-bold">Neural School</span>
            </div>
            <p className="text-muted-foreground">
              Образовательная платформа по внедрению нейросетей в бизнес
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Контакты</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Email: chernikovru@yandex.ru</p>
              <p>Телефон: +7 (981) 129-24-99</p>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">Социальные сети</h3>
            <div className="flex gap-4">
              <a href="https://vk.com/chernikovpsiholog" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" title="ВКонтакте">
                <Icon name="Share2" size={24} />
              </a>
              <a href="https://t.me/chernikovgpt" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" title="Телеграм">
                <Icon name="Send" size={24} />
              </a>
              <a href="https://instagram.com/chernikovpsiholog/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" title="Инстаграм">
                <Icon name="Instagram" size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; 2025 Neural School. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;