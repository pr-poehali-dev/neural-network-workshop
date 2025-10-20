import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import RegistrationForm from '@/components/RegistrationForm';

const RegisterSection = () => {
  const [registered, setRegistered] = useState(0);
  const [spotsLeft, setSpotsLeft] = useState(40);

  useEffect(() => {
    const interval = setInterval(() => {
      setRegistered((prev) => {
        if (prev < 40) {
          return prev + 1;
        }
        return prev;
      });
      setSpotsLeft((prev) => {
        if (prev > 0) {
          return prev - 1;
        }
        return prev;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="register" className="py-20">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary/20 to-secondary/20 border-primary/30">
          <CardContent className="p-6 md:p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Не упустите возможность
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Зарегистрируйтесь сейчас и получите бонусный чек-лист «10 способов внедрить ИИ в бизнес за неделю»
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center gap-2 text-lg">
                <Icon name="Users" className="text-primary" />
                <span>Уже зарегистрировано: <strong>{registered} человек</strong></span>
              </div>
              <div className="flex items-center gap-2 text-lg">
                <Icon name="Clock" className="text-primary" />
                <span>Осталось мест: <strong>{spotsLeft}</strong></span>
              </div>
            </div>
            
            <RegistrationForm />

            <p className="text-sm text-muted-foreground mt-6 flex items-center justify-center gap-2">
              <span>После регистрации вы мгновенно получите свой подарок</span>
              <span className="relative inline-block">
                <Icon 
                  name="Gift" 
                  size={24} 
                  className="text-primary inline" 
                  style={{ animation: 'gift-glow 2s ease-in-out infinite' }}
                />
                {[...Array(8)].map((_, i) => (
                  <span
                    key={i}
                    className="absolute w-1 h-1 rounded-full"
                    style={{
                      backgroundColor: ['#ff6600', '#00ff99', '#ffff00', '#ff0099'][i % 4],
                      animation: `confetti-pop 1.5s ease-out infinite ${i * 0.15}s`,
                      '--x': `${Math.cos((i / 8) * Math.PI * 2) * 30}px`,
                      '--y': `${Math.sin((i / 8) * Math.PI * 2) * 30}px`,
                      left: '50%',
                      top: '50%'
                    } as React.CSSProperties}
                  />
                ))}
              </span>
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RegisterSection;