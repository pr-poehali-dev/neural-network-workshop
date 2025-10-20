import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="py-12 bg-card/30 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
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
              <a href="https://vk.com/chernikovpsiholog" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2" title="ВКонтакте">
                <Icon name="Share2" size={28} />
              </a>
              <a href="https://t.me/chernikovgpt" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2" title="Телеграм">
                <Icon name="Send" size={28} />
              </a>
              <a href="https://instagram.com/chernikovpsiholog/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2" title="Инстаграм">
                <Icon name="Instagram" size={28} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-4">
            <a 
              href="https://docs.google.com/document/d/1Dp63AC8s0WIX2BtGBcIArMHLJNXMSmckfsuJsRvqHJU/edit?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors underline"
            >
              Договор Оферты
            </a>
            <a 
              href="https://docs.google.com/document/d/1pUdq_l-CkxX0Nwlj8rlnrhvBbHuRr0aSPjPTm-6D6SY/edit?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors underline"
            >
              Политика конфиденциальности
            </a>
          </div>
          <p>&copy; 2025 Neural School. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;