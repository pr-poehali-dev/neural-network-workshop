import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import MatrixBackground from '@/components/MatrixBackground';

interface HeroSectionProps {
  isVisible: boolean;
  timeLeft: { days: number; hours: number; minutes: number; seconds: number };
}

const HeroSection = ({ isVisible, timeLeft }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background" />
      
      <MatrixBackground />
      
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="neuronGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: '#00FF99', stopOpacity: 0.8}} />
            <stop offset="100%" style={{stopColor: '#00FF99', stopOpacity: 0.2}} />
          </linearGradient>
        </defs>
        
        {[...Array(25)].map((_, i) => {
          const x1 = Math.random() * 100;
          const y1 = Math.random() * 100;
          const x2 = Math.random() * 100;
          const y2 = Math.random() * 100;
          const delay = Math.random() * 5;
          
          return (
            <g key={i}>
              <line
                x1={`${x1}%`}
                y1={`${y1}%`}
                x2={`${x2}%`}
                y2={`${y2}%`}
                stroke="#00FF99"
                strokeWidth="1"
                opacity="0.3"
                style={{
                  animation: `pulse 3s ease-in-out infinite ${delay}s`
                }}
              />
              <circle
                cx={`${x1}%`}
                cy={`${y1}%`}
                r="4"
                fill="url(#neuronGradient)"
                style={{
                  animation: `float 4s ease-in-out infinite ${delay}s`
                }}
              />
              <circle
                cx={`${x2}%`}
                cy={`${y2}%`}
                r="4"
                fill="url(#neuronGradient)"
                style={{
                  animation: `float 4s ease-in-out infinite ${delay + 1}s`
                }}
              />
            </g>
          );
        })}
      </svg>
      
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 md:w-64 h-32 md:h-64 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
      </div>
      
      <div className={`container mx-auto px-4 relative z-10 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Нейросети для бизнеса
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
          Узнайте, как нейросети увеличивают продажи и экономят время: присоединяйтесь 21 октября в 19:00
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {[
            { value: timeLeft.days, label: 'дней' },
            { value: timeLeft.hours, label: 'часов' },
            { value: timeLeft.minutes, label: 'минут' },
            { value: timeLeft.seconds, label: 'секунд' }
          ].map((item, idx) => (
            <Card key={idx} className="bg-card/50 backdrop-blur border-primary/30">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-1">{item.value}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Button 
          size="lg" 
          className="text-lg px-8 py-6 animate-pulse-glow bg-primary hover:bg-primary/90"
          asChild
        >
          <a href="https://t.me/chernikovpsiholog" target="_blank" rel="noopener noreferrer">
            Зарегистрироваться бесплатно
            <Icon name="ArrowRight" className="ml-2" />
          </a>
        </Button>
        
        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Icon name="MapPin" size={20} className="flex-shrink-0" />
            <span className="text-center md:text-left">Партизанский 44 корп.10, Фактура, зал НЕОН</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Calendar" size={20} className="flex-shrink-0" />
            <span>21 октября, 19:00</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;