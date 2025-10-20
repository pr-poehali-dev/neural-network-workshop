import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HopeSection = () => {
  return (
    <section id="hope" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl p-8 backdrop-blur">
              <Icon name="TrendingUp" size={64} className="text-secondary mb-4" style={{ animation: 'neon-green-pulse 2s ease-in-out infinite' }} />
              <div className="space-y-4">
                {[
                  'Автоматизация анализа',
                  'Прогноз на основе данных',
                  'Оптимизация бизнес-процессов'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-lg">
                    <Icon 
                      name="Check" 
                      className="text-secondary" 
                      style={{ 
                        animation: `check-appear 0.6s ease-out ${idx * 0.2}s both` 
                      }} 
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">Как нейросети решают ваши задачи</h2>
            <p className="text-lg text-muted-foreground">
              Наши клиенты увеличили прибыль на 40% за 6 месяцев. Автоматизация позволяет сфокусироваться на стратегии.
            </p>
            <blockquote className="border-l-4 border-secondary pl-4 italic text-secondary">
              «Автоматизация высвобождает до 30% времени команды на развитие»
            </blockquote>
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90"
              onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Зарегистрироваться
              <Icon name="ArrowRight" className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HopeSection;